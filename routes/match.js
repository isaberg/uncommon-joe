const express = require('express')
const router = express.Router()
const matchController = require('../controllers/match.js')
// const myController = require('../controllers/myController.js');

//implemented
router.get('/', matchController.requireAuth, matchController.index)
router.post('/index', matchController.requireAuth, matchController.matchPost)
router.put('/:id', matchController.requireAuth, matchController.matchUpdate)

//no functionality implemented yet
router.get('/create', matchController.new)
router.post('/create', matchController.newPost)
router.get('/delete', matchController.delete)
router.post('/delete', matchController.deletePost)
router.get('/:id', matchController.detail)

module.exports = router
