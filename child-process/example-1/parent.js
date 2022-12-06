const { fork } = require('child_process');

const forked = fork('child.js');

// Lắng nghe sự kiện từ child process
forked.on('message', (msg) => {
  console.log('Message from child', msg);
});

// Gửi data xuống child process
forked.send({ hello: 'world' });