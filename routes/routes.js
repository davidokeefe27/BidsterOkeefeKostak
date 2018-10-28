const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
router.post('/createProduct', product_controller.product_create);
router.post('/createAuction', product_controller.auction_create);
router.get('/listAuction', product_controller.auction_details);

//update fuction for bidding
router.put('/bidAuction', product_controller.bid_update);

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

module.exports = router;