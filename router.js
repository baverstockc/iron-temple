var path = require("path");
var filesys = require("fs");

function route(handle, pathName, response, postData) {
	console.log("Routing request for " + pathName);

	if(typeof handle[pathName] === "function") {
		handle[pathName](response, postData);
	}
	else {
		
		if (pathName.indexOf("/iron-temple/") !== -1) {
	        pathName = "/app" + pathName;
	    }

	    var full_path = path.join(process.cwd(),pathName);  
	    console.log(full_path);
	    filesys.exists(full_path,function(exists){  
	        if(!exists){  
	            response.writeHeader(404, {"Content-Type": "text/plain"});    
	            response.write("404 Not Found\n");    
	            response.end();  
	        }  
	        else{  
	            filesys.readFile(full_path, "binary", function(err, file) {    
	                 if(err) {    
	                     response.writeHeader(500, {"Content-Type": "text/plain"});    
	                     response.write(err + "\n");    
	                     response.end();    
	                 
	                 }    
	                 else{  
	                    response.writeHeader(200);    
	                    response.write(file, "binary");    
	                    response.end();  
	                }  
	                       
	            });  
	        }  
	    });  			
	}

	
}

exports.route = route; 