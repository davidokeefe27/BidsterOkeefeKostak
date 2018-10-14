var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var auctionSchema = new Schema({
    title: {type:String, required: true},
    offer: {type:Number, required: true},
    description: {type:String, required: true}

});

module.exports = mongoose.model('Auction', auctionSchema);