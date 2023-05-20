var mongoose = require('mongoose');
var utils = require("../../utils/utils.js");
var config = require("../../../config").config;
var productScheama = mongoose.Schema({
    owner: String,
    uuid:String,
    testlogUuid:String,
    productVersion:String,
    website:String,
    companyName:String,
    productName:String,
    contactEmail:String,
    contactName:String,
    contactPhone:String,
    associatedResult:String,
    logo:Buffer,
    _modified:Number
});

productScheama.path('_modified').index(true);
productScheama.path('owner').index(true);
exports.product = productScheama;