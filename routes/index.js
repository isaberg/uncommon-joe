var express = require('express')
var router = express.Router()
const userController = require('../controllers/user.js')

router.use('/', require('./application.js'))
router.use('/match', require('./match.js'))
router.use('/org', require('./org.js'))
router.use('/user', require('./user.js'))
router.get('/logout', userController.logout)

router.get('/secret', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('secret')
  } else {
    res.redirect('/')
  }
})

module.exports = router
