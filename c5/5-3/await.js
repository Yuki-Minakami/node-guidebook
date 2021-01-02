async function awaitTest(){
	console.log("begin read file");
	var result = await readFile_promise(__filename);
	console.log(result);

	console.log("begin timer");
	var result = await setTimeout_promise(1000);
	console.log("end");
}
awaitTest(); 
// 输出
// begin read file
// <Buffer 76 61 72 20 72 65 61 64 ......
// begin timer
// end

//上面的代码和下面的代码是等价的
function awaitTest(){
    console.log("begin read file");
    readFile_promise(__filename)
    .then(function(data){
        console.log(data);
        console.log("begin timer");
        return setTimeout_promise(1000);
        
    })
    .then(function(data){
        console.log("end");
    });
}