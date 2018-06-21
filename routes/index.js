var express = require('express')
var router = express.Router()

router.use((req, res, next) => {
  res.locals.currentUser = req.user
  next()
})

router.use('/', require('./application.js'))
router.use('/logout', require('./user.js'))
router.use('/match', require('./match.js'))
router.use('/org', require('./org.js'))
router.use('/user', require('./user.js'))

router.get('/secret', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('secret')
  } else {
    res.redirect('/')
  }
})

module.exports = router
