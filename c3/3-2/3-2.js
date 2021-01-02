var arr = new Array(10);   //表格有10行
for(var i = 0;i < arr.length; i++){
	arr[i] = new Array(10);    //每行有10列
}

//使用spread运算符可以更方便地声明二维数组
[...Array(10)].map(()=>{return Array(10).fill(0) })

[-1,-2,2,1,0].sort(); 
// 输出
// [-1,-2,0,1,2]

function comparable(a,b){
	// 也可以写成 return a-b，该返回值会被用在if结构中
	return a>b;
}
[-1,-2,2,1,0].sort(comparable)
// 输出
// [-2,-1,0,1,2]