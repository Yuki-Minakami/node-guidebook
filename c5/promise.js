function readFile_promise(path){
    new Promise(function(resolve,reject){
        require("fs").readFile(path,(err,data) =>{
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

var p = readFile_promise()
.then(function(onResolved){
    console.log(onResolved);
},function(onRejected){
    console.log(onRejected);
});
    



// logic A


//logic B

function func(){
    console.log('logic a');

    setTimeout_promise(1000)
    .then(function(){
        console.log('logic c');
    });
    
    console.log('logic b');
}


async function func(){
    console.log('logic a');
    await setTimeout_promise(1000);
    console.log('logic b');
    console.log('logic c');
}


