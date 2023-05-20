'use strict';

const Mustache = require('mustache');
const fs = require('fs');
const libpath = require('path');
const async = require('async');

var layoutCache = null;
var partialCache = {};
var templateCache = {};

function loadPartials(opts, callback)
{
	// load templates
	async.forEachOf(opts.settings.partials,

		// load each partial into the cache
		function(p, name, done)
		{
			if(opts.settings.cacheTemplates && partialCache[p]) done();
			else {
				fs.readFile( libpath.join(opts.settings.views, p+'.html'), 'utf8', function(err, text)
				{
					if(err) done(err);
					else {
						try {
							Mustache.parse(text);
						}
						catch(e){
							done(e);
							return;
						}
						partialCache[name] = text;
						done();
					}
				});
			}
		},

		// actually render the template
		function(err)
		{
			if(err)
				callback(err);
			else
				callback();
		}
	);
}

module.exports = function(path, opts, callback)
{
	async.series([

		// load partials
		function(done){
			loadPartials(opts, done);
		},

		// load layout
		function(done)
		{
			if(opts.settings.cacheTemplates && layoutCache)
				done();
			else {
				fs.readFile( libpath.join(opts.settings.views, opts.settings.layout+'.html'), 'utf8',
					function(err, text)
					{
						if(err)
							done(err);
						else {
							layoutCache = text;
							done();
						}
					}
				);
			}
		},

		// load template
		function(done)
		{
			if(opts.settings.cacheTemplates && templateCache[path]){
				try {
					callback(null, Mustache.render(templateCache[path], opts, partialCache));
				}
				catch(e){
					done(e);
				}
			}
			else
			{
				fs.readFile( path, 'utf8', function(err, text)
				{
					if(err)
						done(err);
					else {
						if( /\{\{\{\s*nolayout\s*\}\}\}/.test(text) )
							templateCache[path] = text;
						else
							templateCache[path] = layoutCache.replace(/\{\{\{\s*yield\s*\}\}\}/, text);

						try {
							Mustache.parse(templateCache[path]);
							done(null, Mustache.render(templateCache[path], opts, partialCache));
						}
						catch(e){
							done(e);
						}
					}
				});
			}
		}],
		
		function(err, results)
		{
			if(err)
				callback(null, `<pre>${err.toString()}</pre>`);
			else
				callback(null, results[2]);
		}
	);
}
