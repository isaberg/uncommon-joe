// All controller functions should be built in following manner:
// define var itemName based on requiring model (Itemname.js)
// exports.functionName defined for every HTTP request, each containing function (req,res) {

var Match = require('../models/Match.js')
var Message = require('../models/Message.js')
var Org = require('../models/Org.js')
var User = require('../models/User.js')

exports.index = function(req, res) {
  res.render('app/index.hbs')
}
