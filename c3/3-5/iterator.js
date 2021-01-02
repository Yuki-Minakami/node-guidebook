//以下代码的返回值均为"function"

typeof [].__proto__[Symbol.iterator]

typeof "".__proto__[Symbol.iterator]

var map = new Map();
typeof map.__proto__[Symbol.iterator]

var set = new Set();
typeof set.__proto__[Symbol.iterator] 

var arr= ['a','b','c']
Object.keys(arr); 
// 返回键值
// [ '0', '1', '2' ] 

Object.values(arr); 
// 返回键值对应的数据
// [ 'a', 'b', 'c' ]  

Object.getOwnPropertyNames(arr); 
// 返回所有的属性，数组的键值和length都被认为是属性
// [ '0', '1', '2', 'length' ] 

// 以上三个方法也可以用来访问对象。
var obj= {
    name:"lear",
    age:10
};
Object.keys(obj); //[ 'name', 'age' ]
Object.values(obj); // [ 'lear', 10 ]
Object.getOwnPropertyNames(obj); // [ 'name', 'age' ]


// 自定义iterator
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of obj) {
    console.log(item); // 'a', 'b', 'c'
}


// 类数组对象上实现的iterator类似于下面的实现
// 内部需要定义next方法，for/of在每次遍历的时候会调用该方法返回下一个元素
// [Symbol.iterator]:function(){
//     let index = 0;
//     var next = ()=>{
//         if(index<this.length){
//             return {
//                 value :this[index++],
//                 done:false
//             }
//         }else{
//             return {
//                 value:undefined,
//                 done:true
//             }
//         }
//     }
//     return {next:next};
// }