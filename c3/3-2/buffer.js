// 创建一个buffer对象，大小为1024byte，即1Kb
var buffer = Buffer.alloc(1024);

var fs = require("fs");
fs.readFile(__filename,(err,data)=>{
	// data为Buffer类型数据
console.log(data);
// 可以调用tostring方法将Buffer类型转换成字符串
    console.log(data.toString())
});
// 输出
//<Buffer 76 61 72 20 66 73 20 3d 20 72 65 71 75 69 72 65 28 22 66 73 22 29 3b 0d 0a 0d 0a 66 73 2e 72 65 61 64 46 69 6c 65 28 5f 5f 66 69 6c 65 6e 61 6d 65 2c ... 75 more bytes>

fs.readFile(__filename,(err,data)=>{
    console.log(data.toString())
})