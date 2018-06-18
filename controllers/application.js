// All controller functions should be built in following manner:

// first, define var itemName based on requiring model (Itemname.js)
// that allows controller to reference the data when it runs
// then exports.functionName defined for every HTTP request, each containing function (req,res) {
// /////////this is what happens during the req-res cycle for this particular HTTP request
// }

// alternative: module.exports at the end
//

// var Book = require('../models/book');

// exports.index = function(req, res) {
//    res.send('NOT IMPLEMENTED: Site Home Page');
//};

//TO GET STARTED
// Controller.index must
// res.render('index', { title: 'Uncommon Joe' })

var Match = require('../models/Match.js');
var Message = require('../models/Message.js');
var Org = require('../models/Org.js');
var User = require('../models/User.js');
