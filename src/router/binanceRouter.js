const router = require('express').Router();
const controller = require('../controller/binanceController');

router.get('/getAllP2P', controller.getAllData);
router.get('/getAllTickers', controller.getAllTickersData);

module.exports = router;
