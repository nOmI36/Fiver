const passport = require("passport");
const LocalStrategy = require("passport-local");

const async = require("async");
const crypto = require("crypto");
const Crypter = require("cryptr");

const config = require("../config");

const userHelpers = require("./helpers/users");
const user = require("./ODM/models").user;
const utils = require("./utils/utils");
const email = require("./utils/email");
const strings = require("./utils/strings").strings;
// var CryptoJS = require("./utils/pbkdf2").CryptoJS;

const encryptionKey = process.env.USER_SECRET || "some-__-secret-__-123";
const userEncoder = new Crypter(encryptionKey);
const userSalt = process.env.USER_SALT || "salty,T*#$K-__-123";

exports.setupPassport = function (app) {
    passport.use(
        new LocalStrategy(function (username, password, done) {
            if (username === config.admin_email) {
                console.log("admin login");
                if (password === config.admin_pass) {
                    return done(null, utils.adminUser);
                } else {
                    return done(null, false);
                }
            }
            user.findOne({ email: username }, function (err, user) {
                if (err) {
                    done(null, false);
                    return;
                }
                if (user) {
                    if (user.checkPassword(password)) {
                        done(null, user);
                    } else {
                        if (user.passwordResetKey === password) {
                            done(null, user, {
                                resetLogin: true
                            }); // pass along the info that the user used the temp credentials
                        } else {
                            done(null, false);
                        }
                    }
                } else {
                    done(null, false);
                }
            });
        })
    );

    passport.serializeUser(function (user, done) {
        const salted = user.email + userSalt;
        const encrypted = userEncoder.encrypt(salted);

        done(null, encrypted);

        // done(null, user.email);
    });

    passport.deserializeUser(function (encryptedId, done) {
        let id = "";

        try {
            const decryptedWithSalt = userEncoder.decrypt(encryptedId);
            const saltLength = userSalt.length;
            id = decryptedWithSalt.slice(0, -saltLength);
        } catch (err) {
            return done(null, null);
        }

        // let id = encryptedId;

        // be sure to handle the admin case
        if (id === config.admin_email) {
            return done(null, utils.adminUser);
        }

        user.findOne({ email: id }, function (err, user) {
            done(err, user);
        });
    });

    return passport;
};
exports.logout = function (req, res, next) {
    // req.logout(function(err) {
    // 	if (err)
    // 		next(err);
    // 	else
    // 		res.redirect(req.url !== "/users/logout" ? req.url : "/");
    // });

    req.logout();
    res.redirect(req.url !== "/users/logout" ? req.url : "/");
};

exports.renderLogin = function (req, res, next) {
    res.locals.pageTitle = "Login";
    if (req.user) res.redirect("/");
    else {
        res.render("login", {});
    }
};

exports.renderCreate = function (req, res, next) {
    if (config.disableAccountCreation) {
        return res.message("Account creation has been disabled.");
    }

    res.locals.pageTitle = "Login";
    if (req.user) {
        res.redirect("/");
    } else {
        res.render("createAccount", {
            siteKey: config.recaptcha.siteKey
        });
    }
};

// Create a new user account
exports.createUser = async function (req, res, next) {
    if (config.disableAccountCreation) {
        return res.status(500).send("Account creation has been disabled.");
    }

    // even though the admin user is not actually in the DB, we must prevent people
    // from creating a user with that email
    if (req.body.email === config.admin_email) {
        return res.status(400).send(strings.user_exists);
    }

    const requestedEmail = req.body.email;
    const existingUser = await userHelpers.getUserWithEmail(requestedEmail);
    if (existingUser != undefined) {
        return res.status(400).send(strings.user_exists);
    }

    const username = req.body.username;
    const password = req.body.password;

    try {
        const newUser = await userHelpers.createUnverifiedUser(
            requestedEmail,
            username,
            password
        );

        email.sendEmailValidateEmail(newUser);
        res.message(
            "Account Created",
            "An email has been sent to this address with a confirmation code. You can click the link in your email, or <a href=\"/users/validateEmail/\"> enter it here </a>"
        );
    } catch (err) {
        res.status(500).send(
            "Unable to create user at the moment.  Please reach out to IT Support if this issue persists."
        );
    }
};

exports.salt = function (req, res, next) {
    user.findOne(
        {
            email: req.query.email
        },
        function (err, user) {
            if (user && !err) {
                res.status(200).send(user.salt);
            } else {
                // be sure to generate a random salt so this endpoint  cannot be used to test that a given address is
                // actually used by an account
                // var CryptoJS = require("./utils/pbkdf2").CryptoJS;
                // var randomSalt = CryptoJS.lib.WordArray.random(128 / 8)
                const randomSalt = crypto.randomBytes(16);
                res.status(200).send(randomSalt.toString("hex"));
            }
        }
    );
};

exports.login = function (req, res, next) {
    // ensureNotLoggedIn should prevent this
    if (req.user) {
        return res.status(200).send("already logged in");
    }
    passport.authenticate("local", function (err, user, info) {
        // console.log(err, user, info)
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).send("Incorrect email or password");
        }
        // Login fails if the user gave the right password, but email is not yet verified
        if (!user.verifiedEmail) {
            return res.status(400).send(strings.login_unvalidated);
        }
        // console.log("login");
        req.login(user, function (err) {
            // console.log("login " + err)
            if (err) {
                return next(err);
            }
            req.user = user;
            // if the users logged in with the reset password key, set mustResetPassword on the session
            // The prompts some middleware to force the user to the reset password page
            if (info && info.resetLogin) {
                user.mustResetPassword = true;
                user.save();
            } else {
                // if the user logged in with their normal password, then clear the reset key
                user.passwordResetKey = null;
                user.save();
            }
            return res.status(200).send("login ok");
        });
    })(req, res, next);
};

exports.validateEmail = async function (req, res, next) {
    try {
        const code = req.params[0];
        const user = await userHelpers.getUserWithVerifyCode(code);

        if (user && !user.verifiedEmail) {
            user.verifiedEmail = true;

            await user.save();
            return req.login(user, function (err) {
                res.redirect("/");
            });
        } else if (user && user.verifiedEmail) {
            return res.message("Validation Error", strings.already_verified);
        } else {
            return res.message("Validation Error", strings.verified_code_error);
        }
    } catch (err) {
        return res.message("Validation Error", strings.verified_code_error);
    }
};

exports.resendValidation = function (req, res, next) {
    res.message("Validation Sent", strings.validation_sent);
    user.findOne(
        {
            email: req.body.email
        },
        function (err, user) {
            if (err) {
                console.error("[VALIDATION] ERROR FINDING USER: ", err);
            } else if (!user) {
                console.error("[VALIDATION] NO USER FOUND FOR", req.body.email);
            } else if (user) {
                // Don't bother for verified accounts
                if (!user.verifiedEmail) {
                    email.sendEmailValidateEmail(user);
                }
            }
        }
    );
};

exports.resetPassword = function (req, res, next) {

    let hasCorrectPassword = req.user.checkPassword(req.body.oldpassword);
    let hasCorrectResetKey = req.user.checkResetKey(req.body.oldpassword);

    let canResetPassword = hasCorrectPassword && hasCorrectResetKey;
    if (canResetPassword) {
        req.user.resetPassword(req.body.password);
        res.message("Password Reset", "Your password has been reset.");
    } else {
        res.redirect("/users/resetPassword?passwordError=1");
    }
};

exports.deleteAccount = function (req, res, next) {
    user.findOneAndDelete({ uuid: req.user.uuid }, (err) => {
        res.message("Account Deleted", "The account has been removed.");
    });
};

exports.forgotPassword = function (req, res, next) {
    user.findOne(
        {
            email: req.body.email
        },
        function (err, user) {
            if (!err && user) {
                // Can't reset the password for the account until the email is verified. Prompt the user to revalidate the email.
                if (!user.verifiedEmail) {
                    return res.message("Error", strings.login_unvalidated);
                } else {
                    // Generate a new temp credential
                    user.forgotPassword();
                    email.sendForgotPasswordEmail(user);
                    return res.message(
                        "Temporary Password Sent",
                        strings.password_reset_sent
                    );
                }
            } else {
                // don't let the output allow fishing to detect existance of account. Send this if account not found.
                return res.message(
                    "Temporary Password Sent",
                    strings.password_reset_sent
                );
            }
        }
    );
};

const productModel = require("./ODM/models").product;
const testModel = require("./ODM/models").testLog;
const LRSModel = require("./ODM/models").LRSModel;
const TestManager = require("./testManager").TestManager;
exports.dashboard = function (req, res, next) {
    async.series(
        [
            function (cb) {
                productModel
                    .find({ owner: req.user.email })
                    .sort([["_modified", "descending"]])
                    .exec(function (err, products) {
                        res.locals.products = products;
                        cb();
                    });
            },
            function (cb) {
                testModel
                    .find({ owner: req.user.email })
                    .sort([["_modified", "descending"]])
                    .limit(5)
                    .select("-log")
                    .exec(function (err, tests) {
                        for (let i = 0; i < tests.length; i++) {
                            const test = tests[i];
                            test.finalProgress = Math.floor(
                                ((test.summary.passed + test.summary.failed) /
                                    test.summary.total) *
                                    100
                            );
                            test.virtuals = {};
                        }
                        res.locals.tests = tests;
                        cb();
                    });
            },
            function (cb) {
                async.eachSeries(
                    res.locals.tests,
                    function (t, next) {
                        productModel.findOne(
                            {
                                uuid: t.testOfProductUUID
                            },
                            function (err, p) {
                                t.virtuals.product = p;
                                next();
                            }
                        );
                    },
                    cb
                );
            },
            function (cb) {
                LRSModel.find({ owner: req.user.email })
                    .sort([["_modified", "descending"]])
                    .limit(5)
                    .exec(function (err, LRSs) {
                        res.locals.lrsconfigs = LRSs;
                        cb();
                    });
            },
            function (cb) {
                const ids = TestManager.getAllTestIDs();
                const tests = [];
                for (let i = 0; i < ids.length; i++) {
                    const t = TestManager.getTest(ids[i]);
                    if (utils.testOwner(t, req.user)) {
                        t.owned = true;
                        t.finalProgress = Math.floor(
                            ((t.summary.passed + t.summary.failed) /
                                t.summary.total) *
                                100
                        );
                        tests.push(t);
                    }
                }
                res.locals.runningtests = tests;
                cb();
            },
            function (cb) {
                productModel
                    .find({ owner: req.user.email })
                    .count()
                    .exec(function (err, count) {
                        res.locals.productCount = count;
                        cb();
                    });
            },
            function (cb) {
                testModel
                    .find({ owner: req.user.email })
                    .count()
                    .exec(function (err, count) {
                        res.locals.testCount = count;
                        cb();
                    });
            },
            function (cb) {
                LRSModel.find({ owner: req.user.email })
                    .count()
                    .exec(function (err, count) {
                        res.locals.testConfigCount = count;
                        cb();
                    });
            },
            function (cb) {
                res.locals.runningTestCount = res.locals.runningtests
                    ? res.locals.runningtests.length
                    : 0;
                cb();
            }
        ],
        function (err) {
            if (err) {
                return res.send(err.toString());
            }
            res.locals.formatTimestamp = function () {
                return function (text, render) {
                    return new Date(parseInt(render(text))).toLocaleString();
                };
            };
            res.render("dashboard");
        }
    );
};

