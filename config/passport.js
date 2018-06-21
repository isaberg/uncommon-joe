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
        firstNameField: 'firstName',
        lastNameField: 'lastName',
        zipField: 'zip',
        passReqToCallback: true
      },
      function (req, email, password, callback) {
        User.findOne({ 'local.email': email })
          .then(user => {
            if (user) {
              return callback(
                null,
                false,
              //   req.flash('signupMessage', 'this email is already taken')
              )
            } else {
              let newUser = new User()
              newUser.local.email = email
              newUser.local.password = newUser.encrypt(password)
              newUser.local.firstName = firstName
              newUser.local.lastName = lastName
              newUser.local.zip = zip

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
            //  req.flash('loginMessage', 'No user found')
            )
          }
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
            //  req.flash('loginMessage', 'Ooops, wrong password')
            )
          }
          return callback(null, user)
        })
      }
    )
  )
}
