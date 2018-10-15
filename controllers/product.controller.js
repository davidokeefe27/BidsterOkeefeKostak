const Product = require('../models/product.model');
const Auction = require('../models/auction')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};



exports.auction_create = function (req, res) {
    var auction = new Auction(
        {
            title: req.body.title,
            offer: req.body.offer,
            description: req.body.description
        }
    );

    auction.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Auction Created successfully')
    })
};
