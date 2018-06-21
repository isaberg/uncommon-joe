const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application.js')

router.use((req, res, next) => {
  res.locals.currentUser = req.user
  next()
})

router.get('/', function (req, res, next) {
  res.render('app/index.hbs', { title: 'Uncommon Joe' })
})

module.exports = router
