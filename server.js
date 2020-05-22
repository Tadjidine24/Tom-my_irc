const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//run when client connect
io.on('connection', socket => {

    //bienvenue
    socket.emit('message', "bienvenue");

    //user connection
    io.emit('message', 'un utilisateur a rejoin le chat');

    //user deconnection
    socket.on('disconnect', () => {
        io.emit('message', 'un utilisateur a quitter le channel');
    });
});

const PORT = process.env.PORT || 4242;

server.listen(PORT, () => console.log(`le server est lancer port ${PORT}`));

