
var readFile_promise = require('util').promisify(require('fs').readFile);
new Promise(function(resolve,reject){
    require("fs").readFile(__filename,(err,data) =>{
        if(err){
		   //可以被catch方法捕获
            reject(err);
            return;
        }
        resolve(data);
    });  
});


readFile_promise(__filename2)
.then(function(onResolved){
    console.log(onResolved);
    // 可以被catch()方法捕获
    throw new Error("I am a Error!")
})
.catch(function(e){
    console.log("catched",e);
});
