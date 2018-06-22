var Match = require('../models/Match.js')
var Org = require('../models/Org.js')
var User = require('../models/User.js')
const passport = require('passport')

// GET @/match for index list of all matches
// THIS IS MY MATCH INDEX PAGE WITH BUTTON
// IF I POST @/MATCH... I WANT TO GENERATE A NEW MATCH AND REDIRECT TO THE SAME /MATCH PAGE, IN ONE VIEW
// DISPLAY OF MATCH CARDS WITH MESSAGE FUNCTIONS IS CONDITIONED ON USER LOGIN
exports.index = function (req, res) {
  User.findOne({email: currentUser.local.email})
    .populate({
      path: 'matches',
      options: { limit: 5, sort: { createdAt: -1 } }
    })
    .then(user => {
      res.render('match/index.hbs', { match })
    })
}

exports.matchPOST = function (req, res) {

}

// GET @/match/new for form to request match
exports.new = function (req, res) {
  res.send('NOT IMPLEMENTED: generate form to request match')
}

// POST @/match/new to post new match request
exports.newPost = function (req, res) {
  res.send('NOT IMPLEMENTED: post / submit new item')
}

// GET @/match/delete to request delete form
exports.delete = function (req, res) {
  res.send('NOT IMPLEMENTED: request deletion form')
}

// POST @/match/delete form to delete
exports.deletePost = function (req, res) {
  res.send('NOT IMPLEMENTED: submit/post form to delete')
}

// GET @/match/:id to request match details
exports.detail = function (req, res) {
  res.send('NOT IMPLEMENTED: display match by id')
}
