var Nightmare = require('nightmare');

exports.scrapeForStockList = function (req, res, callback) {
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
            callback({ status:'ok', data: result });
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
            callback({ status:'error', data: [] });
        });
}

exports.scrapeForNASDAQChart = function (req, res, callback) {
    var nightmare = Nightmare({ show: false });
    nightmare.goto('http://nasdaq.com');
    nightmare.click('#indexTableRow0')
        .wait(function () {
            if (document.querySelector('#indexvolume a').innerText == 'NASDAQ Composite') {
                return true;
            } else {
                return false;
            }
        })
        .evaluate(function () {
            return { title: document.querySelector('#indexvolume a').innerText,
                     html: document.querySelector('#charteriffic').innerHTML };
        })
        .end()
        .then(function (result) {
            res.send(result);
            callback({ status:'ok', data: result });
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
            callback({ status:'error', data: [] });
        });
};

exports.scrapeForNASDAQ100Chart = function (req, res, callback) {
    var nightmare = Nightmare({ show: false });
    nightmare.goto('http://nasdaq.com');
    nightmare.click('#indexTableRow1')
        .wait(function () {
            if (document.querySelector('#indexvolume a').innerText == 'NASDAQ-100 Index' &&
                document.querySelector('#charteriffic').getAttribute('data-highcharts-chart') != 3) {
                return true;
            } else {
                return false;
            }
        })
        .evaluate(function () {
            return { title: document.querySelector('#indexvolume a').innerText,
                     html: document.querySelector('#charteriffic').innerHTML };
        })
        .end()
        .then(function (result) {
            res.send(result);
            callback({ status:'ok', data: result });
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
            callback({ status:'error', data: [] });
        });
};

exports.scrapeForNASDAQPreChart = function (req, res, callback) {
    var nightmare = Nightmare({ show: false });
    nightmare.goto('http://nasdaq.com');
    nightmare.click('#indexTableRow2')
        .wait(function () {
            if (document.querySelector('#indexvolume a').innerText == 'NASDAQ-100 Pre-Market Indicator' &&
                document.querySelector('#charteriffic').getAttribute('data-highcharts-chart') != 3) {
                return true;
            } else {
                return false;
            }
        })
        .evaluate(function () {
            return { title: document.querySelector('#indexvolume a').innerText,
                     html: document.querySelector('#charteriffic').innerHTML };
        })
        .end()
        .then(function (result) {
            res.send(result);
            callback({ status:'ok', data: result });
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
        });
};

exports.scrapeForNASDAQAfterChart = function (req, res, callback) {
    var nightmare = Nightmare({ show: false });
    nightmare.goto('http://nasdaq.com');
    nightmare.click('#indexTableRow3')
        .wait(function () {
            if (document.querySelector('#indexvolume a').innerText == 'NASDAQ-100 After Hours Indicator' &&
                document.querySelector('#charteriffic').getAttribute('data-highcharts-chart') != 3) {
                return true;
            } else {
                return false;
            }
        })
        .evaluate(function () {
            return { title: document.querySelector('#indexvolume a').innerText,
                     html: document.querySelector('#charteriffic').innerHTML };
        })
        .end()
        .then(function (result) {
            res.send(result);
            callback({ status:'ok', data: result });
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
            callback({ status:'error', data: [] });
        });
};

exports.scrapeForDJIAChart = function (req, res, callback) {
    var nightmare = Nightmare({ show: false });
    nightmare.goto('http://nasdaq.com');
    nightmare.click('#indexTableRow4')
        .wait(function () {
            if (document.querySelector('#indexvolume a').innerText == 'Dow Jones Industrial Index' &&
                document.querySelector('#charteriffic').getAttribute('data-highcharts-chart') != 3) {
                return true;
            } else {
                return false;
            }
        })
        .evaluate(function () {
            return { title: document.querySelector('#indexvolume a').innerText,
                     html: document.querySelector('#charteriffic').innerHTML };
        })
        .end()
        .then(function (result) {
            res.send(result);
            callback({ status:'ok', data: result });
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
            callback({ status:'error', data: [] });
        });
};

exports.scrapeForSP500Chart = function (req, res, callback) {
    var nightmare = Nightmare({ show: false });
    nightmare.goto('http://nasdaq.com');
    nightmare.click('#indexTableRow5')
        .wait(function () {
            if (document.querySelector('#indexvolume a').innerText == 'S&P 500 Index' &&
                document.querySelector('#charteriffic').getAttribute('data-highcharts-chart') != 3) {
                return true;
            } else {
                return false;
            }
        })
        .evaluate(function () {
            return { title: document.querySelector('#indexvolume a').innerText,
                     html: document.querySelector('#charteriffic').innerHTML };
        })
        .end()
        .then(function (result) {
            res.send(result);
            callback({ status:'ok', data: result });
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
            callback({ status:'error', data: [] });
        });
};

exports.scrapeForRussell2000Chart = function (req, res, callback) {
    var nightmare = Nightmare({ show: false });
    nightmare.goto('http://nasdaq.com');
    nightmare.click('#indexTableRow6')
        .wait(function () {
            if (document.querySelector('#indexvolume a').innerText == 'Russell 2000 Index' &&
                document.querySelector('#charteriffic').getAttribute('data-highcharts-chart') != 3) {
                return true;
            } else {
                return false;
            }
        })
        .evaluate(function () {
            return { title: document.querySelector('#indexvolume a').innerText,
                     html: document.querySelector('#charteriffic').innerHTML };
        })
        .end()
        .then(function (result) {
            res.send(result);
            callback({ status:'ok', data: result });
        })
        .catch(function (error) {
            res.status(404).send('Bad Request : '+error);
            callback({ status:'error', data: [] });
        });
};

