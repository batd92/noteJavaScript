// https://nodejs.org/api/events.html

const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('recive-order', (number) => {
    console.log('====> Revice number order: ' + number);
});

eventEmitter.emit('recive-order', 100000);

eventEmitter.removeAllListeners();

eventEmitter.on('recive-order', (number) => {
    console.log('====> Revice number order-2: ' + number);
});

eventEmitter.emit('recive-order', 100001);