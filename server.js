var config = require('./config');
var apiRouter = require('./api');
var serviceRouter = require('./service');
var bodyParser = require('body-parser');
var express = require('express');
var server = express();
var path = require('path');

server.set('view engine', 'ejs');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/api', apiRouter);
server.use('/', serviceRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, function () {
  console.log('Example app listening on port: ' + config.port);
});

server.get('/public', function (req, res){
    res.sendFile(path.join(__dirname + '/public/main.html'));
});

module.exports = server;