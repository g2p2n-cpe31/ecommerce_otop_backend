const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
  userId: String,
  username: String,
  productId: [String],
  productName: [String],
  productDetail: [String],
  storeId: [String],
  storeName: [String],
  amount: [Number],
  price: [Number],
  postScript: [String],
  totalPrice: Number
}, { timestamps: true, versionKey: false })

const CartModel = mongoose.model('Cart', cartSchema)

module.exports = CartModel