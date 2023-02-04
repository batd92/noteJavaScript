const express = require('express');
const session = require('express-session');

// Đăng kí redis
const Redis = require('ioredis');
const RedisSession = require('connect-redis')(session);
const clientRedis = new Redis();

const app = express();
app.use(express.json());

// đăng kí session
app.use(session({
    secret: 'nu-2508',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600 * 24,
        username: 'nu-2508',
        secure: false,
        httpOnly: true
    },
    store: new RedisSession({ client: clientRedis }), // lưu thông tin session vào Redis
}));

app.get('/set-session', (req, res) => {
    // set thông tin session
    req.session.user = {
        name: 'nu-2508',
        status: 'xinh-dep'
    };
    res.send('OK');
});

app.get('/get-session', (req, res) => {
    // get thông tin session
    res.send(req.session);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
