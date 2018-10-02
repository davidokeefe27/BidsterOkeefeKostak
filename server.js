const express = require('express')
const bodyParser = require('body-parser');
const app = express()

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
