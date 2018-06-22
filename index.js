const express = require('express')
const hbs = require('hbs')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport');
const methodOverride = require("method-override");
const bcrypt = require('bcrypt-nodejs')
const moment = require('moment')

const app = express()

require('./config/passport.js')(passport);

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'hbs')
app.use(methodOverride("_method"))
app.use(
  session({
    secret: 'EXPRESS-IS-AWESOME',
    saveUninitialized: true,
    resave: false
  })
)
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('public'))
app.use(require('./routes/index.js'))

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ Heroku PORT: ${app.get('port')} 🌟`)
})

app.listen(4000, () => {
  console.log('success: index.js of Joe app listening on port 4000')
})
