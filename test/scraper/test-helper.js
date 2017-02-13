const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const scraper = require('../../scraper/helper');

describe('test-helper', function() {
  describe('helper scrapeForStockList', function() {
    it('shoud return ok if success', function() {
      var mockReq = {};
      var mockRes = function() {
        this.value = "";
        this.send = function(text) {
          this.value = text;
        }
      } 
      scraper.scrapeForStockList(mockReq, mockRes, function(response) {
        expect(response.status).to.equal('ok');
        expect(mockRes.value).to.equal('ok');
        expect(response.length).to.equal(6);
        expect(response[0].stockId).to.equal("stock0");
        expect(response[0].stockName).to.equal("NASDAQ");
      });
    });
  });

  describe('helper scrapeForNASDAQChart', function() {
    it('shoud return ok if success', function() {
      var mockReq = {};
      var mockRes = function() {
        this.value = "";
        this.send = function(text) {
          this.value = text;
        }
      } 
      scraper.scrapeForNASDAQChart(mockReq, mockRes, function(response) {
        expect(response.status).to.equal('ok');
        expect(mockRes.value).to.equal('ok');
        assert.isString(response.title, "Stock NASDAQ title");
        assert.isString(response.html, "SVG NASDAQ Chart");
      });
    });
  });

  describe('helper scrapeForNASDAQ100Chart', function() {
    it('shoud return ok if success', function() {
      var mockReq = {};
      var mockRes = function() {
        this.value = "";
        this.send = function(text) {
          this.value = text;
        }
      } 
      scraper.scrapeForNASDAQ100Chart(mockReq, mockRes, function(response) {
        expect(response.status).to.equal('ok');
        expect(mockRes.value).to.equal('ok');
        assert.isString(response.title, "Stock NASDAQ-100 title");
        assert.isString(response.html, "SVG NASDAQ-100 Chart");
      });
    });
  });

  describe('helper scrapeForNASDAQPreChart', function() {
    it('shoud return ok if success', function() {
      var mockReq = {};
      var mockRes = function() {
        this.value = "";
        this.send = function(text) {
          this.value = text;
        }
      } 
      scraper.scrapeForNASDAQPreChart(mockReq, mockRes, function(response) {
        expect(response.status).to.equal('ok');
        expect(mockRes.value).to.equal('ok');
        assert.isString(response.title, "Stock NASDAQ-Pre title");
        assert.isString(response.html, "SVG NASDAQ-Pre Chart");
      });
    });
  });

  describe('helper scrapeForNASDAQAfterChart', function() {
    it('shoud return ok if success', function() {
      var mockReq = {};
      var mockRes = function() {
        this.value = "";
        this.send = function(text) {
          this.value = text;
        }
      } 
      scraper.scrapeForNASDAQAfterChart(mockReq, mockRes, function(response) {
        expect(response.status).to.equal('ok');
        expect(mockRes.value).to.equal('ok');
        assert.isString(response.title, "Stock NASDAQ-After title");
        assert.isString(response.html, "SVG NASDAQ-After Chart");
      });
    });
  });

  describe('helper scrapeForDJIAChart', function() {
    it('shoud return ok if success', function() {
      var mockReq = {};
      var mockRes = function() {
        this.value = "";
        this.send = function(text) {
          this.value = text;
        }
      } 
      scraper.scrapeForDJIAChart(mockReq, mockRes, function(response) {
        expect(response.status).to.equal('ok');
        expect(mockRes.value).to.equal('ok');
        assert.isString(response.title, "Stock DJIA title");
        assert.isString(response.html, "SVG DJIA Chart");
      });
    });
  });

  describe('helper scrapeForSP500Chart', function() {
    it('shoud return ok if success', function() {
      var mockReq = {};
      var mockRes = function() {
        this.value = "";
        this.send = function(text) {
          this.value = text;
        }
      } 
      scraper.scrapeForSP500Chart(mockReq, mockRes, function(response) {
        expect(response.status).to.equal('ok');
        expect(mockRes.value).to.equal('ok');
        assert.isString(response.title, "Stock S&P 500 title");
        assert.isString(response.html, "SVG S&P 500 Chart");
      });
    });
  });

  describe('helper scrapeForRussell2000Chart', function() {
    it('shoud return ok if success', function() {
      var mockReq = {};
      var mockRes = function() {
        this.value = "";
        this.send = function(text) {
          this.value = text;
        }
      } 
      scraper.scrapeForRussell2000Chart(mockReq, mockRes, function(response) {
        expect(response.status).to.equal('ok');
        expect(mockRes.value).to.equal('ok');
        assert.isString(response.title, "Stock Russell 2000 title");
        assert.isString(response.html, "SVG Russell 2000 Chart");
      });
    });
  });
});