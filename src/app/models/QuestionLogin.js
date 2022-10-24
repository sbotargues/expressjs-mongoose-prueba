const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionLogin = new Schema({
        question: String,
        user:[{ type: Schema.Types.ObjectId, ref: 'User' }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('questionlogin', QuestionLogin)
