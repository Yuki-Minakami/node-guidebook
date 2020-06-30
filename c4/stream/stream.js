var fs = require("fs");
var buffer = Buffer.alloc(1024*1024*5);
fs.writeFileSync("./mb.dat",buffer);

var readable = fs.createReadStream("./mb.dat",{highWaterMark:1024*1024});

var writeable = fs.createWriteStream("./write.dat");

readable.pipe(writeable);

readable.on('data',function(data){
    console.log("get data");
    //  writeable.write(data);
});

writeable.on('drain',function(){
    console.log("resume");
});
readable.on('end',function(data){
    console.log("read end");  
});

readable.on("error",function(err){
    console.log(err);
});


