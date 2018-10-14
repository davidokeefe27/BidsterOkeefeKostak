const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const product = require('./routes/routes'); // Imports routes for the products


const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds131963.mlab.com:31963/auction';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use('/products', product);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/about', function (req, res) {
  res.render('BidsterAboutPage')
});

app.get('/create', function (req, res) {
  res.render('BidsterCreateAuction')
});

app.get('/auction', function (req, res) {
 res.render('BidsterAuctionPage')
});

app.get('/bidding', function (req, res) {
  res.render('BiddingPage')
 });

 app.get('/myauction', function (req, res) {
  res.render('MyAuctionPage')
 });

 app.get('/account', function (req, res) {
  res.render('AccountPage')
 });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
