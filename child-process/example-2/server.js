const http = require('http');
const service = require('./service');
const { fork } = require('child_process');


const app = http.createServer();

app.on('request', (req, res) => {
    if (req.url === '/get-totals') {
        const child = fork('child.js');
        const numberRecord = 100000000;

        // send data
        child.send(numberRecord);

        // handle
        child.on('message', (totals) => {
            console.log('Recive from child');
            res.end(`Totals: ${totals}`);
        });

        setTimeout(() => {}, 1000);
        service.checkLogicService();

    } else {
        res.end('OK');
    }
});

app.listen(4000, () => { console.log('Listening ' +  4000) });