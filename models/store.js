const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema({
  name: String,
  detail: String,
  location: String,
  phoneNumber: String,
  email: String,
  inviteCode: String,
  ownerId: [String],
  partnerId: [String],
  partnerWaitId: [String],
  productId: [String]
}, { timestamps: true, versionKey: false })

const StoreModel = mongoose.model('Store', storeSchema)

module.exports = StoreModel