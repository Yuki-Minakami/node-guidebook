import * as fs from "fs"

// require('fs');
// 在mjs文件中获取当前文件名和当前路径
// const currentFile = import.meta.url;
// const currentDirectory = new URL(import.meta.url).pathname;


// console.log(currentFile);
// console.log(currentDirectory);

fs.readFile('./es6module.mjs',(err,data)=>{
    console.log(data)
})

var name = "lear";
var age = 10;
export {name,age};

var hello = ()=>{
    console.log('Hello world');
}

export {hello};