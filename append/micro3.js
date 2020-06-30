// var fs = require("fs");
// fs.readFile(__filename, ()=> {
// 	setTimeout(()=> {
// 		console.log('timeout');
// 	},0);
// 	setImmediate(() => {
// 		console.log('immediate');
// 	});
// 	process.nextTick(()=>{
// 		console.log('nextTick');
// 	});
// 	queueMicrotask(()=>{
// 		console.log('microtask');
// 	});
// });

var Promise = require("bluebird");

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise((resolve,reject)=>{
	console.log('promise1');
	resolve();
})
.then(function() {
  console.log('promise2');
})
.then(function() {
  console.log('promise3');
});

console.log('script end');
