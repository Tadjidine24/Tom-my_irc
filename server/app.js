// const express = require('express');
// const socketio = require('socket.io');
// const http = require('http');

// const PORT = process.env.PORT || 5000;

// // const router = require('./router');

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

// io.on('connection', (socket) => {
//     console.log("New connection !!!");

//     socket.on('join', ({ name, room }) => {
//         console.log(name, room);
//     });

//     socket.on('disconnect', () => {
//         console.log("User had left !!!");
//     })
// });

// // app.use(router);

// server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;