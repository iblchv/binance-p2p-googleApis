const router = require('express').Router();
const controller = require('../controller/googleController');

router.get('/data/1', controller.getSheetData);
router.get('/updateP2P', controller.writeP2pData);
router.get('/updateTickers', controller.writeTickerData);

module.exports = router;
