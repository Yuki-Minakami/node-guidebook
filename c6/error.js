var http = require("http");

http.createServer(function(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
    
    resend(req,res);//在响应结束后再次发送响应信息

}).listen(5000);

function resend(req,res){
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('error');      
}
