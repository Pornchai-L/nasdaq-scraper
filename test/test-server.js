const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const dataprovider = require('../dbmodel/dataprovider');

describe('test-server', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
      expect([1,2,3].indexOf(4)).to.equal(-1);
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
});