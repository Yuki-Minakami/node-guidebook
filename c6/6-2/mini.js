function express(){
    this.req = undefined;
    this.res = undefined;
    var mdArr = [];
    var index = 0;
    this.use = (fn)=>{
        mdArr.push(fn);
    }

    this.listen = (port)=>{
        var server = require('http').createServer(handle);
        server.listen(port);
    }

    var next = ()=>{
        index++ ;
        if(index >mdArr.length-1) {
            index = 0;
            return;
        };
        mdArr[index](this.req,this.res,next);
    }

    var handle = (req,res)=>{
        this.req = req;
        this.res = res;
        mdArr[0](this.req,this.res,next);
    }
}

var app = new express();

app.use((req,res,next)=>{
    console.log(req.headers);
    next();
});

app.use((req,res,next)=>{
    res.end('welcome');
});

app.listen(8000);

