const express = require('express')
const app = express()
const hbs = require('hbs')
const bcrypt = require('bcrypt-nodejs')
const favicon = require('serve-favicon')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const moment = require('moment')
const router = express.Router()

// connected to mongoDB database hosted on mlab

var mongoDB = process.env.MONGODB_URI || 'mongodb://isaberg:1234qwerQWER@ds263460.mlab.com:63460/joe'
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.static('public'))
app.use(require("./routes/index.js"));

app.set('view engine', 'hbs')
app.set('port', process.env.PORT || 4000)

app.listen(4000, () => {
  console.log("success: index.js of Joe app listening on port 4000")
})
