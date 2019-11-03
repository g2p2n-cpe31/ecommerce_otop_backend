const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  phoneNumber: String,
  email: String,
  address: String,
  shippingName: [String],
  shippingPhoneNumber: [String],
  shippingProvince: [String],
  shippingCountry: [String],
  shippingDistrict: [String],
  shippingPostalNumber: [String],
  shippingAddress: [String],
  shippingInUse: Number,
  cardName: [String],
  cardNumber: [String],
  cardExpireDate: [String],
  cardCvv: [String],
  cardBank: [String],
  cardSym: [String],
  store: [String]
}, { timestamps: true, versionKey: false })

const AccountModel = mongoose.model('Account', accountSchema)

module.exports = AccountModel