var fs = require("fs");
var buffer = Buffer.alloc(1024*1024*5);
fs.writeFileSync("./mb.dat",buffer);

var writeable = fs.createWriteStream("./write.dat");

var mbData = Buffer.alloc(1024*1024*1024);

writeable.write(mbData,()=>{
    console.log("writed");
})


writeable.on("drain",()=>{
    console.log("drain");
})