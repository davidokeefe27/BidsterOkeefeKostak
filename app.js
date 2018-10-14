//app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/routes'); // Imports routes for the products
const app = express();

app.use('/products', product);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', function (req, res) {
  res.render('BidsterAboutPage')
})

app.get('/create', function (req, res) {
  res.render('BidsterCreateAuction')
})

app.get('/auction', function (req, res) {
 res.render('BidsterAuctionPage')
})

app.get('/bidding', function (req, res) {
  res.render('BiddingPage')
 })

 app.get('/myauction', function (req, res) {
  res.render('MyAuctionPage')
 })

 app.get('/account', function (req, res) {
  res.render('AccountPage')
 })

var port = 1234;


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});