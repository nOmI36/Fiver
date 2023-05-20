var OAuth = require('oauth').OAuth;
var utils = require("./utils/utils.js");
var config = require("../config");
var TestManager = require("./testManager.js").TestManager;

function _OAuthManager()
{
	this.authBacks={};
}

//start the OAUTH dance. Keep the request data in memory and wait for the authback to be called with the 
//verifier. Redirect the user's request to Authorization URL
_OAuthManager.prototype.queueTestConfig = function(name, runnerFlags,lrsConfigID,options, req, res)
{
	
	//create an OAUTH consumer
	var consumer = new OAuth(runnerFlags.endpoint + runnerFlags.request_token_path + "?scope=all",
		runnerFlags.endpoint + runnerFlags.auth_token_path,
		runnerFlags.consumer_key, runnerFlags.consumer_secret, '1.0',
		config.host + "/authback", 'PLAINTEXT');   //careful here, the config.host / authback should be the publicly visible authback route
	var self = this;
	//Get a request token from the supplied request_token_path
	consumer.getOAuthRequestToken(function(err, orauth_token, orauth_token_secret, results)
	{
		if (err)
		{
			console.log(err);
			return res.redirect("/OAuthError");
		}

		//Ok. we got a request token. Send the user to the auth page to authorize the request, and queue the data waiting on the 
		//authback
		self.authBacks[orauth_token] = {
			runnerFlags:runnerFlags,
			lrsConfigID:lrsConfigID,
			name:name,
			request_token_secret:orauth_token_secret,
			request_token:orauth_token,
			consumer:consumer,
			owner:req.user.email,
			options:options
		};
		res.redirect(runnerFlags.endpoint + runnerFlags.authorization_path + "?oauth_token=" + orauth_token);
	});
};

//Auths are stored in memory. When the auth page redirects the user to the authback with the verifier in hand, do the next step
_OAuthManager.prototype.processAuthback = function(req, res, next) {

	var verifier = req.query.oauth_verifier;
	var request_token = req.query.oauth_token;
	var pendingTest = this.authBacks[request_token];
	//There should be a pending test for the given request token
	if(pendingTest)
	{
		delete this.authBacks[request_token];
		//Ok, got the verifier for the request token, trade for an access token.
		pendingTest.verifier = verifier;
		pendingTest.consumer.getOAuthAccessToken(pendingTest.request_token, pendingTest.request_token_secret, pendingTest.verifier, function(err, oauth_token, oauth_token_secret, results) {
			
			if(err)
				return res.status(400).send(err);

			//cool, should now have a valid access token	
			pendingTest.access_token = oauth_token;
			pendingTest.access_token_secret = oauth_token_secret;

			var runnerFlags = pendingTest.runnerFlags;
			var finalOAuthConfig = {};
			
			//Generate the structure that will be sent into the test runner process;
			finalOAuthConfig.consumer_key = runnerFlags.consumer_key;
        	finalOAuthConfig.consumer_secret = runnerFlags.consumer_secret;
        	finalOAuthConfig.token = pendingTest.access_token;
        	finalOAuthConfig.token_secret = pendingTest.access_token_secret;
        	finalOAuthConfig.verifier = pendingTest.verifier;
        	finalOAuthConfig.endpoint = pendingTest.runnerFlags.endpoint;
            finalOAuthConfig.oAuth1 = true;
        	console.log(finalOAuthConfig);

        	//finally, start the test running, then redirect the authback request to the test status page.
        	var uuid = TestManager.addTest(pendingTest.name, pendingTest.owner, finalOAuthConfig,pendingTest.lrsConfigID,pendingTest.options);
        	res.redirect("/");
		});
	}
	else
	{
		//res.status(400).send("Bad request token.")
		return res.redirect("/OAuthError");
	}
}

exports.OAuthManager = new _OAuthManager;