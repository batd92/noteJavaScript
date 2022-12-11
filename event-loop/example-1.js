const express = require('express');
const app = express();

/**
 * Proving JavaScript is single-threaded
 */

app.get('/hello', (req, res, next) => {
    res.send('ok - hello');
});

app.get('/call-service', (req, res, next) => {
    for (let index = 0; index < 10000000; index++) {
        console.log(index);
    }
    res.send('ok - service');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});