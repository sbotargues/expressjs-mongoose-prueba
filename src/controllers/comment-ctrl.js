const comment = require('../models/comment')

createcomment = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar un político',
        })
    }

    const comment = new comment(body)

    if (!comment) {
        return res.status(400).json({ success: false, error: err })
    }

    comment
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: comment._id,
                message: 'Político creado!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Político no creado!',
            })
        })
}

updatecomment = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debe proporcionar un body para actualizar',
        })
    }

    comment.findOne({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Político no encontrado!',
            })
        }
        console.log("hola")
        comment.nombre = body.nombre
        comment.apellidos = body.apellidos
        comment.salarioAnual = body.salarioAnual
        comment.partido = body.partido
        comment
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: comment._id,
                    message: 'Político actualizado!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Político no actualizado!',
                })
            })
    })
}

deletecomment = async (req, res) => {
    await comment.findOneAndDelete({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!comment) {
            return res
                .status(404)
                .json({ success: false, error: `Político no encontrado` })
        }

        return res.status(200).json({ success: true, data: comment })
    }).catch(err => console.log(err))
}

getcommentById = async (req, res) => {
    await comment.findOne({ _id: req.params.id }, (err, comment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!comment) {
            return res
                .status(404)
                .json({ success: false, error: `Político no encontrado` })
        }
        return res.status(200).json({ success: true, data: comment })
    }).catch(err => console.log(err))
}

getcomments = async (req, res) => {
    await comment.find({}, (err, comments) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!comments.length) {
            return res
                .status(404)
                .json({ success: false, error: `Político no encontrado` })
        }
        return res.status(200).json({ success: true, data: comments })
    }).catch(err => console.log(err))
}

module.exports = {
    createcomment,
    updatecomment,
    deletecomment,
    getcomments,
    getcommentById,
}