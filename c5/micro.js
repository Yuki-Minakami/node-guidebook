require('fs').readFile(__filename, ()=> {
    setTimeout(()=>{
        console.log('timeout1');
        queueMicrotask(()=>{
            console.log('microtask');
        });
    },0);
    
    setTimeout(()=>{
        console.log('timeout2');
    },0);

});
    