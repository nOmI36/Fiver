var config = require("../config");
var testModel = require("./ODM/models.js").testLog;
exports.developerToLocals = function(req,res,next)
{
		if(!res.locals)
			res.locals = {};
		res.locals.developerMode = config.developerMode;
		next();
}		

exports.markAllPassing = function(req,res,next)
{
	testModel.findOne(
	{
		"uuid": req.params.uuid
	}, function(err, testLog)
	{
		if(testLog)
		{
			testLog.summary.failed = 0;
			testLog.summary.passed = testLog.summary.total;
			testLog.summary.conformant = true;
			testLog.save(function(){
				res.redirect("/products/" + testLog.testOfProductUUID + "/")		
			})
		}
		else
				res.redirect("/products/" + testLog.testOfProductUUID + "/")	
	});
}