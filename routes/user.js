const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')
// const myController = require('../controllers/myController.js');

router.get('/', userController.index)
router.get('/create', userController.new)
router.post('/create', userController.newPost)
router.get('/delete', userController.delete)
router.post('/delete', userController.deletePost)
router.get('/:id', userController.detail)
// router.typeRequestHTTP('route/path', myController.myFunction);

module.exports = router
