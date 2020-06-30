console.log(1);

setTimeout(() => {
    console.log(2);
    new Promise((res, rej) => {
        console.log(3);
        res();
    }).then(() => {
        console.log(4);
    });
}, 0);

new Promise((res, rej) => {
    console.log(5);
    res();
}).then(() => {
    console.log(6);
});

setTimeout(() => {
    console.log(7);
    new Promise((res, rej) => {
        console.log(8);
        res();
    }).then(() => {
        console.log(9);
    });
}, 0);
