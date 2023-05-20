var config = require("../config");
var testModel = require("./ODM/models.js").testLog;
var strings = require("./utils/strings.js").strings;
var user = require("./ODM/models.js").user;
var CryptoJS = require("./utils/pbkdf2.js").CryptoJS;
var product = require("./ODM/models.js").product;
var crypto = require("crypto");
var utils = require("./utils/utils.js");

exports.userIsAdmin = function(req, res, next)
{
	if (req.user && req.user.email == config.admin_email)
	{
		res.locals.isAdmin = true;
	}
	next();
}
exports.mustBeAdmin = function(req, res, next)
{
	var user = req.user;
	if (!user)
		return res.redirect("/users/login?r=" + encodeURIComponent(req.url))
	if (user.email !== config.admin_email)
	{
		return res.message(strings.not_authorized);
	}
	next();
}
exports.cannotBeAdmin = function(req, res, next)
{
	var user = req.user;

	if (user && user.email == config.admin_email)
	{
		return res.message(strings.not_admin);
	}
	next();
}
exports.getUser = function(req, res, next)
{
	user.findOne(
	{
		uuid: req.params.uuid
	}, function(err, _user)
	{
		if(_user)
		{
			req._user = _user;
			next();
		}
		else{
			res.message("User not found");
		}
	})
}

exports.users = function(req, res, next) {

	user.find(
	{
		
	}, function(err, _users)
	{
		res.render("admin/users",{_users:_users});
	})
}

exports.viewUser = function(req, res, next) {
	res.render("admin/user",{_user:req._user});
}

exports.deleteUser = function(req, res, next) {
	user.findOneAndRemove({ uuid: req._user.uuid }, err => {
		res.redirect("/admin/users");
	});
}

exports.verifyUser = function(req, res, next) {

	req._user.verifiedEmail = true;
	req._user.save(function(err)
	{
		res.redirect("/admin/users")
	})
}
exports.unVerifyUser = function(req, res, next) {

	req._user.verifiedEmail = false;
	req._user.verifyCode = CryptoJS.lib.WordArray.random(128 / 8).toString();
	req._user.save(function(err)
	{
		res.redirect("/admin/users")
	})
}

exports.resetPassword = function(req, res, next) {

	req._user.forgotPassword();
	req._user.save(function(err)
	{
		res.redirect("/admin/users")
	})
}


exports.products = function(req, res, next) {

	product.find(
	{
		
	}, function(err, products)
	{
		res.render("admin/products",{products:products});
	})
}

exports.queue = function(req,res,next)
{
	var TestManager = require("./testManager.js").TestManager;
	var ids = TestManager.getAllTestIDs();
	var results = [];
	for (var i = 0; i < ids.length; i++)
		results.push(TestManager.getTest(ids[i]));

	var tests = [];
	for (var i in results){
		tests.push(
		{
			uuid: results[i].uuid,
			name: results[i].name,
			owner: results[i].owner,
			state: results[i].state,
			progress: Math.floor((results[i].summary.passed+results[i].summary.failed)/results[i].summary.total * 100),
			duration:results[i].duration/1000,
			rerunKey:results[i].lrsSettingsUUID,
			startedOn: (new Date(results[i].startTime)).toString(),
			associatedProduct:results[i].associatedProduct,
			
			flags:results[i].flags,
			lrsSettingsUUID: results[i].lrsSettingsUUID,
			version : results[i].summary ?  results[i].summary.version : suiteVersion,
			product:results[i].product
		});
	}


	res.render("admin/queue",{tests:tests});
}

exports.createUser = function(req,res,next)
{

	var request = req.body;
	//even though the admin user is not actually in the DB, we must prevent people 
	//from creating a user with that email
	if (req.body.email == config.admin_email)
	{
		return res.status(400).send(strings.user_exists);
	}
	//Ensure that the email address is unique
	user.findOne(
	{
		email: req.body.email
	}, function(err, _user)
	{
		if (_user)
		{
			return res.status(400).send(strings.user_exists)
		}
		var newuser = new user();
		newuser.username = request.username;
		//var randomSalt = CryptoJS.lib.WordArray.random(128 / 8)
		var randomSalt = crypto.randomBytes(16);
		newuser.salt = randomSalt.toString('hex');
		newuser.passwordHash = utils.hashPassword(newuser.username, newuser.salt, request.password);
		newuser.verifiedEmail = false;
		newuser.email = request.email;
		//newuser.verifyCode = CryptoJS.lib.WordArray.random(128 / 8).toString();
		newuser.verifyCode = crypto.randomBytes(16).toString('hex');
		newuser.uuid = require('uuid').v4();
		newuser.save(function(err)
		{
			if (!err)
			{
				res.status(200).send({
					text: " success",
					redirect: "/admin/users/"
				});
			}
			else
				res.status(500).send(err);
		})
	});

}