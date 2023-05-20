'use strict';

const fs = require('fs');
const stringify = require('json-stable-stringify');
const jwt = require('jsonwebtoken');
const testModel = require("./ODM/models.js").testLog;
const product = require("./ODM/models.js").product;
const strings = require("./utils/strings.js").strings;
const config = require('../config.js');

/*
 * load signing keys
 */

var privkey = null;
fs.readFile(config.sig_private_key, function(err, data)
{
	if(err){
		console.error('Could not read private key', err);
	}
	else {
		privkey = data.toString('utf8');
	}
});

var pubkey = null;
fs.readFile(config.sig_public_key, function(err, data)
{
	if(err){
		console.error('Could not read public key', err);
	}
	else {
		pubkey = data.toString('utf8');
	}
});

/***************************************
* Sign/verify request handlers
***************************************/


function verifyRequest(req,res,next)
{
	try {
		var jwt = req.files.cert ? req.files.cert.buffer.toString('utf8') : null;
		//var pubkey = req.files.pubkey ? req.files.pubkey[0].buffer.toString('utf8') : null;
		var valid = verify(jwt, null);
		if(valid && valid.product)
		{
		testModel.findOne({uuid:valid.product.associatedResult}, (err, testLog) => {

			product.findOne({uuid:valid.product.uuid}, (err, product) => {

				if(valid)
					var conformanceStatement = require("./products.js").genConformance(valid);
				if(testLog && !testLog.associatedProduct)
					testLog = null;
				console.log(valid);
				res.render("verify",{cert:valid,conformance:conformanceStatement,publiclog:testLog});	

			})

			
		})
		}else
		{
			res.render("verify",{cert:null,conformance:null,publiclog:null});
		}
		
	}
	catch(e){
		console.log(e);
		res.status(400).send(`${e.name}: ${e.message}`);
	}
}

function serveCertificate(req,res,next)
{
	testModel.findOne( {uuid: req.params.testRunnerID}, function(err, results)
	{
		if(err){
			console.error(err);
			res.sendStatus(500);
		}
		else if(!results){
			next();
		}
		else if(!utils.testOwner(results,req.user)){
			res.status(401).send(strings.onlyOwnerCert);
		}
		else {
			res.setHeader('Content-Disposition', 'attachment; filename="certificate.jwt"');
			res.setHeader('Content-Type', 'application/jwt');
			res.send(results.signature);
		}
	});
}

/*******************************************
* Sign/verify internals
*******************************************/

function sign(payload)
{
	// attempt to parse payload
	if(!payload){
		console.log('No JSON payload, failing.');
		throw new Error('Cannot sign empty string');
	}

	// add signer info
	payload.iss = config.sig_issuer || 'https://localhost:3000';
	console.log(payload);
	payload.sub = payload && payload.flags && payload.flags.endpoint || 'http://localhost:8000/xAPI';
	console.log("SUB IS " + payload.sub);
	payload.iat = Math.floor(Date.now()/1000);

	// attempt to convert payload to canonical buffer
	// throws exception otherwise
	payload = canonicalize(payload);

	console.log('Signing', payload);

	var token = jwt.sign(payload, privkey, {algorithm: 'RS256'});
	return token;
}

function verify(jwtSig, publicKey)
{
	if(!jwtSig){
		console.log('No payload to verify, failing.');
		throw new Error('Cannot verify empty string');
	}

	try {
		return jwt.verify(jwtSig, publicKey || pubkey);
	}
	catch(e){
		if(e.name === 'JsonWebTokenError')
			return false;
		else
			throw e;
	}
}

function canonicalize(payload)
{
	return stringify(payload);
}


exports.verifyRequest = verifyRequest;
exports.serveCertificate = serveCertificate;
exports.sign = sign;
exports.verify = verify;

