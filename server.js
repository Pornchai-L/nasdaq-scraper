var config = require('./config');
var apiRouter = require('./api');
var bodyParser = require('body-parser');
var express = require('express');
var server = express();

server.set('view engine', 'ejs');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/api', apiRouter);

server.listen(config.port, config.host, function () {
  console.log('Example app listening on port: ' + config.port);
});