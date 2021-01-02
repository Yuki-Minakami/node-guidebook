var {talk} = require("./person.js");
talk();

var name = require("./export");
console.log(name);

// process.on('uncaughtException',()=>{
//     console.log("Just keep the process running ...")
// });

// var arr = [a,b,c];


var arr = [1,2,3]

let [...arr1] = arr;


arr.push(4)

console.log(arr1);

console.log({} == exports);

console.log(require.cache.path);
