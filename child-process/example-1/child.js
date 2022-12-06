// Lắng nghe sự kiện của parent
process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
    // gửi data tới parent process
    process.send({ counter: counter++ });
}, 1000);