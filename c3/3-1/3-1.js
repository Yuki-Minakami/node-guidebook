"abc".split("");
//返回
//["a","b","c"]

["a","b","c"].join("");
//返回
//"abc" 

// 下面两种方式只是看起来像是多行字符串，
// 但JavaScript在处理时仍然认为这是一个单行字符串。
var str1 = "I am "+
"dangerous";
 
var str2 = "I am \
dangerous";

console.log(str1); //I am dangerous
console.log(str2); //I am dangerous

var string = 
`I 
am
dangerous `;

console.log(string); 
//输出
// I 
// am
// dangerous

var hostname = "localhost";
var port = 8080;

//以下三个打印语句是等价的
console.log(`Server running at http://${hostname}:${port}/`);
console.log("Server running at http://%s:%f/",hostname,port);
console.log("Server running at http://"+hostname+":"+port+"/");
// 输出
// Server running at http://localhost:8080