const QuestionLogin = require('../models/QuestionLogin');
const QuestionsPopup = require('../models/QuestionsPopup');

createQuestionLogin = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar una respuesta',
        })
    }

    const questionlogin = new QuestionLogin(body)

    if (!questionlogin) {
        return res.status(400).json({ success: false, error: err })
    }

    questionlogin
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: questionlogin._id,
                message: 'Respuesta dada!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'No ha respondido!',
            })
        })
}

getQuestionLoginById = async (req, res) => {
    await QuestionLogin.findOne({ _id: req.params.id }, (err, questionlogin) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!questionlogin) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: questionlogin })
    }).catch(err => console.log(err))
}

getQuestionsLogins = async (req, res) => {
    await QuestionLogin.find({}, (err, questionslogin) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!questionslogin.length) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: questionslogin })
    }).catch(err => console.log(err))
}

createQuestionsPopup = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar una respuesta',
        })
    }

    const questionspopup = new QuestionsPopup(body)

    if (!questionspopup) {
        return res.status(400).json({ success: false, error: err })
    }

    questionspopup
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: questionspopup._id,
                message: 'Respuesta dada!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'No ha respondido!',
            })
        })
}

getQuestionPopupById = async (req, res) => {
    await QuestionsPopup.findOne({ _id: req.params.id }, (err, questionspopup) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!questionspopup) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: questionspopup })
    }).catch(err => console.log(err))
}

getQuestionsPopups = async (req, res) => {
    await QuestionsPopup.find({}, (err, questionspopup) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!questionspopup.length) {
            return res
                .status(404)
                .json({ success: false, error: `no encontrado` })
        }
        return res.status(200).json({ success: true, data: questionspopup })
    }).catch(err => console.log(err))
}

module.exports = {
    createQuestionLogin,
    getQuestionsLogins,
    getQuestionLoginById,
    createQuestionsPopup,
    getQuestionsPopups,
    getQuestionPopupById,
}