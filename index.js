const server = require('http').createServer();
const io = server('socket.io')(server);

io.on('connection', client => {
    console.log("Connection with new client");
    client.on('event', data => { /* _ */ });
    client.on('disconnect', () => { /* _ */ })
});

server.listen(3000);