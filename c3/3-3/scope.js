function test(){
	let a = 0;
	if(a==0){
//b的作用域仅限于if 内部
		let b = 5;
	}
	console.log(b);
}
test();
// 输出
// Uncaught ReferenceError: b is not defined

// 根据运行时的不同，指向的对象有所区别

// 浏览器环境指向window对象
console.log(this === window); //true

// Node脚本中指向module.exports
console.log(this === module.exports); //true

// Node REPL环境中指向 global
console.log(this === global); //true

function test(){
	// 在node环境中指向global对象，在浏览器环境中指向window对象，下同
console.log(this === global); // true

return ()=>{
	   // 箭头函数的this和外层保持一致
        console.log(this===global); //true
    }
}

var person= {
    name:"lear",
    talk:function(){
   	   // 指向函数拥有者
        console.log(this.name); //lear
    }
}