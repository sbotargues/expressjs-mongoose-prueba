const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comment = new Schema(
    {
        nombre: { type: String, required: true },
        apellidos: { type: String, required: true },
        partido: { type: [String], required: false },
        salarioAnual: { type: Number, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('comments', comment)
