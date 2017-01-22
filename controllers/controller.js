var logger = require('../common/logger');
var fs = require('fs');

(function(module) {
	'use strict';
	
	// Exports
	module.exports.testRoute = testRoute;
	module.exports.returnHome = returnHome;

	// Public Functions

	/* returnHome: Function to return index.html */
	function returnHome(req,res){
		fs.readFile('index.html', function(err, contents) {

			if (err) {
				// If cant find the file dont crash the APP (dev choice)
				logger.Error('Cannot read index.html file for home URL');
				res.status(503);
				res.end();
				return;
			}
			
			res.writeHead(200);
			res.write(contents);
			res.end();
		});
	};

	/* testRoute: Simple test route */
	function testRoute(req,res) {
		logger.Info('Received Test query');  //res.db;
		res.writeHead(200);
		res.write(JSON.stringify({
			text: "This is a test route."
		}));
		res.end();
	};
	
	// Private Functions

})(module);

