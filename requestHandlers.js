var queryString = require("querystring");
var path = require("path");
var filesys = require("fs");

// var mongoose = require("mongoose");
var mongoClient = require("mongodb").MongoClient;

function index(response) {
	var index = path.join(process.cwd(), "/app/index.html");
	filesys.createReadStream(index).pipe(response);
}

function getUserRoutines(response) {
	console.log("Request handler 'getUserRoutines' was called");
	mongoClient.connect("mongodb://localhost/ironTemple", function(err, db) {
		if(err) { return console.dir(err); }

		var results = db.userRoutines.find( {userId: "F4E1ED37-F4B5-46BE-82F4-60DC1A1BF0DE"} );

		response.writeHead(200, {"Content-type": "text/json"});
		response.write(results);
		response.end();
	});


}

function start(response) {
	console.log("Request Handler 'start' was called");

	var body = '<html>'+ 
		'<head>'+ 
		'<meta http-equiv="Content-Type" content="text/html; '+ 
		'charset=UTF-8" />'+ 
		'</head>'+ 
		'<body>'+ 
		'<form action="/upload" method="post">'+ 
		'<textarea name="text" rows="20" cols="60"></textarea>'+ 
		'<input type="submit" value="Submit text" />'+ 
		'</form>'+ 
		'</body>'+ 
		'</html>';


	response.writeHead(200, {"Content-type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, postData) {
	console.log("Request Handler 'upload' was called");
	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("You've sent " + queryString.parse(postData).text);
	response.end();
}

exports.index = index;
exports.start = start; 
exports.upload = upload;
exports.getUserRoutines = getUserRoutines;