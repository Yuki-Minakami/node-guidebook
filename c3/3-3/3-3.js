const a = 10;
a = 20;
//TypeError: Assignment to constant variable

// const的不可变仅存在于普通变量中，无法使用const将一个对象设置为不可变
const b = {name:"lear"}
b.name = "Tony"
// 没有错误
 
// 对于数组
const a = [1,2,3];
a[0] = 4;
// 没有错误

var obj= {name:"Lear"};
Object.freeze(obj);
obj.name="Lily"; // 没有错误

console.log(obj); 
// 输出 
// {name:"Lear"} 

//上面的代码在严格模式下会出现错误
//TypeError: Cannot assign to read only property 'name' of object '#<Object>'

var obj= {
    name:"Lear",
    info:{
        age:10,
        sex:"male"
    }
};
Object.freeze(obj);
obj.info.age=15;

console.log(obj); 
// 输出 
//{ name: 'Lear', info: { age: 15, sex: 'male' } }