const fs = require('fs');
const fsPromises = fs.promises;

async function merge2dist(sourceDir){
    var sourceArr = await fsPromises.readdir(sourceDir);

    sourceArr.forEach(async function(item){
        var stat = await fsPromises.stat(sourceDir+"/"+item)
        if(stat.isFile() && item.split(".").pop() === "css" ){
            var content = await fsPromises.readFile(sourceDir+"/"+item)
        }
        await fsPromises.appendFile("./dist.css", content)
    });
}

//使用
merge2dist("./css")