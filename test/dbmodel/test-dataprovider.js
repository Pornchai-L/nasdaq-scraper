const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const dataprovider = require('../../dbmodel/dataprovider');

describe('Test dataprovider module', function() {
	describe('dataprovider importDummyStockData', function() {
		it('shoud return ok if success', function() {
			var mockRes = function() {
				this.value = "";
				this.send = function(text) {
					this.value = text;
				}
			} 
			dataprovider.importDummyStockData(mockRes, function(response) {
				expect(response.status).to.equal('ok');
				expect(mockRes.value).to.equal('ok');
			});
		});
	});

	describe('dataprovider importDummySVGChart', function() {
		it('shoud return ok if success', function() {
			var mockRes = function() {
				this.value = "";
				this.send = function(text) {
					this.value = text;
				}
			} 
			dataprovider.importDummySVGChart(mockRes, function(response) {
				expect(response.status).to.equal('ok');
				expect(mockRes.value).to.equal('ok');
			});
		});
	});

	describe('dataprovider insertStockList', function() {
		it('shoud return ok if success', function() {
			var dummy = {}
			dataprovider.insertStockList(dummy, function(response) {
				expect(response.status).to.equal('ok');
			});
		});
	});

	describe('dataprovider dropStockAll', function() {
		it('shoud return ok if success', function() {
			dataprovider.dropStockAll(function(response) {
				expect(response.status).to.equal('ok');
			});
		});
	});

	describe('dataprovider getStockList', function() {
		it('shoud return blank array after remove all data', function() {
			dataprovider.dropStockAll(function() {
				dataprovider.getStockList(function(response) {
					expect(response.status).to.equal([]);
				});
			});
		});

		it('shoud return stock array after remove all data and insert', function() {
			dataprovider.dropStockAll(function() {
				var mockRes = function() {
					this.value = "";
					this.send = function(text) {
						this.value = text;
					}
				} 
				dataprovider.importDummyStockData(mockRes, function(response) {
					expect(response.status).to.equal('ok');
					expect(mockRes.value).to.equal('ok');
				});
				dataprovider.getStockList(function(response) {
					expect(response.length).to.equal(6);
					expect(response[0].stockId).to.equal("stock0");
					expect(response[0].stockName).to.equal("NASDAQ");
					expect(response[0].stockValue).to.equal("5682.45");
				});
			});
		});
	});


	describe('dataprovider updateStockList', function() {
		it('shoud return new stock item after update it', function() {
			var newData = {
				stockId: "stock0",
        		stockName: "New Nasdaq Stock",
        		stockValue: "1000",
			};
			dataprovider.updateStockList(newData, function() {
				var mockRes = function() {
					this.value = "";
					this.send = function(text) {
						this.value = text;
					}
				} 

				dataprovider.getStockList(function(response) {
					expect(response[0].stockId).to.equal("stock0");
					expect(response[0].stockName).to.equal("New Nasdaq Stock");
					expect(response[0].stockValue).to.equal("1000");
				});
			});
		});
	});

	describe('dataprovider dropSVGChartAll', function() {
		it('shoud return ok if success', function() {
			dataprovider.dropSVGChartAll(function(response) {
				expect(response.status).to.equal('ok');
			});
		});
	});

	describe('dataprovider getSVGChart', function() {
		it('shoud return blank array after remove all data', function() {
			dataprovider.dropSVGChartAll(function() {
				dataprovider.getSVGChart(function(response) {
					expect(response.status).to.equal({});
				});
			});
		});

		it('shoud return data after remove all data and insert', function() {
			dataprovider.dropSVGChartAll(function() {
				var mockRes = function() {
					this.value = "";
					this.send = function(text) {
						this.value = text;
					}
				} 
				dataprovider.importDummySVGChart(mockRes, function(response) {
					expect(response.status).to.equal('ok');
					expect(mockRes.value).to.equal('ok');
				});
				dataprovider.getSVGChart('stock0', function(response) {
					expect(response.stockId).to.equal("stock0");
					assert.isString(response.title, "Stock NASDAQ title");
        			assert.isString(response.html, "SVG NASDAQ Chart");
				});
			});
			
		});
	});

	describe('dataprovider updateSVGChart', function() {
		it('shoud return new data item after update it', function() {
			var newData = {
				stockId: "stock0",
        		title: "New Item",
			};
			dataprovider.updateSVGChart(newData, function() {
				var mockRes = function() {
					this.value = "";
					this.send = function(text) {
						this.value = text;
					}
				} 

				dataprovider.getSVGChart(newData.stockId, function(response) {
					expect(response.stockId).to.equal("stock0");
					expect(response.title).to.equal("New Item");
				});
			});
		});
	});

});