var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var chaiHttp = require('chai-http');
var service = require('../service');
var should = chai.should();
chai.use(chaiHttp);
// const dataprovider = require('../dbmodel/dataprovider');

describe('test-service', function() {
  describe('/GET stocklist', function() {
    it('should return 200 and array of data', function() {
      chai.request(service)
        .get('/stocklist')
        .end(function(res){
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });


    describe('/POST stock data', function() {
    it('should return 200 and chart data when input in range[0-6]', function() {
      var input = {
        "stockId": 1
      };
      chai.request(service)
        .post('/stockchart')
        .send(input)
        .end(function(res){
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.length.should.be.eql(0);
          done();
        });
      });
    });

    describe('/POST stock data', function() {
    it('should return 404 and chart data when input out of range[0-6]', function() {
      var input = {
        "stockId": 7
      };
      chai.request(service)
        .post('/stockchart')
        .send(input)
        .end(function(res){
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.length.should.be.eql(0);
          done();
        });
      });
    });
  });
});