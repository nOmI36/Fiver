//var CryptoJS = require("./pbkdf2.js").CryptoJS;
var config = require("../../config");
const libpath = require('path');
const crypto = require('crypto');

exports.hashPassword = function(u, s, p) {

    /*var key = CryptoJS.PBKDF2(u + p, s, {
        keySize: 512 / 32,
        iterations: 100
    });*/
	var key = crypto.pbkdf2Sync(p, s, 10000, 16, 'sha256');
	return key.toString('hex');
}

exports.ensureLoggedIn = function(req, res, next) {
    if (!req.user) {
        res.redirect("/users/login?r=" + encodeURIComponent(req.url))
    } else
        next();
}

exports.ensureNotLoggedIn = function(req, res, next) {
    if (req.user) {
        res.redirect("/")
    } else
        next();
}

exports.usertoLocals = function(req, res, next) {
    if (req.user) {
    		res.locals.user = req.user;
    } 
    next();
}
exports.testOwner = function(_object, user)
{
    if(!_object)
    {
        throw ("object can't be null");
    }
    
    if(!user)
    {
        return false;
    }
    
    if(user.email == config.admin_email)
        return true;
    
    if(_object.owner == user.email)
        return true;
    
    return false;
}
exports.message = function(req, res, next) {
    
    res.message = function(title,message)
    {
        if(!message)
        {
            message = title;
            title = null;
        }
        res.render("message",{title:title,message:message});
    }
    next();
}

//if the user must reset their password, because they logged in with their temp credentials, then force them to the reset password page
exports.checkMustResetPassword = function(req, res, next) {
    if (req.user && req.user.mustResetPassword && req.url !== "/users/resetPassword" ) {
        res.redirect("/users/resetPassword");
    } else
        next();
}

//set up defaults for all the configurtion options
exports.setConfigDefaults = function(_config)
{
	_config.port = _config.port || 3000;
	_config.host = _config.host || "http://localhost:3000";
	_config.system_email_from = _config.system_email_from || '"LRS Test" <admin@adlnet.gov.com>';
	_config.admin_email = _config.admin_email || "admin@lrstest.gov";
	_config.admin_pass =  _config.admin_pass || "password";
	_config.number_of_test_suites = _config.number_of_test_suites || 214;
	_config.sig_private_key = _config.sig_private_key || libpath.join(__dirname, '..', 'DO_NOT_USE.pem');
	_config.sig_public_key = _config.sig_public_key || libpath.join(__dirname, '..', 'DO_NOT_USE.pub.pem');

	_config.concurrency = _config.concurrency || 3;
	
	if( !_config.email_user) {throw (new Error('Email username must be set in config.js'))};
	if( !_config.email_pass) {throw (new Error('Email password must be set in config.js'))};	
	if( !_config.email_server) {throw (new Error('Email server must be set in config.js'))};	
}

exports.renderTemplate = function(templateId)
{
	return function(req,res,next){
		res.render(templateId);
	};
}

//A dummy object that will be used as the Admin user. Note that this needs to have the same format as the regular user schema from the 
//ODM, so that parts of the system dont crash. Still, it does not make sense to, for instance, try to do a reset password for the admin
exports.adminUser = {
 	username: "Admin",
    passwordHash:config.admin_pass,
    email:config.admin_email,
    verifiedEmail:true,
    salt:"",
    verifyCode:"",
    passwordResetKey:"",
    uuid:"",
    checkPassword:function(){},
    forgotPassword:function(){},
    resetPassword:function(){},
    save:function(cb){if(cb)cb()},
    remove:function(cb){if(cb)cb()}
}

exports.genPageination =function(current,total,perpage)
{
    current = current - 1;
    var totalPages = Math.ceil(total/perpage);
    var pageConfig = {};
    if( current > -1)
        pageConfig.prev = {
            page:current,
        }; 
    if(current < totalPages-2)
        pageConfig.next = {
            page:current+2
        }
  
    if(current > 3)
    pageConfig.start = {
            page:0
        }
    if(totalPages - (current + 2) > 3 )
    pageConfig.end = {
            page:totalPages -1
        }           
    pageConfig.pages = [];  
    var start = 0;
    if(current > 3)
    {
        start = current - 2;
    }
    for(var i  = start; i < Math.min(start+7,totalPages); i++)
    {

        pageConfig.pages.push({
            page:i,
            display:i+1,
            current : i == current + 1
        })
    }
    return pageConfig;
}