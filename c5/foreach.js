var array = [4000,3000,2000,1000];

var setTimeout_promise = require('util').promisify(setTimeout);
var readFile_promise = require('util').promisify(setTimeout);


array.forEach(async(item)=>{
    var data = await setTimeout_promise(item,item);
    console.log(data);
})


var array = [readFile_Promise("data.txt"),setTimeout_Promise(100)];

Promise.allSettled(array)
.then(function(onResolved){
    console.log(onResolved);
})
.catch(function(err){
    console.log("Err catched");
});
