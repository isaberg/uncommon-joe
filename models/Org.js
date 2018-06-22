const mongoose = require("../db/connection.js")
const bcrypt = require("bcrypt-nodejs")
const Schema = mongoose.Schema

const Org = new Schema({
  local: {
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    orgName: {type: String, required: true, max: 100},
    zipCode: {type: String, required: true, max: 100}
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
})

module.exports = mongoose.model('Org', Org)
