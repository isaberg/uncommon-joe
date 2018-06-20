const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application.js')

router.get('/', function (req, res, next) {
  res.render('app/index.hbs', { title: 'Uncommon Joe' })
})

module.exports = router
