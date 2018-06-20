const express = require('express')
const router = express.Router()
const orgController = require('../controllers/org.js')
// const myController = require('../controllers/myController.js');

router.get('/', orgController.index)
router.get('/create', orgController.new)
router.post('/create', orgController.newPost)
router.get('/delete', orgController.delete)
router.post('/delete', orgController.deletePost)
router.get('/:id', orgController.detail)
// router.typeRequestHTTP('route/path', myController.myFunction);

module.exports = router
