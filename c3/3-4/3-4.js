var log = (data)=>{
	console.log(data)
}

//和下面的声明方式等价
var log = function(data){
    console.log(data);
}

//箭头函数也可以用在匿名函数中
[1,2,3].map((item)=>console.log(item)); 
setTimeout(()=>{console.log("1s passed")},1000)


// 覆盖原生函数
function getDate(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ms = date.getMilliseconds();

    return `${hour}:${minute}:${second}:${ms} `;
}

// 下面的写法是错误的
// 在console.log()的定义内部再次调用console.log()，会导致无穷的递归直到栈溢出。
// console.log = function(...args){
//     return console.log(getDate(),...args);
// }

//比较合适的做法是声明一个匿名函数，再把原生的console.log作为参数传入
console.log = (function(fn){
    return function(...args){
        return fn(getDate(),...args);
    }
})(console.log);

//测试用例
console.log("with timestamp");
//输出
//20:26:6:983 with timestamp