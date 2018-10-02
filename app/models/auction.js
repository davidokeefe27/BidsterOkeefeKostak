var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var auctionSchema = new Schema({
    title: {type:String, required: "Must have a title"},
    offer: {type:int, required: "It must have a starting offer"},
    description: {type:String, required: "It must have a description"}

})

