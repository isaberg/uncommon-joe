//require JSON packages, define as variables so they can invoked
const express = require('express')
const app = express()
const hbs = require('hbs')
const bcrypt = require('bcrypt')
const favicon = require('serve-favicon')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

//routes directory imports
var applicationRouter = require('./routes/application.js')
var indexRouter = require('./routes/index.js')
var userRouter = require('./routes/user.js')
var matchRouter = require('./routes/match.js')
var messageRouter = require('./routes/message.js')
var orgRouter = require('./routes/org.js')

//view engine setup
app.set('view engine', 'hbs')


//routes
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('public'))

app.listen(4000, () => {
  console.log("app listening success on port 4000")
})
console.log("Hello world from index.js")
