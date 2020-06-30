var fs = require("fs");
function merge2dist(sourceDir){
    fs.readdirSync(sourceDir,(err,sourceArr)=>{
        sourceArr.forEach(function(item){
            fs.stat(sourceDir+"/"+item,(err,stat)=>{
                if(err) throw err;
                if(stat.isFile() && item.split(".").pop() === "css" ){
                    fs.readFile(sourceDir+"/"+item,(err,data)=>{
                        fs.appendFile("./dist.css",data,(err)=>{
                            if(err) throw err;
                        });
                    });
                }
            });
        });
   });
}


function merge2dist(sourceDir){
	//获取目录下的文件列表
    var sourceArr = fs.readdirSync(sourceDir);
    sourceArr.forEach(function(item){
        var stat = fs.statSync(sourceDir+"/"+item);
	   // 找到后缀为css的文件
        if(stat.isFile() && item.split(".").pop() === "css" ){
            fs.appendFileSync("./dist.css",fs.readFileSync(sourceDir+"/"+item));
        }
    });
}


// 使用
merge2dist("./css")