/* 
	File Metadata for FreeCodeCamp
	by: Sergio Gaspar
	date: 2017/01/21
	
	Create API with the below user stories:
	
	US1: I can submit a FormData object that includes a file upload.
	US2: When I submit something, I will receive the file size in bytes within the JSON response.
*/

// Dependencies definitions 
var express = require('express');
var fs = require('fs');
var url = require('url');

// Application specs
var port = process.env.PORT || 3000;
var app = express();

// Include extra objects
var logger = require('./common/logger');

// Use the app routes
app.use(require('./routes/routes'));

logger.Debug('Loaded APP routes');

// Listen on port 3000 by default, IP defaults to 127.0.0.1
app.listen(port, function(err){
	if (err) {
		logger.Error('Application failed to start');
		throw err;
	}
	logger.Info('Server running at http://127.0.0.1:' + port + '/');
});

