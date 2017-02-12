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

	
});