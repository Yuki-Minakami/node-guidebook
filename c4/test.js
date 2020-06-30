
var arr = ["a","b","c"];

// for(var i=0;i<arr.length;i++){}

// arr.forEach(function(item,index,arr){
//     console.log(item);
//     console.log(arr);
//     item = "aaa";
// });

// console.log(arr);

// var result = arr.map(function(item){
//     return item+=item;
// });

// console.log(arr)
// console.log(result);

var obj= {
    name:"lear",
    age:10
};

var sym = Symbol("sex");
obj[sym] = "male";

// console.log(obj[sym]);

// console.log( Object.keys(obj) );

// console.log( Object.values(obj) );

// console.log( Object.getOwnPropertyNames(obj) );

// console.log( Reflect.ownKeys(arr) );


for(var item in obj){
    console.log(item); // name age
} 

for(var item of arr){
    console.log(item);
} 

var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]:function(){
        let index = 0;
        var next = ()=>{
            if(index<this.length){
                return {
                    value :this[index++],
                    done:false
                }
            }else{
                return {
                    value:undefined,
                    done:true
                }
            }

        }
        return {next:next};
    }
};
for (let item of obj) {
    console.log(item); // 'a', 'b', 'c'
}


var fs = require("fs");

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

var readFileAsync = promisify(fs.readFile);

readFileAsync("./urls.txt").then(function(data){
    console.log(data);
})