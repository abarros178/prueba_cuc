const express = require("express");
const router = express.Router();
const asignaturasSchema = require('../models/asignaturas');

//create subjects
router.post("/subjects", (req, res) => {
    const asignaturas = asignaturasSchema(req.body);
    asignaturas.save().then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//get all subjects
router.get("/subjects", (req, res) => {
    asignaturasSchema.find().then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//get a subject
router.get("/subjects/:id", (req, res) => {
    const { params: { id } } = req;
    asignaturasSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//update a subject
router.put("/subjects/:id", (req, res) => {
    const { params: { id } } = req;
    const {nombre,salon,horario,id_profesor} = req.body;
    console.log(id)
    asignaturasSchema.updateOne({ _id: id }, { $set: { nombre, salon, horario, id_profesor} }).then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//delete a subject
router.delete("/subjects/:id", (req, res) => {
    const { params: { id } } = req;
    asignaturasSchema.remove({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

module.exports = router;