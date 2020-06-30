const fs = require('fs');
const fsPromises = fs.promises;

function merge2dist(sourceDir){
    fsPromises.readdir(sourceDir)
    .then((sourceArr)=>{
        sourceArr.forEach(function(item){
            fsPromises.stat(sourceDir+"/"+item)
            .then((stat)=>{
                console.log(stat);
                if(stat.isFile() && item.split(".").pop() === "css" ){
                    return fsPromises.readFile(sourceDir+"/"+item)
                }
            })
            .then((data)=>{
                console.log(data);
                return fsPromises.appendFile("./dist.css", data)
            })
            .catch((err)=>{
                console.log("Catched ",err);
            });
        })
    })
    .catch((err)=>{
        console.log("Catched ",err);
    });
}

//使用
merge2dist("./css")