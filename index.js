const express = require('express')
const app = express()
const hbs = require('hbs')
const bcrypt = require('bcrypt-nodejs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session')
const moment = require('moment')
const router = express.Router()
// passport setup
const passport = require('passport')
require('./config/passport.js')(passport)
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
)

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use(express.static('public'))
app.use(require('./routes/index.js'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'hbs')

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ Heroku PORT: ${app.get('port')} 🌟`)
})

app.listen(4000, () => {
  console.log('success: index.js of Joe app listening on port 4000')
})
