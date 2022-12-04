const express = require('express');
const port = 3002;
const cluster = require('node:cluster');
const process = require('node:process');
const cpus = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Number of CPUs is ${cpus}`);
    console.log(`Master ${process.pid} is running`);
    // For worker threads
    for (let index = 0; index < cpus; index++) {
        cluster.fork()
    }

    // event exit worker
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
    })
} else {
    const app = express();
    console.log(`Worker ${process.pid} started`);
    // start server
    app.get('/checkStatus', (req, res) => {
        res.send('status ok!');
    })
    
    app.get('/api/cluster',(req, res) => {
        console.time('cluster');
        const baseNumber = 8;
        let result = 0;
        for (let i = Math.pow(baseNumber, 7); i >= 0; i--) { 
            result += Math.atan(i) * Math.tan(i);
        }
        
        console.timeEnd('cluster');
        console.log(`Result number is ${result} - on process ${process.pid}`);
        res.send(`Result number is ${result}`);
    });
    
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
}