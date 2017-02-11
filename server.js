var config = require('./config');
var apiRouter = require('./api');
var bodyParser = require('body-parser');
var dataProvider = require('./dbmodel/dataprovider');
var express = require('express');
var server = express();
var axios = require('axios');
var refreshTimeout = 5;
var schedule = require('node-schedule');
var taskSchedule = new schedule.RecurrenceRule();
taskSchedule.minute = 10;

server.set('view engine', 'ejs');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/api', apiRouter);
server.use(express.static('public'));

function scrapeOnSchdeule () {
	dataProvider.getStockList(function(data){		
		// no snapshot data in db
		if (data != undefined && data.length === 0) {
			axios.get(config.serverUrl()+'/api/scrapestocklist')
				.then(function(response){
					if (response.data.length > 0) {
						dataProvider.insertStockList(response.data);
					}
			});
		} else {
			axios.get(config.serverUrl()+'/api/scrapestocklist')
				.then(function(response){
					if (response.data.length > 0) {
						dataProvider.updateStockList(response.data);
					}
				});
		}
	});
}

schedule.scheduleJob(taskSchedule, scrapeOnSchdeule);


server.get('/stocklist', function (req, res) {
	dataProvider.getStockList(function(data){		
		// no snapshot data in db
		if (data != undefined && data.length === 0) {
			axios.get(config.serverUrl()+'/api/scrapestocklist')
				.then(function(response){
					if (response.data.length > 0) {
						dataProvider.insertStockList(response.data);
						res.send({ status:'new', data: response.data});
					}
			});
		} else {
			var diffMs = (new Date()).getTime() - data[0].timeStamp;
			var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
			if (diffMins > refreshTimeout) {
				axios.get(config.serverUrl()+'/api/scrapestocklist')
				.then(function(response){
					if (response.data.length > 0) {
						dataProvider.updateStockList(response.data);
						res.send({ status:'renew', data: response.data});
					}
				});
			} else {			
				res.send({ status:'delay', data: data});
			}
		}
	});
});

server.post('/stockchart', function(req, res) {
	var stockId = parseInt(req.body.stockId);
	switch (stockId) {
		case 0:
			axios.get(config.serverUrl()+'/api/scrapenasdaqchart')
				.then(function(response){
					res.send(response.data);
				});
			break;

		case 1:
			axios.get(config.serverUrl()+'/api/scrapenasdaq100chart')
				.then(function(response){
					res.send(response.data);
				});
			break;

		case 2:
			axios.get(config.serverUrl()+'/api/scrapepremarketchart')
				.then(function(response){
					res.send(response.data);
				});
			break;

		case 3:
			axios.get(config.serverUrl()+'/api/scrapeaftermarketchart')
				.then(function(response){
					res.send(response.data);
				});
			break;

		case 4:
			axios.get(config.serverUrl()+'/api/scrapedjiachart')
				.then(function(response){
					res.send(response.data);
				});
			break;

		case 5:
			axios.get(config.serverUrl()+'/api/scrapesp500chart')
				.then(function(response){
					res.send(response.data);
				});
			break;

		case 6:
			axios.get(config.serverUrl()+'/api/scraperussell2000chart')
				.then(function(response){
					res.send(response.data);
				});
			break;
	}
});

server.listen(config.port, config.host, function () {
  console.log('Example app listening on port: ' + config.port);
});