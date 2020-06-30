const { parentPort, workerData } = require('worker_threads');
var data = fib(workerData);
parentPort.postMessage(data);

function fib(n){
    if(n <= 0 ) return 0;
    if(n== 2 | n == 1){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
