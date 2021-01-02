var cp = require("child_process");


cp.fork("./child.js");

console.log(process.pid);



