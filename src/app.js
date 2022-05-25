var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index.routes');

var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
