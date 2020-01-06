var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var shorterRouter = require('./routes/shorter');

var app = express();

// connect to Mongo daemon
mongoose
  .connect(
    'mongodb://mongo:27017/express-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/shorter', shorterRouter);

module.exports = app;
