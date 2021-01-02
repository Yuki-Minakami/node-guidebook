// chapter 3 
// 基本的类继承

function Person(name,age) {
    this.name  = name;
    this.age = age;
}

Person.prototype.setName = function(name){
    this.name=name;
    return this;
}
Person.prototype.setAge = function(age){
    this.age=age;
    return this;
}
Person.prototype.print = function(){
   console.log(this.name + ' ' + this.age)
}


var person = new Person();
person.setName("Lear").setAge(10).print();




function Student(name,age,num){
    Person.call(this,name,age);
    this.num = num;
}
Student.prototype = new Person();
Student.prototype.print = function(){
    console.log(this.name + ' ' + this.age + ' ' +this.num)
}

var stud = new Student("lear",10,1);
stud.print();

// stud.haha = 10;

// stud.gethaha();


// var stud2 = new Student("female");
// stud2.setName("Lily");
// stud2.setAge(12);
// stud2.print();
// stud2.gethaha();