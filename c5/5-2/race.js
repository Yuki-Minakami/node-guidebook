var setTimeout_promise = require('util').promisify(setTimeout);
var readFile_promise = require('util').promisify(require('fs').readFile);

var array = [readFile_promise(__filename),setTimeout_promise(5,"5ms passed")];

Promise.race(array)
.then(function(onResolved){
    console.log(onResolved);
})
.catch(function(err){
    console.log("Err catched");
});

var url = "/data?name=lear&age=10";

var query = require("url").parse(url,true);

console.log(query);

if(request.method == "POST"){
    var form  = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = __dirname;
    form.

    form.parse(request,(err,fields,files)=>{
        console.log(fields); // 表单参数
        console.log(files); // 文件对象
    });
}
