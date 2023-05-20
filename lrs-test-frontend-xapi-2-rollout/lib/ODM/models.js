const mongoose = require("mongoose");
const mongodb = require("mongodb");
const async = require("async");
const config = require("../../config");

const userSchema = require("./schemas/user").user;
const { createBucketWrapper } = require("../utils/buckets");

const client = new mongodb.MongoClient(`mongodb://${config.mongo.host}`);
const appDb = new mongodb.Db(client, config.mongo.db);

const bucket = createBucketWrapper(appDb);

userSchema.pre("save", function (next) {
    // do stuff
    this._modified = Date.now();
    next();
});

userSchema.pre("remove", function (proceedToDelete) {
    // do stuff
    const self = this;
    async.series(
        [
            function getAllResults(next) {
                exports.product.deleteMany(
                    { owner: self.email },
                    (err, products) => next()
                );
            }
        ],
        function () {
            proceedToDelete();
        }
    );
});

exports.user = mongoose.model("user", userSchema);

const testLogSchema = require("./schemas/testLog").testLog;
testLogSchema.pre("save", function (next) {
    // do stuff
    this._modified = Date.now();
    next();
});

testLogSchema.pre("remove", async function (next) {
    // do stuff

    if (this.logUUID) {
        await bucket.deleteFile(this.logUUID);
    }

    if (this.associatedProduct) {
        exports.product.findOne(
            { uuid: this.associatedProduct },
            function (err, product) {
                if (product) {
                    product.associatedResult = null;
                    product.save(function (err) {
                        next();
                    });
                } else {
                    next();
                }
            }
        );
    } else {
        next();
    }
});

exports.testLog = mongoose.model("testLog", testLogSchema);

const LRSSchema = require("./schemas/LRSSchema").LRSSchema;
LRSSchema.pre("save", function (next) {
    // do stuff
    this._modified = Date.now();
    next();
});

// NOTE: change test below, breaks old DB
exports.LRSModel = mongoose.model("test", LRSSchema);

const productSchema = require("./schemas/product").product;
productSchema.pre("save", function (next) {
    // do stuff
    this._modified = Date.now();
    next();
});

productSchema.pre("remove", function (proceedToDelete) {
    // do stuff

    const self = this;
    let allResults;
    let allConfigs;

    async.series(
        [
            function getAllResults(next) {
                exports.testLog.deleteMany(
                    { testOfProductUUID: self.uuid },
                    (err) => next()
                );
            },
            function getAllConfigs(next) {
                exports.LRSModel.deleteMany(
                    { associatedProduct: self.uuid },
                    (err) => next()
                );
            }
        ],
        function () {
            proceedToDelete();
        }
    );
});

exports.product = mongoose.model("product", productSchema);
