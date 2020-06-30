var child_process = require("child_process");
var ls = child_process.spawn("node",["-v"]);
ls.stdout.on("data",function(data){
    console.log(data.toString());
})
// ls.stderr.on("data",function(data){
//     console.log(data.toString());
// })
