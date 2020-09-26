const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const Products = require('../database/index.js');

app.use(bodyParser.json());

app.get('/:productId', function (req, res) {

  Products.getOne(req.params.productId, (err, data) => {
    if(err) {
      console.log('there was an error: ', err);
    } else {
      res.send(data);
      console.log('success! here is the data: ', data);
    }
  });
});

app.get('/', function (req, res) {
  Products.getAll((err, data) => {
    if(err) {
      console.log('there was an error: ', err);
    } else {
      res.send(data);
      console.log('success! here is the data: ', data);
    }
  });
});

app.post('/', function (req, res) {
  Products.save(req.body, (err, data) => {
    if(err) {
      console.log('there was an error: ', err);
    } else {
      res.send(data);
      console.log('success! here is the data: ', data);
    }
  });
});

app.delete('/', function (req, res) {
  Products.deleteAll((err, data) => {
    if(err) {
      console.log('there was an error: ', err);
    } else {
      res.send(data);
      console.log('success! here is the data: ', data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})