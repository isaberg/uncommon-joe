var Match = require('../models/Match.js')
var Org = require('../models/Org.js')
var User = require('../models/User.js')
const passport = require('passport')

// GET @/org for index list of all
exports.index = function (req, res) {
  Tweet.find({})
    .sort({ createdAt: -1 })
    .limit(10)
    .populate("author")
    .then(tweets => {
      res.render("app/index", { tweets });
    });
}

// GET @/org/new for form to request new form
exports.new = function (req, res) {
  res.send('NOT IMPLEMENTED: generate form to create')
}

// POST @/org/new to post new request
exports.newPost = function (req, res) {
  res.send('NOT IMPLEMENTED: submit and post/create')
}

// GET @/org/delete to request delete form
exports.delete = function (req, res) {
  res.send('NOT IMPLEMENTED: request delete form')
}

// POST @/org/delete submit/post form to delete
exports.deletePost = function (req, res) {
  res.send('NOT IMPLEMENTED: submit/post form to delete')
}

// GET @/org/:id to request individual item detail by id
exports.detail = function (req,res) {
  res.send('NOT IMPLEMENTED: request individual item detail by id')
}
