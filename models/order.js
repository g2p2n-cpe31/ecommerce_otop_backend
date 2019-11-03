const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  orderId: String,
  storeId: String,
  payBy: String,
  shipOption: String,
  userId: String,
  username: String,
  firstname: String,
  lastname: String,
  phoneNumber: String,
  productId: [String],
  productName: [String],
  amount: [Number],
  price: [Number],
  postScript: [String],
  totalPrice: Number
}, { timestamps: true, versionKey: false })

const OrderModel = mongoose.model('Order', orderSchema)

module.exports = OrderModel