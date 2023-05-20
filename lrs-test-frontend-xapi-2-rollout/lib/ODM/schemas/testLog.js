var mongoose = require('mongoose');
var utils = require("../../utils/utils.js");
var config = require("../../../config").config;

var testRecordSchema = mongoose.Schema({
	title: String,
	name: String,
	requirement: mongoose.Schema.Types.Mixed,
	status: String,
	error: String,
	log:String
}, {_id: false});
testRecordSchema.add({ tests: [testRecordSchema] });

var testLogSchema = mongoose.Schema({
    name: String,
    owner: String,
    flags: {},
    lrsSettingsUUID: String,
    options:{},
    testOfProductUUID:String,
    associatedProduct:String,
	product:{
		productName:String,
		productVersion:String,
		companyName:String
	},
    uuid: String,
	startTime: Number,
	endTime: Number,
    duration: Number,
    state: String,
	summary: {
		total: Number,
		passed: Number,
		failed: Number,
		conformant:Boolean,
		version:String
	},

    _modified:Number,

    logUUID: String,
	signature: String
});

testLogSchema.path('uuid').index({unique: true});
testLogSchema.path('owner').index(true);
testLogSchema.path('testOfProductUUID').index(true);
testLogSchema.path('_modified').index(true);
testLogSchema.path('startTime').index(true);
exports.testLog = testLogSchema;
