const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User.js')

module.exports = function (passport) {
  passport.serializeUser(function (user, callback) {
    callback(null, user.id)
  })

  passport.deserializeUser(function (id, callback) {
    User.findById(id, function (err, user) {
      callback(err, user)
    })
  })

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, email, password, callback) {
        User.findOne({ 'local.email': email })
          .then(user => {
            if (user) {
              console.log('duplicate email found!')
              return callback(
                null,
                false,
                req.flash('signinMessage', 'this email is already taken')
              )
            } else {
              console.log('USER IS UNIQUE, creating new user')
              let newUser = User.create({
                email: email,
                password: password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                zip: req.body.zip
              })
              newUser.save(err => {
                if (err) throw err
                return callback(null, newUser)
              })
            }
          })
          .catch(err => console.log(err))
      }
    )
  )
  passport.use(
    'local-login',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, email, password, callback) {
        User.findOne({ 'local.email': email }, function (err, user) {
          if (err) return callback(err)

          if (!user) {
            return callback(
              null,
              false,
              req.flash('loginMessage', 'No user found')
            )
          }
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash('loginMessage', 'Ooops, wrong password')
            )
          }
          return callback(null, user)
        })
      }
    )
  )
}
