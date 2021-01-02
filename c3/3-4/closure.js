// chapter 3 
// 闭包的演示代码

// 公共的变量声明
var obj ={}
var arr = [
	{name:"Lear"},
	{name:"Lily"}
];

// -------------

for(var i = 0;i<arr.length;i++){
	var item = arr[i];
	obj[item.name] = function(){
		console.log(item.name);
	}
}

obj["Lear"](); // lily

obj["Lily"](); // lily

// 输出
// Lily
// Lily


// --------------

for(var i = 0;i<arr.length;i++){
	var item = arr[i];
    obj[item.name] = log(item.name);
}

function log(name){
    return ()=>{
        console.log(name);
    }
}

obj["Lear"](); 
obj["Lily"](); 

// 输出
// Lear
// Lily

