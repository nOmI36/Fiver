var mongoose = require('mongoose');
var config = require("../../../config");
var LRSSchema = mongoose.Schema(
{
    endpoint: String,
    authType:String,
    authUser: String,
    authPass: String,
    consumer_key: String,
    consumer_secret: String,
    auth_token_path: String,
    authorization_path: String,
    request_token_path: String,
    owner: String,
    uuid: String,
    name: String,
    configUuid:String,
    _modified:Number,
    associatedProduct:String,
    xapiVersion: {
        type: "String",
        default: config.suite.mainVersion,
    }
});

LRSSchema.path('_modified').index(true);
LRSSchema.path('owner').index(true);

exports.LRSSchema = LRSSchema;
