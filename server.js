const express = require('express')
const bodyParser = require('body-parser');
const app = express()

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("user", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  dbo.createCollection("auction", function(err, res) {
    if (err) throw err;
    console.log("Collection  Created!");
    db.close();
  });
}); 

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
