var http = require("http");

var server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html');
    res.end("ok");
    res.setHeader('content-type','text/html');
    // resend(req,res);
});

function resend(req,res){
    res.setHeader('content-type','text/html');
    // res.end("another");
}

server.listen(5000);

