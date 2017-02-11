var config = require('./config');
var apiRouter = require('./api');
var bodyParser = require('body-parser');
var dataProvider = require('./dbmodel/dataprovider');
var express = require('express');
var server = express();
var axios = require('axios');
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

server.listen(config.port, config.host, function () {
  console.log('Example app listening on port: ' + config.port);
});