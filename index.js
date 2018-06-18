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

//routes required (later will be used by Express)
var indexRouter = require('./routes/index.js')
var matchRouter = require('./routes/match.js')
var messageRouter = require('./routes/message.js')
var orgRouter = require('./routes/org.js')
var userRouter = require('./routes/user.js')


// do the rest of the models

app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use('/', indexRouter)
app.use('/match', matchRouter)
app.use('/message', messageRouter)
app.use('/org', orgRouter)
app.use('/user', userRouter)

app.set('port', process.env.PORT || 4000)

app.listen(4000, () => {
  console.log("success: app listening on port 4000")
})

console.log('Hello world from index.js')
