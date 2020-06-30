
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    static intro(){
        console.log("Person is the base class");
    }
    setName(name){
        this.name = name;
        return this;
    }
    setAge(age){
        this.age = age;
    }
    print(){
        console.log(this.name + ' ' + this.age);
    }
}



class Student extends Person{
    constructor(name,age,num){
        super(name,age);
        this.num = num;
    }
    print(){
        console.log(this.name + ' ' + this.age + ' ' +this.num);
    }
}

var person = new Person("Lear",10);
Person.intro();
person.print();

person.intro();//TypeError: person.intro is not a function

var stud = new Student("Lear",10,1);
stud.print();

