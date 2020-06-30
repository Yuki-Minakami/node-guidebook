setTimeout(()=>{
    console.log('timeout1');
    // process.nextTick(()=>{
    //     console.log('nextTick');
    // });

    Promise.resolve().then(()=>{
        console.log('resolved');
    });
},0);

setTimeout(()=>{
    console.log('timeout2');
},0);