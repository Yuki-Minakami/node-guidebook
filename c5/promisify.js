function promisify(fn){
    return function(...args){
        return new Promise(function(resolve, reject){
            fn(...args,(err,data)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(data);
            })
        })
    }
}


var setTimeout_promise = promisify(setTimeout);
var readFile_promise = promisify(require('fs').readFile);


readFile_promise(__filename)
.then((data)=>{
    console.log(data);
});

// setTimeout_promise(1000,"aa")
// .then(()=>{
//     console.log(data);
// })