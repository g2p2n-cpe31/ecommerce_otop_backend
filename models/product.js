const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  productDetail: String,
  storeId: String,
  owner: String,
  price: Number,
  rating: Number,
  sell: Number,
  total: Number,
  catagories: String,
  regions: String,
  pic: [String]
}, { timestamps: true, versionKey: false })

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel