const express = require('express')

const QuestionLoginCtrl = require('../controllers/Questions')

const router = express.Router()

router.post('/', QuestionLoginCtrl.createQuestionLogin)
router.get('/:id', QuestionLoginCtrl.getQuestionLoginById)
router.get('/', QuestionLoginCtrl.getQuestionsLogins)
router.post('/popup/', QuestionLoginCtrl.createQuestionsPopup)
router.get('/popup/:id', QuestionLoginCtrl.getQuestionPopupById)
router.get('/popup/', QuestionLoginCtrl.getQuestionsPopups)

module.exports = router