var express = require('express')
var router = express.Router()

router.use((req, res, next) => {
  res.locals.currentUser = req.user
  next()
})

router.use('/', require('./application.js'))
router.use('/match', require('./match.js'))
router.use('/org', require('./org.js'))
router.use('/user', require('./user.js'))

module.exports = router
