const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application.js');

router.get('/', function (req, res, next) {
  res.render('layout', { title: 'Uncommon Joe' })
})

module.exports = router;
