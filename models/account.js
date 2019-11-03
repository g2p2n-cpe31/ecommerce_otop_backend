const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  phoneNumber: Number,
  email: String,
  address: String,
  seller: Boolean
}, { timestamps: true, versionKey: false })

const AccountModel = mongoose.model('Account', accountSchema)

module.exports = AccountModel