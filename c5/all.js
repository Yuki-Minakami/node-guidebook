var setTimeout_promise = require('util').promisify(setTimeout);
var readFile_promise = require('util').promisify(require('fs').readFile);

var filename = "Some file not exist";

var array = [readFile_promise(filename), setTimeout_promise(5000,"5000ms passed")];

Promise.all(array)
.then(function(onResolved){
    // 没有输出
    console.log(onResolved);
})
.catch(function(err){
    // 捕获错误信息
    console.log("catched",err);
});
