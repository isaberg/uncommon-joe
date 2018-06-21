const mongoose = require('../db/connection.js')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const Message = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Match = new Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  messages: [Message]
})

module.exports = {
  Message: mongoose.model('Message', Message),
  Match: mongoose.model('Match', Match)
}
