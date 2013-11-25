var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		console.log("Request received");
		var pathName = url.parse(request.url).pathname;
		console.log("Request for " + pathName + " received");
		var postData = "";		
		
		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Post chunk received " + postDataChunk);
		});

		request.addListener("end", function() {
			route(handle, pathName, response, postData);
		});

	}

	http.createServer(onRequest).listen(1337);

	console.log("Server started on 1337");	
}

exports.start = start; 
