var fs = require("fs");
function merge2dist(sourceDir){
    fs.readdir(sourceDir,(err,sourceArr)=>{
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


// 使用
merge2dist("./css")