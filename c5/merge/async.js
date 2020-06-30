var fs = require("fs");
var async = require("async");

// function merge2dist(sourceDir){
//     fs.readdir(sourceDir,(err,sourceArr)=>{
//         sourceArr.forEach(function(item){
//             fs.stat(sourceDir+"/"+item,(err,stat)=>{
//                 if(err) throw err;
//                 if(stat.isFile() && item.split(".").pop() === "css" ){
//                     fs.readFile(sourceDir+"/"+item,(err,data)=>{
//                         fs.appendFile("./dist.css",data,(err)=>{
//                             if(err) throw err;
//                         });
//                     });
//                 }
//             });
//         });
//    });
// }

var sourceDir = './css';

function readDir(callback){
	fs.readdir("./css",callback)
}

function getStat(sourceArr, callback){

    sourceArr.forEach(function(item){
        console.log(item);

        async.waterfall([stat,readFile],function(err,data){
            console.log(data);
        });
    })
}	


function stat(item,callback){
    fs.stat(sourceDir+"/"+item,(err,stat)=>{
        if(err) throw err;
        if(stat.isFile() && item.split(".").pop() === "css" ){
            fs.readFile(sourceDir+"/"+item,callback)
        }
    })
}

function readFile(value,callback){
    console.log(value);
}

// fs.readFile
// fs.appendFile

async.waterfall([readDir,getStat],function(err,data){
    console.log(data);
});
