const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoconnect = require('./mongoconnect');
const roleClient = require('./roleClient');
const session = require('express-session');

const app = express();

roleClient.initMongoose()
// mongoconnect.initMongoose();

app.use(session({
  secret: "cncjkwljdvdcsd",
  resave: false,
  saveUninitialized: false
}))

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/app/login', express.static(path.join(__dirname, '/auth-build')))

app.use('/app/auth', authRouter);
app.use('/users', usersRouter);
app.use('/app', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
