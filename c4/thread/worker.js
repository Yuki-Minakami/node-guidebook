const {
    Worker, isMainThread, parentPort, workerData
  } = require('worker_threads');
  
  function fib(n){
      if(n <= 0 ) return 0;
      if(n== 2 | n == 1){
          return 1;
      }
      return fib(n-1)+fib(n-2);
  }
  
  if (isMainThread) {
      var count = 0;
      setInterval(()=>{
          count++;
          console.log(`${count}s passed`);
          if(count == 3){
              const worker = new Worker(__filename, {
                  workerData: 45
              });
              worker.on('message', (data)=>{
                  console.log(data);
              });
          }
      },1000)
  } else {
      var data = fib(workerData);
      parentPort.postMessage(data);
  }
  