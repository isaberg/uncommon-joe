var mongodb = require('mongodb')
const mongoose = require('mongoose')

var mongoDB = process.env.MONGODB_URI || 'mongodb://isaberg:1234qwerQWER@ds263460.mlab.com:63460/joe'
mongoose.connect(mongoDB, err => {
  if (err) {
    console.log(`Not connected to db ${err}`)
  } else {
    console.log('Successfully connected to db')
  }
})
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = mongoose
