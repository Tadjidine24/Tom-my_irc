// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

var users = [];

function getUserByRoom(room) {
    var usersRoom = [];

    for (var i in users) {
        if (users[i].room.name == room) {
            usersRoom.push(users[i]);
        }
    }

    return usersRoom;
}

function searchUser(user) {
    for (var i in users) {
        if (users[i].name == user.name) {
            return i;
        }
    }

    return -1;
}

function searchUserByName(username) {
    for (var i in users) {
        if (users[i].name == username) {
            return users[i];
        }
    }

    return null;
}