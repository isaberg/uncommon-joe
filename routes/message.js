const express = require('express')
const router = express.Router()
const messageController = require('../controllers/message.js')
// const myController = require('../controllers/myController.js');

router.get('/', messageController.index)
router.get('/create', messageController.new)
router.post('/create', messageController.newPost)
router.get('/delete', messageController.delete)
router.post('/delete', messageController.deletePost)
router.get('/:id', messageController.detail)
// router.typeRequestHTTP('route/path', myController.myFunction);

module.exports = router
