var Match = require('../models/Match.js')
var Message = require('../models/Message.js')
var Org = require('../models/Org.js')
var User = require('../models/User.js')


// GET @/user for index list of all
exports.index = function (req, res) {
  res.send('NOT IMPLEMENTED: generate index page')
}

// GET @/user/new for form to request new form
exports.new = function (req, res) {
  res.send('NOT IMPLEMENTED: generate form to create')
}

// POST @/user/new to post new request
exports.newPost = function (req, res) {
  res.send('NOT IMPLEMENTED: submit and post/create')
}

// GET @/user/delete to request delete form
exports.delete = function (req, res) {
  res.send('NOT IMPLEMENTED: request delete form')
}

// POST @/user/delete submit/post form to delete
exports.deletePost = function (req, res) {
  res.send('NOT IMPLEMENTED: submit/post form to delete')
}

// GET @/user/:id to request individual item detail by id
exports.detail = function (req, res) {
  res.send('NOT IMPLEMENTED: request individual item detail by id')
}
