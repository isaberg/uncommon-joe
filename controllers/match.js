var Match = require('../models/Match.js')
var Org = require('../models/Org.js')
var User = require('../models/User.js')
const passport = require('passport')

// GET @/match for index list of all matches
// THIS IS MY MATCH INDEX PAGE WITH BUTTON
// IF I POST @/MATCH... I WANT TO GENERATE A NEW MATCH AND REDIRECT TO THE SAME /MATCH PAGE, IN ONE VIEW
// DISPLAY OF MATCH CARDS WITH MESSAGE FUNCTIONS IS CONDITIONED ON USER LOGIN
exports.index = function (req, res) {
  /*User.findOne({ _id: req.params.id })
    .populate({
      path: 'matches',
      options: { limit: 5, sort: { createdAt: -1 } }
    })
    .then(user => {*/
      res.render('match/index.hbs', { match })
    }//)
}

// POST @/match/index to drive match creation, followed by redirect to /match/index
exports.matchPost = function (req, res) {

  /* // example tweet creation
    Tweet.create({
      content: req.body.tweet.content,
      author: req.user._id
    }).then(tweet => {
      req.user.tweets.push(tweet);
      req.user.save(err => {
        res.redirect(`/tweet/${tweet._id}`);
      });
    });
  */ // example tweet creation function end
  res.render('/')
}

// PUT @/match/index/id to add messages, followed by redirect to /match/index
exports.matchUpdate = function (req, res) {
  /* EXAMPLE TWEET UPDATE TO ADD COMMENTS
  {
    let { content } = req.body;
    Tweet.findOne({ _id: req.params.id }).then(tweet => {
      tweet.comments.push({
        content,
        author: req.user._id
      });
      tweet.save(err => {
        res.redirect(`/tweet/${tweet._id}`);
      });
    });
  }
  */ // END OF EXAMPLE TWEET UPDATE ADD COMMENTS
  res.render('/')
}

exports.requireAuth = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/')
  }
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
