const mongoose = require("../db/connection.js")
const bcrypt = require("bcrypt-nodejs")
const Schema = mongoose.Schema

const User = new Schema({
  local: {
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    zip: {type: String, required: true, max: 10}
  },
  matches: [
    {
      type: Schema.Types.ObjectId,
      ref: "Match"
    }
  ]
})

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model("User", User)
