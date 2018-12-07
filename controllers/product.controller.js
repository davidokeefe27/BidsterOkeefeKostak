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
            category: req.body.category,
            email: req.body.email

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
exports.auction_edit = function (req, res) {
    //  console.log(req.params);
    //  return res.send('YUP');
    // console.log(req.params.title);
    Auction.findByIdAndUpdate(req.params.id, {$set: {offer: req.params.offer}}, {upsert: true}, 
        function (err, auction) {
        if (err) return next(err);
        return res.send('Auction udpated.');
    });
};

exports.auction_delete = function (req, res){
    Auction.findByIdAndRemove(req.params.id, function (err){
        if (err) return next(err);
        res.send('Deleted successful')
    })
};