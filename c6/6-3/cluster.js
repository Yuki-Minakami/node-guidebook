const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

console.log(`Master ${process.pid} is running`);

// Fork workers.
for (let i = 0; i < numCPUs; i++) {
    cluster.fork("worker.js");
}

cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
});
