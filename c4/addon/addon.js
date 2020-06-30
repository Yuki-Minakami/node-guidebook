var addon = require("./build/release/addon.node");

// var begin = process.uptime()*1000;
// // console.log(begin);
// addon.sleep_ms(20);

// var end = process.uptime()*1000;
// console.log(end-begin);

var idle = 10;

for(var i=0;i<10;i++){
    var begin = process.uptime()*1000;
    while(process.uptime()*1000-begin < idle);
    addon.sleep_ms(idle);
    var end = process.uptime()*1000;
    
    //console.log((end-begin-idle-idle)/idle*100);
    console.log((end-begin));
}





// function sleep(ms){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve();
//         },ms);
//     });
// }
// (async()=>{
//     for(var i=0;i<10;i++){
//         var begin = Date.now();
//         while(Date.now()-begin < idle);
//         await sleep(idle);
//         var end = Date.now();
//         // console.log((end-begin-idle-idle)/idle*100);
//         console.log(end-begin);
//     }
// })();


