//user.js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName: {type: String, required: "Must have a username"},
    phone: {type: int, required: "Must have a phone number"},
    email: {type: String, required: "Must have an email"}

})
