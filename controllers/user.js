var Match = require('../models/Match.js')
var Org = require('../models/Org.js')
var User = require('../models/User.js')
const passport = require('passport')

// GET @/user for index list of all
exports.index = function (req, res) {
  res.render('user/index.hbs')
}

// GET @/user/login for form to request new form
exports.newLog = function (req, res) {
  res.render('user/login.hbs', { message: req.flash('loginMessage') })
}

// POST @/user/login to login existing user
exports.postLog = function (req, res) {
  const login = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
  })
  return login(req, res)
}

// GET @/user/signup for form to request new form
exports.newSign = function (req, res) {
  res.render('user/signup.hbs', { message: req.flash('signupMessage') })
}

// POST @/user/signup to create new user
exports.postSign = function (req, res) {
  const signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
}

// GET @/user/delete to request delete form
exports.delete = function (req, res) {
  res.send('NOT IMPLEMENTED: request delete form')
}

// POST @/user/delete submit/post form to delete
exports.deletePost = function (req, res) {
  res.send('NOT IMPLEMENTED: submit/post form to delete')
}

// GET @/user/:id to display individual user info (user logged in root)
exports.detail = function (req, res) {
  User.findOne({ _id: req.params.id })
    .populate('firstName')
    .then(user => {
      res.render('user/detail.hbs', { user })
    })
}

exports.logout = function (req, res) {
  req.logout()
  res.redirect('/')
}
