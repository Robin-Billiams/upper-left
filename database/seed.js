const database  = require('./index.js');
const SRC_URL = 'https://hrr48madisonfecbrazil.s3-sa-east-1.amazonaws.com/';
const AWS = require('aws-sdk');
let sampleProducts = [];
let sampleImages = [];

const NUMBER_OF_DIFFERENT_PRODUCTS = 5;
const NUMBER_OF_PHOTOS_PER_PRODUCT = 10;

for (var i = 0; i < NUMBER_OF_DIFFERENT_PRODUCTS; i++) {
  sampleImages[i] = [];

  for (var j = 0; j < NUMBER_OF_PHOTOS_PER_PRODUCT; j++) {
    sampleImages[i].push(SRC_URL + String(10 * i + j) + '.jpg');
  }
}

for (var i = 0; i < 100; i++) {
  sampleProducts.push( {
    productId: i,
    imageUrls: sampleImages[i % NUMBER_OF_DIFFERENT_PRODUCTS]
  });
}


const insertSampleImages = function() {
  database.product.create(sampleProducts)
    .then(() => {
      database.db.close();
    })
    .catch((error) => { console.log('there was an error seeding the database: ', error); });
};

insertSampleImages();