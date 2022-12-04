// https://nodejs.org/api/events.html

const event = require('events');
const util = require('util');

// Khai báo class
class Person1 {};

util.inherits(Person1, event.EventEmitter);

const person1 = new Person1();

person1.on('kiss', () => {
    console.log('kiss you!!!');
});

person1.emit('kiss');

class Person2 extends event {};
const person2 = new Person2();

person2.on('miss', () => {
    console.log('miss you!!!');
});

person2.emit('miss');
