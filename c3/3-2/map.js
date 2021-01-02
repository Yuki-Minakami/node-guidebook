var obj={};

// obj内部会将键值1转换成"1"
obj[1]= 1; 

console.log(obj["1"]);
// 输出 
//1

obj["1"]= 2;
console.log(obj[1]);
// 输出
//2

var obj = {};
var key = {name:"Lear"};
obj[key] = 10;
console.log(obj); 
// 输出
//{[object Object]: 10}

var m = new Map();
m.set(1,1);
m.get(1); 
// 输出
1
m.get("1");
// 输出
undefined

var obj = {a:1};
map.set(obj,2)
map.get(obj)
// 输出
// 2 