const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');
const db = mongoose.connection;

const productSchema = new mongoose.Schema({
  productId: Number,
  imageUrls: [String]
});

const Product = mongoose.model('Product', productSchema);

let deleteAll = (callback) => {
  Product.deleteMany({}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

let save = (obj, callback) => {
  Product.findOneAndUpdate({productId: obj.productId}, {productId: obj.productId, imageUrls: obj.imageUrls}, {upsert: true}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}


let getAll = (callback) => {
  Product.find({}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

let getOne = (productId, callback) => {
  Product.findOneAndUpdate({productId: productId}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}


module.exports = {
  product: Product,
  db: db,
  save: save,
  getAll: getAll,
  getOne: getOne,
  deleteAll: deleteAll
};