//引入模块
const { Worker } = require('worker_threads');

var count = 0;
setInterval(()=>{
    count++;
        console.log(`${count}s passed`);
    if(count == 3){
        const worker = new Worker("./sub.js", {
            workerData: 50
        });
        worker.on('message', (data)=>{
            console.log(data);
        });
    }
},1000);
