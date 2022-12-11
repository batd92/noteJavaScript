// https://javascript.info/settimeout-setinterval
/**
 * setTimeout and setInterval
 */

// loop timeout
const loopTimeout = () => {
    let idTimeOut = setTimeout(function log() {
        console.log('Loop timeout');
        idTimeOut = setTimeout(log, 2000);
    });
};
// loopTimeout();

// timeout = 0 => not done immediately => event loop
const zeroTime = () => {
    console.log('zeroTime-1');
    setTimeout(() => {
        console.log('zeroTime-2');
    }, 0);
    console.log('zeroTime-3');
};
//zeroTime();

const zeroTime2 = () => {
    console.log('zeroTime-1');
    setTimeout(() => {
        console.log('zeroTime-2');
        setTimeout(() => {
            console.log('zeroTime-2 => 1');
        }, 0);
    }, 0);
    setTimeout(() => {
        console.log('zeroTime-2.1');
    }, 0);
    console.log('zeroTime-3');
};
zeroTime2();

// function setInterval
const setIntervalExample = () => {
    setInterval(() => {
        console.log('setInterval immediately after 1s');
    }, 1000);
};
//setIntervalExample();

const zeroTimeInterval = () => {
    setInterval(() => {
        console.log('zeroTimeInterval' + new Date().getTime());
    }, 0);
};
//zeroTimeInterval();