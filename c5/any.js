var setTimeout_promise = require('util').promisify(setTimeout);
var readFile_promise = require('util').promisify(require('fs').readFile);

var filename = "Some file not exist";

var array = [readFile_promise(filename), setTimeout_promise(5000,"5000ms passed")];

Promise.any(array)
.then(function(onResolved){
    console.log(onResolved);
})
.catch(function(err){
    // 即使回调出现了错误
    // 也不会catch()方法处理
    console.log("catched",err);
});
// 输出



async function func(){
    console.log('logic a');
    await setTimeout_promise(1000)
    //1秒
    console.log('logic b');
    console.log('logic c');
}
