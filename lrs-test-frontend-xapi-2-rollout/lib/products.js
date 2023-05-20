var utils = require("./utils/utils.js");
var config = require("../config");
var strings = require("./utils/strings.js").strings;
var productModel = require("./ODM/models.js").product;
var testModel = require("./ODM/models.js").testLog;
var LRSConfigModel = require("./ODM/models.js").LRSModel;
var suiteVersion = require('../lrs-conformance-test-suite/version.js').specNumber;
var async = require("async");
function xAPIFromVersion(ver)
{
	if(!ver)
		throw ("ver is null")
	return ver.split(".").splice(0,3).join(".")
}

var CONFORMANCE = {
	NOT : {
		status:"alert alert-danger",
		string:"This LRS does not conform to xAPI"
	},
	OLDVERSION : {
		status:"alert alert-warning",
		string:"This LRS conforms to a previous version of the XAPI"
	},
	OLDTEST : {
		status:"alert alert-warning",
		string:"This LRS conforms to the current version of the XAPI, but it was tested with an older version of the test suite"
	},
	GOOD : {
		status:"alert alert-success",
		string:"This LRS conforms to the current version of the XAPI, version " + xAPIFromVersion(suiteVersion)
	}
}

function genConformance(testLog)
{
	
	if(!testLog)
		return null;
	
	var summary = testLog.summary || testLog.results;
	console.log(summary);
	if(!summary || !summary.conformant)
	{
		return CONFORMANCE.NOT;
	}

	var logVersion = summary.version;
	if(!logVersion)
		return CONFORMANCE.NOT;
	
	testVer = logVersion.split(".").map(function(i){return parseInt(i)})
	currentver = suiteVersion.split(".").map(function(i){return parseInt(i)})
	
	if(testVer[0] < currentver[0])
		return CONFORMANCE.OLDVERSION;
	if(testVer[1] < currentver[1])
		return CONFORMANCE.OLDVERSION;
	if(testVer[2] < currentver[2])
		return CONFORMANCE.OLDVERSION;
	if(testVer[3] < currentver[3])
		return CONFORMANCE.OLDTEST;

	return CONFORMANCE.GOOD;

}
module.exports.genConformance = genConformance;
//Create a new product
exports.create = function(req, res, next)
{
	var product = new productModel();
	product.uuid = require('uuid').v4();
	product.owner = req.user.email;
	product.productVersion = req.body.productVersion;
	product.website = req.body.website;
	product.companyName = req.body.companyName;
	product.productName = req.body.productName;
	product.contactEmail = req.body.contactEmail;
	product.contactName = req.body.contactName;
	product.contactPhone = req.body.contactPhone;
	product.save(function(err)
	{
		res.status(200).send(
		{
			redirect: "/products/"+product.uuid+"/",
			text: "Product Saved"
		})
	})
}

//delete the product
exports.delete = function(req, res, next)
{
	var product = req.product;

	var TestManager = require("./testManager.js").TestManager;
	var runningTests = TestManager.testRunners; 
	for(var i in runningTests)
	{
		if(runningTests[i].testOfProductUUID == product.uuid)
			return res.message("Can't delete product. Product has a test in progress");
	}

	productModel.findOneAndRemove({ uuid: product.uuid }, err => {
		res.redirect("/");
	});
}
exports.renderDelete = function(req,res,next)
{
	res.render("deleteProduct", {
		siteKey: config.recaptcha.siteKey, 
		csrfToken: req.csrfToken != undefined ? req.csrfToken() : undefined, 
		product: req.product
	});
}

//Save the incoming data from the form post
//explictly disable change of names or version numbers
exports.edit = function(req, res, next)
{
	var product = req.product;
//	product.productVersion = req.body.productVersion;
	product.website = req.body.website;
//	product.companyName = req.body.companyName;
//	product.productName = req.body.productName;
	product.contactEmail = req.body.contactEmail;
	product.contactName = req.body.contactName;
	product.contactPhone = req.body.contactPhone;
	product.save(function(err)
	{
		res.status(200).send(
		{
			redirect: "/products/"+product.uuid+"/",
			text: "Product Saved"
		})
	})
}
//Save the product to the defaults of the form. Used for Edit
exports.product_to_form = function(req, res, next)
{
	var product = req.product;
	req.defaults = product;
	next();
}

//make sure the product in req.product is owned by the logged in user
exports.ensureOwner = function(req, res, next)
{
	var product = req.product;
	if (!product)
	{
		return res.status(400).message("Product not found");
	}
	
	if(!utils.testOwner(product, req.user))
		return res.status(401).message("not authorized");
	
	next();
}
//Save the product whose uuid is req.params.uuid to req.product
exports.getProduct = function(req, res, next)
{
	productModel.findOne(
	{
		uuid: req.params.uuid
	}, function(err, product)
	{
		if (!product)
		{
			return res.status(400).message("Product not found");
		}
		req.product = product;
		next();
	});
}
//show all of my products. 
exports.my = function(req, res, next)
{
	productModel.find(
	{
		owner: req.user.email
	}, function(err, products)
	{
		res.locals.products = products;
		res.locals.mode = {
			"my": true
		};
		res.render("myproducts");
	});
}
//show all products with an associated test result
exports.all = function(req, res, next)
{
	var perpage = 8;
	var query = {
		associatedResult:
		{
			$ne: null
		}
	};
	//note this query is sort of complex
	//Select where associatedResult is not null 
	productModel.find(query).count(function(err, count)
	{
		productModel.find(query).skip(req.params.page * perpage).limit(perpage).exec(
			function(err, products)
			{
				async.eachSeries(products, function(i, cb)
				{
					
					if (i.associatedResult)
					{
						testModel.findOne(
						{
							uuid: i.associatedResult
						}, function(err,t)
						{
						
							i.virtuals = {};
							i.virtuals.results = t;
							i.virtuals.conformance = genConformance(t);
							
							cb();
						})
					}
					else
						cb();
				}, function()
				{
					res.locals.products = products;
					res.locals.mode = {
						"all": true
					};
					//generate the data needed for pagination
					res.locals.pages = utils.genPageination(req.params.page, count, perpage);
					res.render("products");
				})
			});
	})
}
//search and display results
exports.search = function(req, res, next)
{
	var sparams = decodeURIComponent(req.params.search);
	var regex = new RegExp(".*" + sparams +".*","ig");
	//note this query is sort of complex
	//Select where associatedResult is not null and productName, companyName or contactName contains the search string
	var query = {$and:[{associatedResult:{$ne : null}},{$or:[{ productName:regex},{ companyName:regex},{ contactName:regex}]}]};
	var perpage = 8;
	productModel.find(query).count(function(err,count){
		
		productModel.find(query).skip(req.params.page*perpage).limit(perpage).exec(
		function(err, products)
		{
			res.locals.products = products;
			res.locals.mode = {
				"all": true
			};
			res.locals.pages = utils.genPageination(req.params.page,count,perpage);
			res.render("products");
		});

	})

}

// var multer = require('multer');
// var storage = multer.memoryStorage();
// var upload = multer(
// {
// 	storage: storage
// });
//accept the upload of the file
exports.setLogo = function(req, res, next)
{
	var logo = req.files["logo"].buffer;
	req.product.logo = logo;
	req.product.save(function(err)
	{
		res.status(200).send(
		{
			text: "upload success",
			redirect: "/products/" + req.product.uuid +"/"
		});
	})
}

exports.view = function(req,res,next)
{
	var product = req.product;
	var configs;
	var results;
	var conformanceResult;
	var owned = utils.testOwner(product,req.user);
	var inProgress;
	async.series([function getResults(cb)
	{
		testModel.find({testOfProductUUID:product.uuid}).select("-log").sort([["startTime","descending"]]).exec(function(err,_results)
		{
			if(err) return res.message(err);
			results = _results;
			for(var i in results)
			{
				if(!results[i].summary.conformant)
				{
					results[i].disabled = true;
					if(results[i].summary.failed != 0)
					{
						results[i].failMessage = "This test result contains failures";
					}else //not conformant but no failures
					{
						results[i].failMessage = "This test did not test all requirements ";
					}
				}
			}
			cb();
		})
	},

	function getConfigs(cb)
	{
		LRSConfigModel.find({
			associatedProduct: product.uuid
		},function(err,confs)
		{
			if(err) return res.message(err);
			configs = confs;
			cb();
		})
	},
	function getInProgress(cb)
	{
		var TestManager = require("./testManager.js").TestManager;
		var runningTests = TestManager.testRunners; 
		for(var i in runningTests)
		{
			if(runningTests[i].testOfProductUUID == product.uuid)
				inProgress = runningTests[i];
		}
		cb();
	},
	function getConformance(cb)
	{
		testModel.findOne({
			associatedProduct:product.uuid
		},function(err,con)
		{
			if(err) return res.message(err);
			conformanceResult = con;
			cb();
		})
	},
	function onlyPublicIfConformant(cb)
	{
		if(!conformanceResult)
		{
			if(!req.user || !utils.testOwner(product,req.user))
				return res.redirect("/");
			else
				cb();	
		}else
		{
			cb();
		}
	}
	],function renderTemplate()
	{	
		var conformance = conformanceResult && genConformance(conformanceResult);
		for(var i in results)
		{
			results[i].progress = Math.floor(((results[i].summary.passed + results[i].summary.failed) / results[i].summary.total) * 100)
			if(conformanceResult && results[i].uuid == conformanceResult.uuid)
			{
				results[i].selected = true;
			}
		}
		res.locals.formatTimestamp = function(){
			return function(text, render){
				return (new Date(parseInt(render(text)))).toLocaleString();
			};
		};
		return res.render("productPage",{inProgress:inProgress,owned:owned,product:product,configs:configs,results:results,conformanceResult:conformanceResult,conformance:conformance});
	})
}


//serve the logo file
exports.logo = function(req, res, next)
{
	res.send(req.product.logo || require('fs').readFileSync("./public/img/missing.png"));
}

//The basic form definition for the product association
exports.associateProductSchema = {
	"title": "Associate Test Results",
	"submitText": "Associate",
	"fields": [
	{
		"label": "Product",
		"id": "productid",
		"helptext": "Choose the product to associate with this test result.",
		"type":
		{
			"isSelect": true
		},
		"options": [
		]
	}]
}

function getAssociateProductSchema()
{
	return JSON.parse(JSON.stringify(exports.associateProductSchema))
}

//set up the default form schema to render the choice of product associations
exports.associateProductForm = function(req,res,next)
{
	var formSchema = getAssociateProductSchema();

	productModel.find(
	{
		owner: req.user.email
	}, function(err, products)
	{
		//populate the choices in the form
		formSchema.fields[0].options.push({text:"No Product Association",value:null})
		for(var i in products)
			formSchema.fields[0].options.push({text:products[i].productName + " " + products[i].productVersion + " by " + products[i].companyName   ,value:products[i].uuid})
		req.formSchema = formSchema;
		next();
	});
}



//The basic form definition for the product association
exports.associateResultsSchema = {
	"title": "Associate Test Results",
	"submitText": "Associate",
	"fields": [
	{
		"label": "Test Log",
		"id": "testRunnerID",
		"helptext": "Choose the Test Log to associate with this product.",
		"type":
		{
			"isSelect": true
		},
		"options": [
		]
	}]
}

function getAssociateResultSchema()
{
	return JSON.parse(JSON.stringify(exports.associateResultsSchema))
}

//set up the default form schema to render the choice of product associations
exports.associateResultsForm = function(req,res,next)
{
	var formSchema = getAssociateResultSchema();

	testModel.find(
	{
		owner: req.user.email,
		testOfProductUUID:req.product.uuid
	}, function(err, logs)
	{
		//populate the choices in the form
		formSchema.fields[0].options.push({text:"No Log Association",value:null})
		for(var i in logs)
		{
			var label = logs[i].summary.passed + "/" + logs[i].summary.total + " on " + logs[i].flags.endpoint + " on " + logs[i].startTime;
			if(logs[i].associatedProduct)
			{
				label = "*linked* " + label;
			}
			formSchema.fields[0].options.push({text:label,value:logs[i].uuid})
		}
		req.formSchema = formSchema;
		next();
	});
}

var email = require("./utils/email.js");
exports.request_associate =function(req,res,next)
{
	productModel.findOne(
	{
		uuid: req.params.productid
	}, function(err, product)
	{
		testModel.findOne(
		{
			"uuid": req.params.testRunnerID
		}, function(err, testLog) {

			if(product && testLog)
			{
				email.sendRequestCertEmail(product,testLog,req.user);
				res.message("A request for a certificate review has been sent to the administrator.")
			}

		})
	});
}
function associate(req,res,next,productID,testRunnerID)
{
	if(testRunnerID !== "null" && req.user.email != config.admin_email)
		return res.status(401).send("only the admin can associate a testlog")
	
	productModel.findOne({uuid: productID}, function(err, product)
	{
		if(!product)
			return res.status(400).message("product not found");
		if(!utils.testOwner(product,req.user))
			return res.status(401).message("not authorized");	
		
		testModel.findOne({uuid: testRunnerID}, function(err, testLog)
		{
			if(!testLog && testRunnerID && testRunnerID !== "null")
				return res.status(400).message("testLog not found");
			if(testLog && !utils.testOwner(testLog,req.user))
				return res.status(401).message("not authorized");
			if(testLog && testLog.testOfProductUUID !== product.uuid)
				return res.status(401).message("This result is not a test of the selected product");		

			function newAssociate(testLog,product)
			{
				//set link on both records and save
				
				var oldResult = product.associatedResult;
				if(oldResult)
				{
					testModel.findOne({uuid:oldResult},function(err,testLog)
					{
						if(testLog)
						{
							testLog.associatedProduct = null;
							testLog.save();
						}
					});
				}

				product.associatedResult = testLog.uuid;
				testLog.associatedProduct = product.uuid;
				product.save(function(){
					testLog.save(function(){
						res.redirect("/products/"+ product.uuid +"/");
					});
				});
			}
			function removeAssociation(product)
			{
				//if removing association, get existing associated result and remove the link to this product
				if(product.associatedResult)
				{
					testModel.findOne({uuid:product.associatedResult},function(err,testLog)
					{
						if(testLog)
						{
							testLog.associatedProduct = null;
							testLog.save(function()
								{
									product.associatedResult = null;
									product.save(function(){
										res.redirect("/products/"+ product.uuid +"/")
									})
								});
						}
					})
				}
				else
				{
					product.associatedResult = null;
					product.save(function(){
							res.redirect("/products/"+ product.uuid +"/")
					})
				}
				
			}
			if(testLog && testLog.associatedProduct)
			{
				//the product is linked to some other result. That result needs to be fetched and it's link cleared. this can be
				//done anytime, even after the requests finishes	
				productModel.findOne(
				{
					uuid: testLog.associatedProduct
				},function(err,oldProduct)
				{
						oldProduct.associatedResult = null;
						oldProduct.save(function(){
							newAssociate(testLog,product)
						});
				});

			}else
			{
				if(testRunnerID && testRunnerID !== "null")
					newAssociate(testLog,product);
				else
					removeAssociation(product)
			}
			
		});
	});
}
/*
//Associate a test result with a product
exports.associateProduct = function(req,res,next)
{
	//ok, this is tricky... if linking a test to none, and there is an old link to a product , get that product
	//then call associate, associating that product with null
	if(!req.body.productid)
	{
		testModel.findOne({uuid:req.params.testRunnerID},function(err,testLog)
		{
			//so, unlink the previously linked product from the test log.
			if(testLog.associatedProduct)
				associate(req,res,next,testLog.associatedProduct,null);
			else
			{
				//there is no link, and you set the link to none
				res.status(200).send({text:"Not Modified.",redirect:"/tests/" +testLog.uuid + "/status" })
			}
		})
	}else

	associate(req,res,next,req.body.productid,req.params.testRunnerID)
}
*/
//Associate a test result with a product
exports.associateResults = function(req,res,next)
{
	associate(req,res,next,req.params.productid,req.body.testRunnerID || req.params.testRunnerID)
}

exports.downloadCert = function(req,res,next)
{
	var product = req.product;
	if(!product.associatedResult)
	{
		throw ("This product does not have conformance info");
	}
	var result = product.associatedResult;
	testModel.findOne({uuid:result},function(err,testLog)
	{
		if(testLog)
		{
			var payload = {};
			payload.product = {};

			payload.product.owner = product.owner;
		    payload.product.uuid= product.uuid;
		    payload.product.testlogUuid= product.testlogUuid;
		    payload.product.productVersion= product.productVersion;
		    payload.product.website= product.website;
		    payload.product.companyName= product.companyName;
		    payload.product.productName= product.productName;
		    payload.product.contactEmail= product.contactEmail;
		    payload.product.contactName= product.contactName;
		    payload.product.contactPhone= product.contactPhone;
		    payload.product.associatedResult= product.associatedResult;
		    
		    payload.results = testLog.summary;
		    payload.flags = testLog.flags;
		    //remove for release
		   // payload.message = "This is the Release Candidate 1 version of the ADL XAPI conformance test suite. This certificate is not valid."

			var token = require('./signature.js').sign(payload);
			res.setHeader('Content-Disposition', 'attachment; filename="' +product.productName + " " + product.productVersion + '.jwt"');
			res.setHeader('Content-Type', 'application/jwt');
			res.send(token);

		}else
		{
			throw ("The associated results are missing");
		}
	})
}
