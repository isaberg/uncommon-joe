var express = require('express');
var router = express.Router();

const applicationController = require('../controllers/application.js')

router.get('/', applicationController.index)

router.get('/', function (req, res, next) {
  //applicationController.index where do I put this into play?
  res.render('index', { title: 'Uncommon Joe' })
})

module.exports = router
