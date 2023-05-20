var utils = require("./utils/utils.js");
var config = require("../config");
var domains = require("./utils/domains");
var testModel = require("./ODM/models.js").testLog;
var LRSModel = require("./ODM/models.js").LRSModel;
var product = require("./ODM/models.js").product;
var TestManager = require("./testManager.js").TestManager;
var validateType = require("./validation/schemas.js").validate;
var LRSConfigSchema = require("./validation/schemas.js").lrsconfig;

exports.getConfig = function(req, res, next)
{
	var id = req.params.uuid;
	LRSModel.findOne(
	{
		uuid: id
	}, function(err, lrsconfig)
	{
		req.lrsconfig = lrsconfig;
		next();
	})
}

exports.ensureProductOwner = function(req, res, next)
{
	let parentProductUUID = req.body.associatedProduct;

	product.findOne({ uuid: parentProductUUID }, function(err, parentProduct) {

		if (!parentProduct)
			return res.status(400).send("Unable to find the corresponding LRS product.");

		if (err)
			return res.status(400).send("Unable to retrieve the corresponding LRS product.");

		if (!utils.testOwner(parentProduct, req.user))
			return res.status(400).send("Unable to locate the corresponding LRS product.");
		
		return next();
	});
}

exports.ensureOwner = function(req, res, next)
{
	if (!req.lrsconfig) return next();
	if (!req.user) return next();

	if(!utils.testOwner(req.lrsconfig, req.user))
		return res.status(400).send("You are not the owner of this LRS.");
		
	return next();
}

function read(req, res, next)
{
	if(req.lrsconfig)
		res.status(200).send(req.lrsconfig);
	else
		next();
}

function _delete(req, res, next)
{
	if(!req.lrsconfig)
	{
		res.redirect("/lrsconfigs/my")
	}

	LRSModel.findOneAndRemove({ uuid: req.lrsconfig.uuid }, err => {
		if (err) 
			return next(err);
		else
			res.redirect("/products/" + req.lrsconfig.associatedProduct +"/");
	});
}

function update(req, res, next)
{
	for (var i in req.body) {
		req.lrsconfig[i] = req.body[i];
	}
	
	if(req.lrsconfig.endpoint.endsWith("/"))
		req.lrsconfig.endpoint = req.lrsconfig.endpoint.substr(0, req.lrsconfig.endpoint.length-1);
	
	req.lrsconfig.save(function(err)
	{
		if (err) return next(err);
		res.status(200).send("OK");
	})
}

exports.renderCreate =function(req,res,next)
{
	product.find({owner:req.user.email},function(err,products)
	{
		if(err)
		{
			throw(err);
		}
		if(products.length ==0)
		{
			return res.message("You must first <a href='/products/create'> create a product </a> before you can create an LRS configuration."); 
		}
		try{
			var defaults = JSON.parse(decodeURIComponent(req.query.defaults));
		    
		    for(var i in products)
		    {
		    	if(products[i].uuid == defaults.associatedProduct)
		    		products[i].selected = true;
		    }
		}catch(s){
			console.log(s);
		}

		res.render("createLRSConfig", {
			products: products,
			pageTitle: "Create New LRS Configuration"
		});
	})
	
}

function create(req, res, next)
{
	var lrsconfig = new LRSModel();

	lrsconfig.owner = req.user.email;
	lrsconfig.uuid = require('uuid').v4();
	
	for (var i in req.body)
		lrsconfig[i] = req.body[i];
	
	console.log("Creating Config:", lrsconfig);

	if(lrsconfig.endpoint.endsWith("/"))
		lrsconfig.endpoint = lrsconfig.endpoint.substr(0,lrsconfig.endpoint.length-1);
	
	lrsconfig.save(function(err)
	{
		if (err) return next(err);
		res.status(200).send("OK");
	})
}

exports.runTestsFromConfig = function(req, res, next)
{
	LRSModel.findOne({
		uuid:req.params.uuid
	},function(err, lrsSettings)
	{
		if(!lrsSettings)
			return res.message("Config not found")
		if(err)
			return res.message(err)
		
		var options = {};
		require("./testing").run(lrsSettings.name,lrsSettings,options,req,res,next);
	})
}

exports.read = [utils.ensureLoggedIn, exports.getConfig, exports.ensureOwner, read];
exports.delete = [utils.ensureLoggedIn, exports.getConfig, exports.ensureOwner, _delete];
exports.update = [
	utils.ensureLoggedIn, 
	exports.getConfig, 
	exports.ensureOwner, 
	exports.ensureProductOwner,
	validateType(LRSConfigSchema), 
	domains.validateSafeUrl(req => req.body.endpoint), 
	update
];
exports.create = [
	utils.ensureLoggedIn, 
	exports.ensureProductOwner,
	validateType(LRSConfigSchema), 
	domains.validateSafeUrl(req => req.body.endpoint), 
	create
];

exports.updateGui = function(req,res,next)
{
	LRSModel.findOne({
		uuid:req.params.uuid
	},function(err,lrsconfig)
	{
		if(!lrsconfig)
			return res.message("Config not found")
		if(err)
			return res.message(err)
	
		res.locals.siteVersion = config.suite.mainVersion;
		res.locals.xapiVersion = lrsconfig.xapiVersion;

		if(!utils.testOwner(lrsconfig,req.user))
		{
			return res.message("You are not the owner of this LRS.");
		}
		if(lrsconfig.authType == 'basic')
		{
			res.locals.isBasic = true;
		}
		else if(lrsconfig.authType == 'OAuth')
		{
			res.locals.isOAuth = true;
		}
		product.find({owner:req.user.email},function(err,products)
		{
			for(var i in products)
			{
				if(products[i].uuid === lrsconfig.associatedProduct)
					products[i].selected = true;
			}
			res.render('createLRSConfig',{
				lrsconfig:lrsconfig,
				pageTitle:"Edit Configuration",
				products:products
			})
		});
		
	})

}

exports.myLRSConfigs = function(req,res,next)
{
	LRSModel.find(
	{
		owner: req.user.email
	}).sort({"_modified":-1}).exec(function(err, results)
	{
		res.render("lrsconfigs",{
			pageTitle:"LRS Configurations",
			lrsconfigs:results
		});
			
	})

}
