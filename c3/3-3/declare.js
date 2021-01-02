//声明一个变量
var name = "lear"

// 修改变量的值
name = "lily"

// 赋给变量不同类型的值
name = [1,2,3]

console.log(b);
var b=2;
// 输出
undefined

// 和下面的代码等价

var b;
console.log(b);
b=2;

// 下面的代码不会发生变量提升
// 没有使用var关键字定义变量
console.log(b);
b=3; 

// 输出
//ReferenceError: b is not defined


//下面代码打印的结果是什么？

function process(arr){
    function mul10(val){
        i = 10;
        return val*10;
    }
    for(var i =0 ; i<arr.length ; i++){
        arr[i] = mul10(arr[i]);
    }
    return arr;
}
console.log(process([1,2,3,4])); 
// 期望输出
// [10,20,30,40]
// 实际输出 
// [10,2,3,4]


//使用let声明一个变量
let name = "lear"

// 修改变量的值
let = "lily"

// 赋给变量不同类型的值
name = [1,2,3]

// let不会表现出变量提升
console.log(b);
let b=2;
// 输出
//ReferenceError: Cannot access 'b' before initialization


add(1,2);
// 返回 3
function add(x,y){
	return x+y;
}

// 提升仅仅限于函数声明，函数表达式遵循的是变量提升的规则。
add(1,2);
var add = function(x,y){
	return x+y;
}

// 输出
// Uncaught TypeError: add is not a function