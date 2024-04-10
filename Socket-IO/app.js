const app = require ('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 7777;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// io.on('connection', (socket) => {
//     console.log('User is connected...');
//     socket.emit("customEvent", "Hello Guys How are you...!");

//     socket.on('Hello', (data) => {
//         console.log(data);
//     });

//     socket.on('disconnect', () => {
//         console.log('User is disconnected...');
//     });
// });

let users = 0;
io.on('connection', (item) => {
    // console.log('User is connected...');

    users++;
    // item.emit('customEvent', `${users} user is connected...`);
    item.emit('customEvent', `Hii, Welcome to here...`);
    item.broadcast.emit('customEvent', `${users} user is connected...`);
    item.on('disconnect', () => {
        console.log('User is disconnected...');
        users--;
        item.broadcast.emit('customEvent', `${users} user is connected...`);
    });
});

server.listen(port, () => {
    console.log(`Server Started at http://localhost:7777`);
});

