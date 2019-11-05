const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
  userId: String,
  username: String,
  store: [{
    storeId: String,
    storeName: String,
    product: [{
      productId: String,
      productName: String,
      productDetail: String,
      amount: Number,
      price: Number,
      postScript: String
    }]
  }],
  totalPrice: Number
}, { timestamps: true, versionKey: false })

const CartModel = mongoose.model('Cart', cartSchema)

module.exports = CartModel