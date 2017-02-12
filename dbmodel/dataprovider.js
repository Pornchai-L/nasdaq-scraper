var config = require('../config');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mdb;

// Connection URL
MongoClient.connect(config.mongodbUri, function(err, db) {
//   assert.equal(null, err);
  console.log("Connected correctly to server");
  mdb = db;
});

exports.importDummyStockData = function(res, callback) {
	mdb.collection('stocks').insertMany([{
        "netChange": "\n8.23 ▲ 0.15%\n",
        "stockId": "stock0",
        "stockName": "NASDAQ",
        "stockValue": "5682.45",
        "timeStamp": 1486655393938
    },{
        "netChange": "\n10.7 ▲ 0.21%\n",
        "stockId": "stock1",
        "stockName": "NASDAQ-100 (NDX)",
        "stockValue": "5196.58",
        "timeStamp": 1486655393938
    },{
        "netChange": "\n-9.99 ▼ 0.19%\n",
        "stockId": "stock2",
        "stockName": "Pre-Market (NDX)",
        "stockValue": "5175.89",
        "timeStamp": 1486655393938
    },{
        "netChange": "\n-1.16 ▼ 0.02%\n",
        "stockId": "stock3",
        "stockName": "After Hours (NDX)",
        "stockValue": "5195.42",
        "timeStamp": 1486655393938
    },{
        "netChange": "\n-35.95 ▼ 0.18%\n",
        "stockId": "stock4",
        "stockName": "DJIA",
        "stockValue": "20054.34",
        "timeStamp": 1486655393938
    },{
        "netChange": "\n1.59 ▲ 0.07%\n",
        "stockId": "stock5",
        "stockName": "S&P 500",
        "stockValue": "2294.67",
        "timeStamp": 1486655393938
    },{
        "netChange": "\n-2.32 ▼ 0.17%\n",
        "stockId": "stock6",
        "stockName": "Russell 2000",
        "stockValue": "1358.74",
        "timeStamp": 1486655393938
    }]).then(function(response) {
		res.send('ok');
		mdb.close();
        callback({ status:'ok' });
    });
};

exports.importDummySVGChart = function(res, callback) {
	mdb.collection('svgcharts').insertMany([{
        "stockId": "stock0",
        "svgchart": "",
        "timeStamp": 1486655393938
    },{
        "stockId": "stock1",
        "svgchart": "",
        "timeStamp": 1486655393938
    },{
        "stockId": "stock2",
        "svgchart": "",
        "timeStamp": 1486655393938
    },{
        "stockId": "stock3",
        "svgchart": "",
        "timeStamp": 1486655393938
    },{
        "stockId": "stock4",
        "svgchart": "",
        "timeStamp": 1486655393938
    },{
        "stockId": "stock5",
        "svgchart": "",
        "timeStamp": 1486655393938
    },{
        "stockId": "stock6",
        "svgchart": "",
        "timeStamp": 1486655393938
    }]).then(function(response) {
		res.send('ok');
		mdb.close();
        callback({ status:'ok' });
    });
};

exports.getStockList = function(callback) {
	mdb.collection('stocks')
		.find({})
		.toArray(function(err, stocks) {
			assert.equal(err, null);
			callback(stocks);
		});
};

exports.insertStockList = function(data, callback) {
	mdb.collection('stocks').insertMany(data)
		.then(function(response) {
      		mdb.close();
      		callback({ status:'ok', data:data});
    	})
    	.catch(function(error) {
			console.error(error);
			callback({ status:'error', data:[]});
		});
};

exports.updateStockList = function(data, callback) {
	for (var index=0; index<data.length; index++) {
		var item = data[index];
		mdb.collection('stocks').update({ 	
			stockId: item.stockId 
		},{
			stockId: item.stockId,
			netChange: item.netChange,
        	stockName: item.stockName,
        	stockValue: item.stockValue,
        	timeStamp: item.timeStamp
		},{
			w:1
		}, function(error) {
			console.error(error);
		});
	}
};

exports.dropStockAll = function(callback) {
	mdb.collection('stocks').remove()
        .then(function(response) {
            mdb.close();
            callback({ status:'ok' });
        });
};

exports.getSVGChart = function(stockid, callback) {
	mdb.collection('svgchart')
		.findOne({ stockid })
		.then(function(response) {
			mdb.close();
			callback({ status:'ok', data:data});
		})
		.catch(function(error) {
			console.error(error);
			callback({ status:'error', data:null});
		});
};

exports.updateSVGChart = function(item, callback) {
	mdb.collection('svgchart').update({ 	
			stockId: item.stockId 
		},{
			stockId: item.stockId,
			svgchart: item.svgchart,
        	timeStamp: item.timeStamp
		},{
			w:1
		}, function(error) {
			console.error(error);
		});
};

exports.dropSVGChartAll = function() {
	mdb.collection('svgcharts').remove();
};