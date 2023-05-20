const fs = require("fs");
const path = require("path");
const mongodb = require("mongodb");

const config = require("../config");

const utils = require("./utils/utils");
const domains = require("./utils/domains");
const TestManager = require("./testManager").TestManager;
const strings = require("./utils/strings").strings;
const { createBucketWrapper } = require("./utils/buckets");

const productHelpers = require("./helpers/products");
const versionHelpers = require("./helpers/versions");

// const { create } = require("domain");

const testLogModel = require("./ODM/models").testLog;
const lrsModel = require("./ODM/models").LRSModel;
const productModel = require("./ODM/models").product;

const suiteVersion = require("../lrs-conformance-test-suite/version").versionNumber;

/// ///////////////////////////////////////////////////////////////
// Trying to get all these identifiers strait
// lrsSettings : this is the LRS configuration - name and pass, auth type, url. Comes from DB
// lrsSettingsUUID : the UUID in the DB of the lrsSettings
// options : Optional config for this run only - test choice, title, other metadata. Entered for each run
// flags or runnerFlags: The actual data structure that will be sent to the runner process.
/// ///////////////////////////////////////////////////////////////

// Create a link into the DB in order to use GridFS
const client = new mongodb.MongoClient(`mongodb://${config.mongo.host}`);
const appDb = new mongodb.Db(client, config.mongo.db);

const supportedVersions = versionHelpers.getSupportedVersions();
const bucket = createBucketWrapper(appDb);

exports.run = function (name, lrsSettings, options, req, res, next) {
    if (!lrsSettings) {
        return res.message("LRSSettings are null");
    }

    let unsafeUrl = domains.isUnsafeAddress(lrsSettings.endpoint);
    if (unsafeUrl) {
        return res.message(
            "The configured LRS endpoint appears unsafe -- please provide a fully-qualified, public domain name."
        );
    }

    let versionSupported = versionHelpers.isVersionSupported(lrsSettings.xapiVersion);
    if (!versionSupported) {
        return res.message(
            `The configured LRS's xAPI version doesn't appear to be supported.  We currently support ${supportedVersions.join(", ")}.`
        );
    }

    let product = productHelpers.getProductFromUUID(lrsSettings.associatedProduct);
    if (product == undefined) {
        return res.message(
            "The product associated with this LRS configuration has been removed."
        );
    }

    const runnerFlags = {};
    runnerFlags.endpoint = lrsSettings.endpoint;

    if (lrsSettings.authType == "basic") {
        runnerFlags.basicAuth = true;
        runnerFlags.authUser = lrsSettings.authUser;
        runnerFlags.authPass = lrsSettings.authPass;
        runnerFlags.xapiVersion = lrsSettings.xapiVersion;

        if (runnerFlags.xapiVersion == undefined)
            runnerFlags.xapiVersion = config.suite.mainVersion;

        const uuid = TestManager.addTest(
            name || lrsSettings.name,
            req.user.email,
            runnerFlags,
            lrsSettings.uuid,
            options
        );
        res.redirect("/");
    } 
    
    else if (lrsSettings.authType == "OAuth") {
        runnerFlags.consumer_key = lrsSettings.consumer_key;
        runnerFlags.consumer_secret = lrsSettings.consumer_secret;
        runnerFlags.request_token_path = lrsSettings.request_token_path;
        runnerFlags.auth_token_path = lrsSettings.auth_token_path;
        runnerFlags.authorization_path = lrsSettings.authorization_path;
        require("./oauth").OAuthManager.queueTestConfig(
            name || lrsSettings.name,
            runnerFlags,
            lrsSettings.uuid,
            options,
            req,
            res
        );
    } 
    
    else {
        return next(strings.invalid_configuration);
    }
};

exports.runningTestsProgressJson = function (req, res, next) {
    const ids = TestManager.getAllTestIDs();
    const tests = [];
    for (let i = 0; i < ids.length; i++) {
        const test = TestManager.getTest(ids[i]);
        if (utils.testOwner(test, req.user)) {
            const progress =
                100 *
                ((test.summary.passed + test.summary.failed) /
                    test.summary.total);
            
            const testRecord = {
                uuid: ids[i],
                progress: Math.floor(progress),
                status: test.status,
                version: suiteVersion,
                startTime: test.startTime
            };

            tests.push(testRecord);
        }
    }
    res.status(200).send(tests);
};

exports.runningTests = function (req, res, next) {
    const ids = TestManager.getAllTestIDs();
    const tests = [];
    for (var i = 0; i < ids.length; i++) {
        tests.push(TestManager.getTest(ids[i]));
    }
    for (var i = 0; i < ids.length; i++) {
        tests[i].owned = utils.testOwner(test[i], req.user);
    }
    res.locals.no_tests_string = strings.no_tests_in_progress;
    renderTestToTemplate(req, res, tests);
    /* res.render('runningTests',
		{
			tests: tests,
			pageTitle:"Running Tests",
			no_tests_string: strings.no_tests_in_progress,
			parseTimestamp: function(){
				return function(text, render){
					return (new Date(parseInt(render(text)))).toString();
				};
			}
		}) */
};
// draw a list of test results to the list template
function renderTestToTemplate(req, res, results) {
    const tests = [];
    for (const i in results) {
        tests.push({
            uuid: results[i].uuid,
            name: results[i].name,
            owner: results[i].owner,
            state: results[i].state,
            progress: Math.floor(
                ((results[i].summary.passed + results[i].summary.failed) /
                    results[i].summary.total) *
                    100
            ),
            duration: results[i].duration / 1000,
            rerunKey: results[i].lrsSettingsUUID,
            startedOn: new Date(results[i].startTime).toString(),
            associatedProduct: results[i].associatedProduct,
            owned: utils.testOwner(results[i], req.user),
            flags: results[i].flags,
            lrsSettingsUUID: results[i].lrsSettingsUUID,
            version: results[i].summary
                ? results[i].summary.version
                : suiteVersion
        });
    }
    res.render("runningTests", {
        tests,
        pageTitle: "Completed Tests"
    });
}
exports.allTests = function (req, res, next) {
    testLogModel
        .find({})
        .select("-log")
        .exec(function (err, results) {
            res.locals.no_tests_string = strings.no_test_records;
            renderTestToTemplate(req, res, results);
        });
};
exports.myTestRecords = function (req, res, next) {
    // if you're the admin, just return all
    if (req.user && req.user.email == config.admin_email)
        return exports.allTests(req, res, next);

    testLogModel
        .find({ owner: req.user.email })
        .select("-log")
        .exec(function (err, results) {
            res.locals.no_tests_string = strings.no_test_records;
            renderTestToTemplate(req, res, results);
        });
};

exports.deleteRecord = function (req, res, next) {
    testLogModel.findOne(
        {
            uuid: req.params.testRunnerID
        },
        function (err, testLog) {
            // test must exist
            if (err || !testLog) {
                return res.status(400).message(strings.test_not_found);
            }
            // must be owned by the user or use must be admin
            if (!utils.testOwner(testLog, req.user)) {
                return res.status(401).message(strings.not_authorized);
            }

            testLogModel.findOneAndDelete(
                { uuid: req.params.testRunnerID },
                function (err) {
                    if (err) {
                        console.error(err);
                        res.status(400).message(strings.test_not_found);
                    } else {
                        res.redirect(
                            "/products/" + testLog.testOfProductUUID + "/"
                        );
                    }
                }
            );
        }
    );
};

exports.cancelTest = function (req, res, next) {
    const testRunner = TestManager.getTest(req.params.testRunnerID);
    if (!testRunner) return res.redirect("/");
    // must be owned by the user or use must be admin
    if (!utils.testOwner(testRunner, req.user)) {
        return res.status(401).message(strings.not_authorized);
    }
    if (testRunner.state === "started") {
        testRunner.on("message", function (msg) {
            /* if (!testRunner)
			{
				return res.status(400).send(strings.test_not_found);
			} */
            if (msg.action === "end") {
                if (!utils.testOwner(testRunner, req.user)) {
                    return res.status(400).message(strings.not_authorized);
                } else {
                    return res.redirect(
                        "/tests/" + req.params.testRunnerID + "/status"
                    );
                }
            }
        });
        testRunner.cancel();
    } else {
        TestManager.dequeue(testRunner);
    }
};

const log = false;
function getFailures(suite) {
    if (!suite) {
        return null;
    }

    // a passed/cancelled test
    if (suite.status !== "failed" && suite.tests.length === 0) {
        if (log) console.log("passed test");
        return null;
    }

    // a failed test
    else if (suite.tests.length === 0) {
        if (log) console.log("failed test");
        return suite;
    }

    // a suite
    else {
        if (log) console.log("starting suite");
        const ret = {
            title: suite.title,
            name: suite.name,
            requirement: suite.requirement,
            status: suite.status,
            tests: suite.tests.map(getFailures).filter((x) => !!x)
        };

        // a suite that's an ancestor of a failed test
        if (ret.tests.length > 0) {
            if (log) console.log("suite contains failures");
            return ret;
        }
        // a suite with no failed descendents
        else {
            if (log) console.log("suite contains no failures");
            return null;
        }
    }
}

function parseError() {
    return function (text, render) {
        const errorText = render(text).split("\n");
        if (
            errorText[0] ===
                "Error: Expected response status code to be 200 got 401" &&
            /helper.js/.test(errorText[1])
        ) {
            return "Error: Expected response status code to be 200 OK but got 401 Unauthorized. Check your credentials.";
        } else {
            return errorText[0];
        }
    };
}

function parseTimestamp() {
    return function (text, render) {
        return new Date(parseInt(render(text))).toString();
    };
}

function generateDescription() {
    if (Array.isArray(this.requirement)) {
        let refs = [];
        for (let i = 0; i < this.requirement.length; i++) {
            const prettyRef = this.requirement[i].replace(".md#", " ");
            refs.push(
                `<a target="_blank" href="https://github.com/adlnet/xAPI-Spec/blob/1.0.3/xAPI-${this.requirement[i]}">${prettyRef}</a>`
            );
        }
        refs = refs.join(", ");
        return `${this.name} (${refs})`;
    } else if (this.requirement) {
        return `${this.name} (${this.requirement})`;
    } else {
        return this.name;
    }
}

function oneOrTheOther() {
    return function (text, render) {
        const output = render(text);
        const match = /\^{10}|v{10}/.exec(output);
        if (match[0] === "^^^^^^^^^^") {
            return output.slice(0, match.index);
        } else {
            return output.slice(match.index + match[0].length);
        }
    };
}

function selector() {
    return this.tests.length > 0 ? "^^^^^^^^^^" : "vvvvvvvvvv";
}

function getTestStatusLocals(req, testRunnerID, cb) {
    // if it's not in progress in the runner, we'll have to check the DB
    const testRunner = TestManager.getTest(testRunnerID);
    if (!testRunner) {
        testLogModel.findOne({ uuid: testRunnerID }, function (err, testLog) {
            // It was not  found for some reason
            if (err || !testLog) {
                return cb(strings.test_not_found);
            }

            // Is the current user the owner of the record?
            const owned = utils.testOwner(testLog, req.user);

            productModel.findOne(
                { uuid: testLog.testOfProductUUID },
                async (err, result) => {
                    let product = null;
                    if (result) {
                        product = {};
                        product.productName = result.productName;
                        product.companyName = result.companyName;
                        product.uuid = result.uuid;
                        product.productVersion = result.productVersion;
                    }

                    let log = await bucket.readFile(testLog.logUUID);

                    if (!err && log) {
                        log = JSON.parse(JSON.stringify(log));
                    }

                    testLog.log = log;
                    cb(null, {
                        running: false,
                        progress: Math.floor(
                            ((testLog.summary.passed + testLog.summary.failed) /
                                testLog.summary.total) *
                                100
                        ),
                        test: testLog,
                        failedTests: getFailures(testLog.log),
                        duration: testLog.duration / 1000,
                        owned,
                        product,
                        associated: !!testLog.associatedProduct
                    });
                }
            );
        });
    } else {
        // So, we have the test in progress in the TestManager
        const owned = utils.testOwner(testRunner, req.user);

        productModel.findOne(
            { uuid: testRunner.testOfProductUUID },
            function (err, result) {
                let product = null;
                if (result) {
                    product = {};
                    product.productName = result.productName;
                    product.companyName = result.companyName;
                    product.uuid = result.uuid;
                    product.productVersion = result.productVersion;
                }
                cb(null, {
                    running: true,
                    progress: Math.floor(
                        ((testRunner.summary.passed +
                            testRunner.summary.failed) /
                            testRunner.summary.total) *
                            100
                    ),
                    test: testRunner,
                    failedTests: getFailures(testRunner.log),
                    owned,
                    product,
                    associated: false
                });
            }
        );
    }
}

exports.testStatus = function (req, res, next) {
    // render on server
    /*
	//If the test is in progress, get it from the in memory runner
	getTestStatusLocals(req,req.params.testRunnerID,function(err,locals)
	{
		if(err)
			return res.status(400).send(err);
		res.render("testStatus",locals);
	}) */

    getTestStatusLocals(req, req.params.testRunnerID, function (err, locals) {
        if (err) {
            return res.status(400).message(err);
        }

        if (!locals.associated && !req.user) {
            return utils.ensureLoggedIn(req, res, next);
        }

        // you can't get the status unless you are admin, the owner, or the test result is published as part of a product
        if (
            !locals.associated &&
            !locals.owned &&
            req.user.email !== config.admin_email
        ) {
            return res.status(401).message(strings.not_authorized);
        }

        locals.testRunnerID = req.params.testRunnerID;
        locals.parseError = parseError;
        locals.parseTimestamp = parseTimestamp;
        locals.generateDescription = generateDescription;
        locals.oneOrTheOther = oneOrTheOther;
        locals.selector = selector;

        // If the test is in progress, get it from the in memory runner
        res.render("testStatusLocal", locals);
    });
};

exports.statusJson = function (req, res, next) {
    getTestStatusLocals(req, req.params.testRunnerID, function (err, locals) {
        if (err) {
            return res.status(400).message(err);
        }
        // you can't get the status unless you are admin, the owner, or the test result is published as part of a product
        if (!locals.product && !req.user) {
            return utils.ensureLoggedIn(req, res, next);
        }
        if (
            !locals.product &&
            !locals.owned &&
            req.user.email !== config.admin_email
        ) {
            return res.status(401).message(strings.not_authorized);
        }

        locals.parseError = parseError;
        locals.parseTimestamp = parseTimestamp;
        locals.generateDescription = generateDescription;
        locals.oneOrTheOther = oneOrTheOther;
        locals.selector = selector;

        res.render("testStatus", locals);
    });
};

const newTestPath = path.join(__dirname, "../forms/newTest.json");
const newTestFileContent = fs.readFileSync(newTestPath);

exports.newTestSchema = JSON.parse(newTestFileContent);
exports.setupNewTestSchema = function (req, res, next) {
    const formSchema = JSON.parse(JSON.stringify(exports.newTestSchema));
    const query = {
        owner: req.user.email
    };
    if (req.params.productid) {
        query.associatedProduct = req.params.productid;
    }
    lrsModel.find(query, function (err, LRSs) {
        if (LRSs.length === 0) {
            return res.message(
                "You must first <a href='/lrsconfigs/create?defaults=%7B\"associatedProduct\"%3A\"" +
                    req.params.productid +
                    "\"%7D'>create an LRS Configuration </a>before you can run a test"
            );
        }
        for (var i in LRSs) {
            const label = LRSs[i].name;
            formSchema.fields[1].options.push({
                text: label,
                value: LRSs[i].uuid
            });
        }

        /* var suites = require("./suiteNames");
		for(var i in suites)
		{
			if(suites[i].type == "suite")
			{
				var val = suites[i].name;
				formSchema.fields[2].options.push(
				{
					text: val,
					value: val
				})
			}
		} */
        formSchema.fields[2].options = global.batteryInfo && global.batteryInfo.current.tests;

        req.formSchema = formSchema;

        if (req.query && req.query.defaults) {
            if (!req.defaults) {
                req.defaults = {};
            }

            // sliently ignore errors from parsing query string
            try {
                const query = decodeURIComponent(req.query.defaults);

                const queryDefault = JSON.parse(query);

                for (var i in queryDefault) {
                    req.defaults[i] = queryDefault[i];
                }
            } catch (e) {
                console.log(e);
            }
        }

        next();
    });
};
exports.newTest = function (req, res, next) {
    lrsModel.findOne(
        {
            uuid: req.body.testConfigID
        },
        function (err, lrsSettings) {
            if (!lrsSettings) {
                return next("Config not found");
            }
            if (err) {
                return next(err);
            }
            const options = {};
            // since multiselect is active check first value in array
            if (req.body.grep && req.body.grep[0] !== "All tests") {
                options.grep = req.body.grep;
            }
            if (
                req.body.optional &&
                req.body.optional[0] !== "No Additional Tests"
            ) {
                options.optional = req.body.optional;
            }

            options.xapiVersion = lrsSettings.xapiVersion;

            // res.message(options);
            exports.run(
                req.body.testname,
                lrsSettings,
                options,
                req,
                res,
                next
            );
        }
    );
};

exports.rerun = function (req, res, next) {
    testLogModel.findOne(
        {
            uuid: req.params.testRunnerID
        },
        function (err, testLog) {
            if (!testLog) {
                return next("testLog not found");
            }
            if (err) {
                return next(err);
            }

            lrsModel.findOne(
                {
                    uuid: testLog.lrsSettingsUUID
                },
                function (err, lrsSettings) {
                    if (!lrsSettings) {
                        return next("lrsSettings not found");
                    }
                    if (err) {
                        return next(err);
                    }

                    const options = testLog.options || {};

                    exports.run(
                        "Copy of " + testLog.name,
                        lrsSettings,
                        options,
                        req,
                        res,
                        next
                    );
                }
            );
        }
    );
};

exports.downloadFullLog = function (req, res, next) {
    testLogModel.findOne(
        {
            uuid: req.params.testID
        },
        async (err, testLog) => {
            if (!testLog) {
                return next("testLog not found");
            }
            if (err) {
                return next(err);
            }
            if (!utils.testOwner(testLog, req.user)) {
                res.status(400).send(strings.not_authorized);
            }

            // console.log("Gridstore Load", testLog.logUUID);

            let log = await bucket.readFile(testLog.logUUID);

            // console.log("testLog:", testLog);
            // console.log("gridstore log:", log);

            if (err || !log) {
                console.log(err);
                res.status(500).send("Log not found");
                return;
            }

            log = JSON.parse(JSON.stringify(log));

            res.setHeader(
                "Content-Disposition",
                "attachment; filename=\"" + testLog.name + ".txt\""
            );
            res.setHeader("Content-Type", "text/plain");

            let finallog = "";

            function lognode(node) {
                // only write final results, not suite level
                if (node && node.tests && node.tests.length == 0) {
                    finallog += node.title + "\n";
                    finallog += JSON.stringify(node.requirement) + "\n";
                    finallog += node.status + "\n";

                    if (node.error) {
                        finallog += JSON.stringify(node.error) + "\n";
                    }

                    finallog += node.log;
                }
                if (node && node.tests) {
                    for (let i = 0; i < node.tests.length; i++) {
                        lognode(node.tests[i]);
                    }
                }
            }
            lognode(log);
            res.send(finallog);
        }
    );
};

exports.redirectToLog = function (req, res, next) {
    const errorsOnly = req.body.errorsOnly || false;
    const format = req.body.format;
    const includeHTTP = req.body.includeHTTP || false;
    res.redirect(
        "/tests/" +
            req.params.testID +
            "/log?errorsOnly=" +
            errorsOnly +
            "&format=" +
            format +
            "&includeHTTP=" +
            includeHTTP
    );
};

exports.downloadLog = function (req, res, next) {
    testLogModel.findOne(
        {
            uuid: req.params.testID
        },
        async (err, testLog) => {
            if (!testLog) {
                return next("testLog not found");
            }
            if (err) {
                return next(err);
            }
            if (!utils.testOwner(testLog, req.user)) {
                res.status(400).send(strings.not_authorized);
            }

            // console.log("Gridstore Load", testLog.logUUID);

            let log = await bucket.readFile(testLog.logUUID);

            // console.log("testLog:", testLog);
            // console.log("gridstore log:", log);

            if (err || !log) {
                console.log(err);
                res.status(500).send("Log not found");
                return;
            }

            log = JSON.parse(JSON.stringify(log));

            req.query.errorsOnly = req.query.errorsOnly != "false";
            req.query.includeHTTP = req.query.includeHTTP != "false";

            const errorsOnly = req.query.errorsOnly || false;
            const format = req.query.format || "JSON";
            const includeHTTP = req.query.includeHTTP || false;

            if (format == "JSON") {
                res.setHeader("Content-Type", "application/json");
                res.setHeader(
                    "Content-Disposition",
                    "attachment; filename=\"" + testLog.name + ".json\""
                );
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.setHeader(
                    "Content-Disposition",
                    "attachment; filename=\"" + testLog.name + ".txt\""
                );
            }
            function filterLog(node, finalLog) {
                // only write final results, not suite level
                if (node && node.tests && node.tests.length == 0) {
                    if (!errorsOnly || (node.error && errorsOnly)) {
                        if (!includeHTTP) {
                            delete node.log;
                        }
                        finalLog.push(node);
                    }
                }
                if (node && node.tests) {
                    for (let i = 0; i < node.tests.length; i++) {
                        filterLog(node.tests[i], finalLog);
                    }
                }
            }

            function stringify(log) {
                let str = "";
                for (let i = 0; i < log.length; i++) {
                    const node = log[i];
                    str += node.title + "\n";
                    str += JSON.stringify(node.requirement) + "\n";
                    str += node.status + "\n";
                    if (node.error) {
                        str += JSON.stringify(node.error) + "\n";
                    }
                    if (node.log) {
                        str += node.log;
                    }
                }
                return str;
            }
            const finalLog = [];
            filterLog(log, finalLog);

            const payload =
                format == "JSON"
                    ? JSON.stringify(finalLog)
                    : stringify(finalLog);

            res.send(payload);
        }
    );
};
