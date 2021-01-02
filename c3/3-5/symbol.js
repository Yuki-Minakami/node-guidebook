var obj= {
    name:"lear",
    age:10
};

var sym = Symbol("sex");
obj[sym] = "male";

console.log(Object.getOwnPropertySymbols(obj))
// 返回
[ Symbol(sex) ]

Object.getOwnPropertySymbols(Array.prototype)
// 返回
[Symbol(Symbol.iterator), Symbol(Symbol.unscopables)]

Object.getOwnPropertySymbols(String.prototype)
// 返回
[Symbol(Symbol.iterator)]