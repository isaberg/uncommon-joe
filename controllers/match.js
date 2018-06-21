var Match = require('../models/Match.js')
var Message = require('../models/Message.js')
var Org = require('../models/Org.js')
var User = require('../models/User.js')
const passport = require('passport')

// GET @/match for index list of all matches
exports.index = function (req, res) {
  res.render('match/index.hbs')
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
