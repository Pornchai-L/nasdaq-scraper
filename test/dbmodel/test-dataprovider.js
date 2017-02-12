const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const dataprovider = require('../dbmodel/dataprovider');

describe('Test dataprovider module', function() {
  describe('dataprovider insertStockList', function() {
      it('shoud return ok if success', function() {
        var dummy = {}
        dataprovider.insertStockList(dummy, function(response) {
            expect(response.status).to.equal('ok');
        });
      });
  });
});