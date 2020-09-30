const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const Products = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('client/dist'))

app.get('/products/:productId', function (req, res) {
  var productId = req.params.productId;
  Products.getOne(productId, (err, data) => {
    if(err) {
      console.log('there was an error: ', err);
    } else {
      res.json(data);
    }
  });
});

app.get('/server/', function (req, res) {
  Products.getAll((err, data) => {
    if(err) {
      console.log('there was an error: ', err);
    } else {
      res.send(data);
    }
  });
});

app.post('/server/', function (req, res) {
  Products.save(req.body, (err, data) => {
    if(err) {
      console.log('there was an error: ', err);
    } else {
      res.send(data);
    }
  });
});

app.delete('/server/', function (req, res) {
  Products.deleteAll((err, data) => {
    if(err) {
      console.log('there was an error: ', err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})