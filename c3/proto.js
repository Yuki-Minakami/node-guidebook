function f() {
    this.a = 1;
    this.b = 2;
}

// 在f函数的原型上定义属性
f.prototype.b = 3;
f.prototype.c = 4;
let o = new f(); 
// f {a: 1, b: 2}



f.prototype.print = function(){
    console.log(this.a, this.b, this.c);
}
console.log(o); 
// f { a: 1, b: 2 }
console.log(o.__proto__)
//f { b: 3, c: 4, print: [Function] }

o.print();
//1 2 4