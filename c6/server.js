const http = require("http");
var server = http.createServer(function(request,response){
    console.log("gets");
    response.setHeader('Cache-Control','no-cache')
    response.setHeader('Content-Security-Policy',"default-src 'self' 'unsafe-inline'")
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.writeHead(200, { 'Content-Type': 'application/json' });
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
   
    response.end("Welcome home!"); 
});
server.listen(8080);
console.log("Listening on 8080.");

