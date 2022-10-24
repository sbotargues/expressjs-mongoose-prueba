const express = require('express')

const PoliticianCtrl = require('../controllers/comment-ctrl')

const router = express.Router()

router.post('/', PoliticianCtrl.createPolitician)
router.put('/:id', PoliticianCtrl.updatePolitician)
router.delete('/:id', PoliticianCtrl.deletePolitician)
router.get('/:id', PoliticianCtrl.getPoliticianById)
router.get('/', PoliticianCtrl.getPoliticians)

module.exports = router