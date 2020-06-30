var fs = require("fs");
var readable = fs.createReadStream('./mb.dat',{highWaterMark:1024*1024});
readable.on('readable',function(){
    console.log("begin to read");
    while (null !== (data = readable.read())) {
        console.log(data);
    }

    console.log("hahah");
});





// var fs = require("fs");
// var readable = fs.createReadStream("./gb.dat",{highWaterMark:1024*1024});
// var writeable = fs.createWriteStream("./write.dat");
// readable.on('data',function(data){
//     console.log("get data");
//     if(!writeable.write(data)){
//         readable.pause();
//     }
// });

// writeable.on('drain',function(){
//     console.log("resume");
//     readable.resume();
// });
// readable.on('end',function(data){
//     console.log("read end");  
// });

// readable.on("error",function(err){
//     console.log(err);
// });
