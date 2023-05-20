const express = require("express");
const async = require("async");
const mongoose = require("mongoose");
const morgan = require("morgan");
const session = require("express-session");
const { xss } = require("express-xss-sanitizer");
const csurf = require("csurf");

const config = require("./config");

const utils = require("./lib/utils/utils");
utils.setConfigDefaults(config);

const testing = require("./lib/testing");
const users = require("./lib/users");

const captcha = require("./lib/captcha");

const signature = require("./lib/signature");
const lrsconfigs = require("./lib/lrsconfigs");
const schemas = require("./lib/validation/schemas");

const form = require("./forms/form").form;
const productForm = form("./forms/product.json");
const editProductForm = form("./forms/editProduct.json");
const certificateForm = form("./forms/verifySig.json");
const adminUserForm = form("./forms/adminCreateUser.json");

const mustacheRenderer = require("./lib/mustache-renderer");
const batteryInfo = require("./lrs-conformance-test-suite/batteries");

const products = require("./lib/products");
const admin = require("./lib/admin");
const xapi = require("./lib/xapi");
const app = express();

if (config.developerMode) {
    var developer = require("./lib/developer");
}

function removeCsrfFromBody(req, res, next) {
    if (req.body != undefined) {
        delete req.body._csrf;
    }

    next();
}

// render a simple template given a title and a view name
function renderPage(title, file) {
    return function (req, res, next) {
        res.locals.pageTitle = title;
        res.render(file, {});
    };
}

// startup, in future might contain more steps
async.series(
    [
		// Ensure that the DB is actually available, this will cancel startup
		// otherwise.
        function connectDB(cb) {
            mongoose.connect(
                `mongodb://${config.mongo.host}/${config.mongo.db}`
            );
            const db = mongoose.connection;
            db.once("open", function (err) {
                cb(err);
            });
        },
        function getGitHash(cb) {
            const stdout =
                require("child_process").execSync("git rev-parse HEAD");
            config.gitHash = stdout.toString();
            cb();
        },
        function getBatteryInfo(cb) {
            global.batteryInfo = batteryInfo;
            global.batteryInfo.current = batteryInfo[config.suite.mainVersion];
            cb();
        },
        function setupMiddleware(cb) {
            const cookieSession = require("cookie-session");
            app.use(
                cookieSession({
                    name: "session",
                    keys: [
                        "thisisthesessionseceretandweshouldchangeitsometime"
                    ],
                    // Cookie Options
                    maxAge: 24 * 60 * 60 * 1000 // 24 hours
                })
            );
            // serve all the other static files
            app.use("/static", express.static("public"));

            // hook up various middlewares
            app.use(morgan("dev"));
            app.use(require("body-parser").json());
            app.use(
                require("body-parser").urlencoded({
                    extended: true
                })
            );
            app.use(
                xss({
                    allowedKeys: ["defaults"]
                })
            );
            app.use(require("cookie-parser")());
            cb();
        },
        function setupPassport(cb) {
            const passport = users.setupPassport();

            app.use(passport.initialize());
            app.use(passport.session());

            // save user into locals for templates
            app.use(utils.usertoLocals);
            app.use(function (req, res, next) {
                res.locals.requrl = encodeURIComponent(req.url);
                next();
            });

            // make sure that the user is forced to the reset password page if they logged in with the temp key
            app.use(utils.checkMustResetPassword);
            cb();
        }
    ],
    function startServer(err) {
        if (err) {
            console.error(err);
            return;
        }

        // serve static files
        // use mustache templating

        app.use(utils.message);
        if (config.developerMode) {
            app.use(developer.developerToLocals);
        }

        // save the git hash to the config to print in the footer
        app.use(function (req, res, next) {
            if (!res.locals) {
                res.locals = {};
            }
            res.locals.gitHash = config.gitHash;
            next();
        });

        app.use(admin.userIsAdmin);
        app.engine("html", mustacheRenderer);
        app.set("view engine", "html");
        app.set("views", __dirname + "/views");
        app.set("partials", {
            header: "header",
            footer: "footer",
            scripts: "scripts",
            testStatus: "testStatus",
            "suite-node": "suite-node",
            form: "forms/form",
            "forms/checkboxTree": "forms/checkboxTree",
            pageination: "pageination",
            disclaimer: "disclaimer"
        });
        app.set("layout", "layout");
        app.set("cacheTemplates", !config.debug);

        app.use(function (req, res, next) {
            csurf({ cookie: true })(req, res, function (err) {
                if (err) {
                    res.status(400).send("Improper CSRF token.");
                } else {
                    next();
                }
            });
        });
        app.use(removeCsrfFromBody);

        app.use(function (req, res, next) {
            res._render = res.render;
            res.render = function (file, params) {
                res.setHeader("Cache-Control", "max-age=0, no-store");
                res._render(file, {
                    ...params,
                    siteKey: config.recaptcha.siteKey,
                    csrfToken:
                        req.csrfToken != undefined ? req.csrfToken() : undefined
                });
            };
            next();
        });

        // render the dashboard page if there is a user logged in, otherwise home
        app.get("/", function (req, res, next) {
            if (!req.user) {
                return renderPage("xAPI Test Suite", "home")(req, res, next);
            } else {
                return users.dashboard(req, res, next);
            }
        });

        app.get("/OAuthError", renderPage("OAuthError", "OAuthError"));

        app.get("/users/create", utils.ensureNotLoggedIn, users.renderCreate);
        app.post(
            "/users/create",
            captcha.checkCaptcha("/users/create?captchaError=1"),
            schemas.validate(schemas.createAccount),
            utils.ensureNotLoggedIn,
            users.createUser
        );
        // Get the salt for the given user name. Not sure this is necessary, since we no longer hash on the client
        // app.get("/users/salt", users.salt);

        app.get("/users/logout", utils.ensureLoggedIn, users.logout);
        app.get("/users/login", utils.ensureNotLoggedIn, users.renderLogin);

        app.post(
            "/users/login",
            schemas.validate(schemas.login),
            utils.ensureNotLoggedIn,
            users.login
        );
        // When the user gets the email and clicks the link, find the user with the given validate key
        // go ahead and mark their account as validated, then log them in.
        app.get(
            "/users/validateEmail",
            utils.ensureNotLoggedIn,
            renderPage("Enter Validataion Code", "manualValidationCodeEntry")
        );
        app.get(
            "/users/validateEmail/*",
            utils.ensureNotLoggedIn,
            users.validateEmail
        );

        // Resend the validation email. NOTE: don't reset the validation key here
        app.get(
            "/users/resendValidation",
            utils.ensureNotLoggedIn,
            renderPage("Resend Validation Email", "resendValidation")
        );
        app.post(
            "/users/resendValidation",
            captcha.checkCaptcha("/users/resendValidation?captchaError=1"),
            schemas.validate(schemas.email),
            utils.ensureNotLoggedIn,
            users.resendValidation
        );

        // Update the users password. Takes the new password in plaintext in the body. Also generates a new salt
        app.get(
            "/users/resetPassword",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            renderPage("Reset Password", "resetPassword")
        );
        app.post(
            "/users/resetPassword",
            captcha.checkCaptcha("/users/resetPassword?captchaError=1"),
            schemas.validate(schemas.password),
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            users.resetPassword
        );

        // Delete the account.
        app.get(
            "/users/deleteAccount",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            renderPage("Delete Account", "deleteAccount")
        );
        app.post(
            "/users/deleteAccount",
            captcha.checkCaptcha("/users/deleteAccount?captchaError=1"),
            schemas.validate(schemas.deleteAccount),
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            users.deleteAccount
        );

        // Allow the user to say they forgot their password. Take the email address as post data.
        app.get(
            "/users/forgotPassword",
            utils.ensureNotLoggedIn,
            renderPage("Reset Password", "forgotPassword")
        );
        app.post(
            "/users/forgotPassword",
            captcha.checkCaptcha("/users/forgotPassword?captchaError=1"),
            schemas.validate(schemas.email),
            utils.ensureNotLoggedIn,
            users.forgotPassword
        );

        // get a list of running tests
        app.get("/tests/running", testing.runningTests);

        app.get(
            "/tests/progress/json",
            utils.ensureLoggedIn,
            testing.runningTestsProgressJson
        );

        // there is no test all - if you're the admin, my mean all
        // app.get("/tests/all", testing.allTests);

        // get a list of all DB test records for the logged in user
        app.get("/tests/my", utils.ensureLoggedIn, testing.myTestRecords);
        // Get the test log in JSON format
        app.get("/tests/:testRunnerID/status/json", testing.statusJson);
        // Delete a record of a test from the database
        app.get(
            "/tests/:testRunnerID/delete",
            utils.ensureLoggedIn,
            testing.deleteRecord
        );

        // Get the full log file
        // app.get("/tests/:testID/fullLog", utils.ensureLoggedIn, testing.downloadFullLog);
        app.get(
            "/tests/:testID/log",
            utils.ensureLoggedIn,
            testing.downloadLog
        );

        app.get(
            "/tests/:testID/fullLog",
            utils.ensureLoggedIn,
            form("./forms/downloadLog.json")
        );
        app.post(
            "/tests/:testID/fullLog",
            utils.ensureLoggedIn,
            form("./forms/downloadLog.json"),
            testing.redirectToLog
        );

        // print the logs from the tests
        app.get(
            "/tests/:testRunnerID/cancel",
            utils.ensureLoggedIn,
            testing.cancelTest
        );
        // Prints the status page.
        app.get("/tests/:testRunnerID/status", testing.testStatus);
        app.get("/tests/submitted", renderPage("Test Submitted", "submitted"));
        app.get(
            "/authback",
            require("./lib/oauth").OAuthManager.processAuthback.bind(
                require("./lib/oauth").OAuthManager
            )
        );

        // serve verifying test pages
        app.get("/verify", certificateForm);
        app.post("/verify", certificateForm, signature.verifyRequest);

        // CRUD operations for test configs. TODO:GUIs
        app.get("/lrsconfigs/:uuid", lrsconfigs.read);
        app.post(
            "/lrsconfigs/create",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            schemas.validate(schemas.lrsconfig),
            lrsconfigs.create
        );
        app.get(
            "/lrsconfigs/:uuid/delete",
            utils.ensureLoggedIn,
            lrsconfigs.delete
        );
        app.post(
            "/lrsconfigs/:uuid/update",
            utils.ensureLoggedIn,
            schemas.validate(schemas.lrsconfig),
            lrsconfigs.update
        );
        app.get(
            "/lrsconfigs/:uuid/update",
            utils.ensureLoggedIn,
            lrsconfigs.updateGui
        );
        app.get(
            "/lrsconfigs/:uuid/run",
            utils.ensureLoggedIn,
            lrsconfigs.runTestsFromConfig
        );

        app.get(
            "/lrsconfigs/create",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            lrsconfigs.renderCreate
        );
        app.get(
            "/lrsconfigs/my",
            utils.ensureLoggedIn,
            lrsconfigs.myLRSConfigs
        );

        app.get(
            "/products/create/",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            productForm
        );

        app.post(
            "/products/create/",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            productForm,
            schemas.validate(schemas.createProduct),
            products.create
        );

        //		app.get("/products/my/",utils.ensureLoggedIn,products.my);
        //		app.get("/products/all/:page",products.all);
        //	app.get("/products/all/",function(req,res,next){res.redirect("/products/all/0")});
        //	app.get("/products/search/:search/:page",products.search);
        app.get(
            "/products/:uuid/",
            products.getProduct,
            products.ensureOwner,
            products.view
        );

        app.get(
            "/products/:uuid/delete/",
            utils.ensureLoggedIn,
            products.getProduct,
            products.ensureOwner,
            products.renderDelete
        );
        app.post(
            "/products/:uuid/delete/",
            utils.ensureLoggedIn,
            products.getProduct,
            products.ensureOwner,
            products.delete
        );

        app.get(
            "/products/:uuid/edit/",
            utils.ensureLoggedIn,
            products.getProduct,
            products.ensureOwner,
            products.product_to_form,
            function (req, res, next) {
                req.formTitle = "Edit Product";
                req.formSubmitText = "Edit";
                next();
            },
            editProductForm
        );

        app.post(
            "/products/:uuid/edit/",
            utils.ensureLoggedIn,
            products.getProduct,
            products.ensureOwner,
            editProductForm,
            schemas.validate(schemas.editProduct),
            products.edit
        );

        const logoForm = form("./forms/uploadLogo.json");
        app.post(
            "/products/:uuid/setlogo/",
            utils.ensureLoggedIn,
            products.getProduct,
            products.ensureOwner,
            logoForm,
            products.setLogo
        );
        app.get(
            "/products/:uuid/setlogo/",
            utils.ensureLoggedIn,
            products.getProduct,
            products.ensureOwner,
            logoForm
        );
        app.get("/products/:uuid/logo", products.getProduct, products.logo);

        app.get(
            "/tests/:testRunnerID/rerun",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            admin.cannotBeAdmin,
            testing.rerun
        );
        app.get(
            "/tests/new/:productid/",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            testing.setupNewTestSchema,
            form(testing.newTestSchema)
        );
        app.post(
            "/tests/new/:productid/",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            form(testing.newTestSchema),
            testing.newTest
        );

        app.get(
            "/tests/new/",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            testing.setupNewTestSchema,
            form(testing.newTestSchema)
        );
        app.post(
            "/tests/new/",
            utils.ensureLoggedIn,
            admin.cannotBeAdmin,
            form(testing.newTestSchema),
            testing.newTest
        );

        //	app.get("/tests/:testRunnerID/associate/", utils.ensureLoggedIn,products.associateProductForm,form(products.associateProductSchema));
        //	app.post("/tests/:testRunnerID/associate/", utils.ensureLoggedIn,form(products.associateProductSchema),products.associateProduct);

        app.get(
            "/products/:uuid/certificate/",
            products.getProduct,
            products.downloadCert
        );

        app.get(
            "/products/:uuid/associate/",
            utils.ensureLoggedIn,
            products.getProduct,
            products.ensureOwner,
            products.associateResultsForm,
            form(products.associateResultsSchema)
        );
        app.post(
            "/products/:productid/associate/",
            utils.ensureLoggedIn,
            admin.mustBeAdmin,
            form(products.associateResultsSchema),
            products.associateResults
        );
        app.get(
            "/products/:productid/associate/:testRunnerID/",
            admin.mustBeAdmin,
            utils.ensureLoggedIn,
            products.associateResults
        );
        app.get(
            "/products/:productid/request_associate/:testRunnerID/",
            utils.ensureLoggedIn,
            products.request_associate
        );

        if (config.developerMode) {
            app.get(
                "/developer/markAllPassing/:uuid",
                developer.markAllPassing
            );
        }

        app.get("/admin/users", admin.mustBeAdmin, admin.users);

        app.get(
            "/admin/users/:uuid/delete",
            admin.mustBeAdmin,
            admin.getUser,
            admin.deleteUser
        );
        app.get(
            "/admin/users/:uuid/verify",
            admin.mustBeAdmin,
            admin.getUser,
            admin.verifyUser
        );
        app.get(
            "/admin/users/:uuid/unverify",
            admin.mustBeAdmin,
            admin.getUser,
            admin.unVerifyUser
        );
        app.get(
            "/admin/users/:uuid/resetPassword",
            admin.mustBeAdmin,
            admin.getUser,
            admin.resetPassword
        );

        app.get("/admin/products", admin.mustBeAdmin, admin.products);
        app.get("/admin/queue", admin.mustBeAdmin, admin.queue);
        app.get("/admin/users/create/", admin.mustBeAdmin, adminUserForm);
        app.post(
            "/admin/users/create/",
            admin.mustBeAdmin,
            adminUserForm,
            schemas.validate(schemas.createAccount),
            admin.createUser
        );

        app.get("/about", renderPage("About the Adopter Registry", "about"));

        app.all("/xapi/*", xapi.mockAPI);

        app.listen(3000, function () {
            console.log("Server listening on port 3000");
        });
    }
);

