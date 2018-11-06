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
            description: req.body.description,
            category: req.body.category
        }
    );

    auction.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Auction Created successfully')
    })
};
exports.auction_specific = function (req, res){
    Auction.findById(req.params.id, function(err, auction){
        if (err) return next(err);
        res.send(auction);
    })
}
exports.auction_details = function (req, res) {
    Auction.find(function (err, auction) {

        if (err) return next(err);

        res.send(auction);

    })
};

//update function for bidding
/*exports.auction_update = function (req, res) {
    Auction.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true},
    function (err, auction) {
        if (err) return next(err);
        res.send(auction);
    });
};*/

Auction.findById(id, function (err, auction) {
    if (err) return handleError(err);
  
    auction.size = 'large';
    auction.save(function (err, updatedAuction) {
      if (err) return handleError(err);
      res.send(updatedAuction);
    });
  });