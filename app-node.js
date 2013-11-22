var sys = require("sys");
http = require("http");
path = require("path");  
url = require("url");
filesys = require("fs");

var index = path.join(process.cwd(), "/app/index.html");

function onRequest(request,response){ 
    if (request.url === "/") {
        filesys.createReadStream(index).pipe(response);
    }
    console.log(request.url);
    var my_path = url.parse(request.url).pathname;
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

http.createServer(onRequest).listen(1337);
sys.puts("Server Running on 1337");  