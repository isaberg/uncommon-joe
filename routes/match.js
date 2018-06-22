const express = require('express')
const router = express.Router()
const matchController = require('../controllers/match.js')
// const myController = require('../controllers/myController.js');

router.get('/', matchController.index)
router.post('/', matchController.matchPOST)
router.get('/create', matchController.new)
router.post('/create', matchController.newPost)
router.get('/delete', matchController.delete)
router.post('/delete', matchController.deletePost)
router.get('/:id', matchController.detail)

module.exports = router
