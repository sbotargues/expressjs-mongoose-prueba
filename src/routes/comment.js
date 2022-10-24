const express = require('express')

const commentCtrl = require('../controllers/comment-ctrl')

const router = express.Router()

router.post('/', commentCtrl.createcomment)
router.put('/:id', commentCtrl.updatecomment)
router.delete('/:id', commentCtrl.deletecomment)
router.get('/:id', commentCtrl.getcommentById)
router.get('/', commentCtrl.getcomments)

module.exports = router