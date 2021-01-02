// chapter 3 
// spread 运算符的使用

// 修饰现有方法
function compose(fn){
	return function(){
        var args = Array.prototype.slice.call(arguments,0);
		fn.apply(this,args);
	}
}

var myLog = compose(console.log);

myLog(1,2,3)



// 使用扩展运算符后，就可以很简单地处理不确定长度的参数
function compose(fn){
	return function(...args){
		fn(...args);
	}
}

var myLog = compose(console.log);
myLog(1,2,3)
