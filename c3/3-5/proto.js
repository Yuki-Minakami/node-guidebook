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

function Person() {
    this.name  = "";
    this.age = 0;
}

Person.prototype.setName = function(name){
    this.name=name;
}

// Person()是一个构造函数
var person = new Person();

person.setName("Lear");

// 使用Object.create
var Person = {
    name: "",
    setName: function (name) {
        this.name = name;
    }
};
  
var student = Object.create(Person);
student.setName("lear");