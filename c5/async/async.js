var readFile_promise = require('util').promisify(require('fs').readFile);
var setTimeout_promise = require('util').promisify(setTimeout);


var readAsync = async function(){
    var data =  await readFile_promise(__filename);
    return data;
};

function awaitTest(){
    console.log("begin read file");
    readFile_promise(__filename)
    .then(function(data){
        console.log(data);
        console.log("begin timer");
        return setTimeout_promise(1000)
        
    })
    .then(function(data){
        console.log("end");
    });
}

awaitTest();

app.use(function(req,res,next){
    readFile_promise(__filename)
    .catch(next);
});


