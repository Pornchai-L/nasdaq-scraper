var express = require('express');
var server = express();
var scraper = require('../scraper/helper');
var router = express.Router();
 
router.get('/scrapestocklist', scraper.scrapeForStockList);
router.get('/scrapenasdaqchart', scraper.scrapeForNASDAQChart);
router.get('/scrapenasdaq100chart', scraper.scrapeForNASDAQ100Chart);
router.get('/scrapepremarketchart', scraper.scrapeForNASDAQPreChart);
router.get('/scrapeaftermarketchart', scraper.scrapeForNASDAQAfterChart);
router.get('/scrapedjiachart', scraper.scrapeForDJIAChart);
router.get('/scrapesp500chart', scraper.scrapeForSP500Chart);
router.get('/scraperussell2000chart', scraper.scrapeForRussell2000Chart);

module.exports = router;