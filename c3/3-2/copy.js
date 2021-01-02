var a = [1,2,3]
var b = a;
a.push(4);
console.log(b); 

// b的值随a的值变化
//[1,2,3,4]

var a = [1,2,3];
var b = a.slice(0);
a.push(4);
console.log(b);
//输出
//[1,2,3]

var a = [1,2,3];
var b = [];
Object.assign(b,a); 
a.push(4);
console.log(b); 
// 输出
//[1,2,3]

// Object.assign方法不仅仅局限于数组，对所有对象都适用。
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
Object.assign(target, source);

console.log(target); 
// 输出
//{ a: 1, b: 3, c: 4 }


// 用序列化实现的复制
var a = [[1],[2],[3]];
b = JSON.parse(JSON.stringify(a));
a[0].push(4);
console.log(b);
//输出
//[ [ 1 ], [ 2 ], [ 3 ] ]

var v8 = require('v8');
var a = [[1],[2],[3]];
b = v8.deserialize(v8.serialize(a));

a[0].push(4);
console.log(b);
// b的值不会随a变化
[ [ 1 ], [ 2 ], [ 3 ] ]