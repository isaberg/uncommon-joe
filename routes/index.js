var express = require('express');
var router = express.Router();

router.use('/', require('./application.js'))
router.use('/match', require('./match.js'))
router.use('/message', require('./message.js'))
router.use('/org', require('./org.js'))
router.use('/user', require('./user.js'))

module.exports = router
