var Nightmare = require('nightmare');

exports.scrapeForStockList = function (req, res) {
    var nightmare = Nightmare({ show: false });
    nightmare
        .goto('http://nasdaq.com')
        .wait(function () {
            if (document.querySelector('#indexvolume a').innerText == 'NASDAQ Composite') {
                return true;
            } else {
                return false;
            }
        })
        .evaluate(function () {
            var numOfStock = 7;
            var outputResult = [];
            var timeStamp = (new Date()).getTime();
            for (var index=0; index<numOfStock; index++) {
                var displayFields = document.querySelector('#indexTableRow'+index).innerText.split('\t');
                outputResult.push({
                    stockId: 'stock'+index,
                    stockName: displayFields[0],
                    stockValue: displayFields[1],
                    netChange: displayFields[2],
                    timeStamp: timeStamp
                });
            }

            return outputResult;
        })
        .end()
        .then(function (result) {
            res.send(result);
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
        });
}

