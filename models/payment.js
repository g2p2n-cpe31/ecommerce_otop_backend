const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = new Schema({
  orderId: String,
  payBy: String,
  shipOption: String,
  shippingProvince: [String],
  shippingCountry: [String],
  shippingDistrict: [String],
  shippingPostalNumber: [String],
  shippingAddress: [String]
}, { timestamps: true, versionKey: false })

const PaymentModel = mongoose.model('Payment', paymentSchema)

module.exports = PaymentModel