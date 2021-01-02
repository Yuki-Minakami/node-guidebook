// 向set对象中加入两个空数组
var s = new Set();
s.add([]);
s.add([]); 
//Set(2) {Array(0), Array(0)}

// 可以加入两个内容相同的对象
var obj = {a:1};
var obj2={a:1}
s.add(obj);
s.add(obj2); // s.size = 2

// 不能将一个对象的引用加入到set对象中两次
var obj = {a:1};
s.add(obj);
s.add(obj); // s.size = 1