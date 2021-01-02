var fs = require("fs");
setInterval(()=>{
    console.log("interval")
},50);

var readable = fs.createReadStream('./gb.dat',{highWaterMark:20*1024*1024});
// readable.on('readable',function(){
//     console.log("begin to read");
//     while (null !== (data = readable.read())) {
//         console.log(data);
//     }

//     console.log("hahah");
// });



readable.on('readable',function(){
    // console.log("begin to read");
    // console.log("aaa");
    var data = readable.read();
    // console.log("bbb");
});


readable.on('data',(data)=>{
    console.log(data);
});

// setTimeout(()=>{
//     console.log("hahahahah");
// },2000);