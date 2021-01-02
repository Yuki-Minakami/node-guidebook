const child_process = require("child_process"); 
const CPUNums = require("os").CPUs().length; 
for(let i= 0;i<CPUNums;i++){ 

	child_process.fork("run.js"); 
}