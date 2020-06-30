var cp = require('child_process');
console.log(process.pid);
cp.fork("child.js");

setTimeout(()=>{
    process.exit();
},10000);


