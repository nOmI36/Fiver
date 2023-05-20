const mongodb = require("mongodb");
const { mongo } = require("mongoose");

const config = require("../config");

const testModel = require("./ODM/models").testLog;
const LRSModel = require("./ODM/models").LRSModel;
const products = require("./ODM/models").product;
const signature = require("./signature");
const email = require("./utils/email");
const { createBucketWrapper } = require("./utils/buckets");

const testRunner = require("../lrs-conformance-test-suite/bin/testRunner").testRunner;

const client = new mongodb.MongoClient(`mongodb://${config.mongo.host}`);
const appDb = new mongodb.Db(client, config.mongo.db);

const bucket = createBucketWrapper(appDb);


function signAndSave(runner, cb) {
    products.findOne(
        {
            uuid: runner.testOfProductUUID
        },
        async (err, product) => {
            if (err) return cb(err);
            if (!product) return cb("product is null");

            const record = new testModel();

            // keep this data in the record directly, so that even if the info in the DB at this uuid changes
            // we know what it was when the test was run.

            record.testOfProductUUID = runner.testOfProductUUID;
            record.product = runner.product;
            
            const log = runner.getCleanRecord();

            // checks if all tests were run (1440+ and no grep) and all tests were passed
            if (global.batteryInfo) {

                console.log(runner.fla)

                let correspondingBattery = global.batteryInfo[runner.xapiVersion];
                let noGrepUsed = !runner.options.grep;
                let passedEverything = runner.summary.passed === runner.summary.total;
                let passedConformance = runner.summary.total >= correspondingBattery.conformanceTestCount;

                log.summary.conformant = noGrepUsed && passedEverything && passedConformance;
            } else {
                log.summary.conformant = undefined;
            }

            /* what is this?
				if (runner.options.grep)
					runner.options.grep = true;
				*/

            for (const val in log) {
                record[val] = log[val];
            }

            // sign the log
            try {
                delete log.log;
                record.signature = signature.sign(log);
            } catch (e) {
                console.error(e);
            }

            email.sendTestCompleteEmail(record.owner, record);
            // save to database
            const logData = record.log;
            delete record.log;
            record.logUUID = require("uuid").v4();

            await bucket.writeFile(record.logUUID, logData);

            console.log("saved in gridstore");
            record.save(cb);

            // var gridStore = new GridStore(appDb, record.logUUID, "w");
            // gridStore.open(function(err, gridStore)
            // {
            // 	// Write a line to the file using the puts method
            // 	gridStore.write(new Buffer(JSON.stringify(logData),"utf8"), function(err, gridStore)
            // 	{

            // 		// Flush the file to GridFS
            // 		gridStore.close(function(err, result)
            // 		{
            // 			console.log("saved in gridstore");
            // 			record.save(cb);
            // 		});
            // 	});
            // });
        }
    );
}

// Just a utility to keep track of running tests. Will eventually need to prevent
// launch if concurency is reached, or start queuing
const testManager = function () {
    this.testRunners = [];
};
testManager.prototype.addTest = function (
    name,
    owner,
    runnerFlags,
    lrsSettingsUUID,
    options
) {
    RegExp.escape = function (string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    };

    let grep;
    // make sure grep is an Array otherwise skip conversion
    if (options.grep && Array.isArray(options.grep)) {
        grep = "";
        options.grep.forEach(function (g) {
            grep += RegExp.escape(g) + "|";
        });
        // removes extra '|' character at the end
        grep = grep.slice(0, -1);
        options.grep = grep;
    }

    const runner = new testRunner(
        name,
        owner,
        runnerFlags,
        lrsSettingsUUID,
        options
    );
    runner.manager = this;
    const self = this;
    LRSModel.findOne(
        { uuid: runner.lrsSettingsUUID },
        function (err, lrsConfig) {
            if (err) throw err;
            if (!lrsConfig) throw "LRSConfig is null";
            products.findOne(
                { uuid: lrsConfig.associatedProduct },
                function (err, product) {
                    if (err) return cb(err);
                    if (!product) return cb("product is null");

                    runner.testOfProductUUID = lrsConfig.associatedProduct;
                    runner.product = {
                        productName: product.productName,
                        productVersion: product.productVersion,
                        companyName: product.companyName
                    };
                    self.enqueue(runner);
                }
            );
        }
    );

    return runner.uuid;
};
testManager.prototype.enqueue = function (runner) {
    this.testRunners.push(runner);
    const self = this;
    runner.on("message", (msg) => {
        if (msg.action === "end") {
            signAndSave(runner, function (err) {
                if (err) console.error(err);
                self.dequeue(runner);
            });
        }
    });
    this.runQueue();
};
testManager.prototype.dequeue = function (runner) {
    this.removeTest(runner.uuid);
    this.runQueue();
};
testManager.prototype.runQueue = function () {
    const concurrency = this.concurrency();
    for (let i = concurrency; i < config.concurrency; i++) {
        this.runNext();
    }
};
testManager.prototype.concurrency = function () {
    let concurrency = 0;
    for (let i = 0; i < this.testRunners.length; i++) {
        if (this.testRunners[i].state === "started") {
            concurrency++;
        }
    }
    return concurrency;
};
testManager.prototype.runNext = function () {
    for (let i = 0; i < this.testRunners.length; i++) {
        if (this.testRunners[i].state == "notStarted") {
            this.testRunners[i].start();
            return;
        }
    }
};
testManager.prototype.cancelTest = function (id) {
    if (!this.testRunners[id]) {
        return;
    }
    this.testRunners[id].cancel();
};
testManager.prototype.removeTest = function (id) {
    const runner = this.getTest(id);
    const idx = this.testRunners.indexOf(runner);
    if (idx > -1) {
        this.testRunners.splice(idx, 1);
    }
};
testManager.prototype.countTests = function () {
    return this.testRunners.length;
};
testManager.prototype.getTest = function (id) {
    for (let i = 0; i < this.testRunners.length; i++) {
        if (this.testRunners[i].uuid == id) {
            return this.testRunners[i];
        }
    }
};
testManager.prototype.getAllTestIDs = function (id) {
    const ids = [];
    for (let i = 0; i < this.testRunners.length; i++) {
        ids.push(this.testRunners[i].uuid);
    }
    return ids;
};

exports.testManager = testManager;
// exports.testRunnerRecord = testRunnerRecord;
exports.TestManager = new testManager();

