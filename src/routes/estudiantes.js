const express = require("express");
const router = express.Router();
const estudiantesSchema = require('../models/estudianes');

//create student
router.post("/students", (req, res) => {
    const estudiantes = estudiantesSchema(req.body);
    estudiantes.save().then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//get all students
router.get("/students", (req, res) => {
    estudiantesSchema.find().then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//get a student
router.get("/students/:id", (req, res) => {
    const { params: { id } } = req;
    estudiantesSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//update a student
router.put("/students/:id", (req, res) => {
    const { params: { id } } = req;
    const { nombre, apellido, numIdentificacion, correo, programaAcademico } = req.body;
    estudiantesSchema.updateOne({ _id: id }, { $set: { nombre, apellido, numIdentificacion, correo, programaAcademico } }).then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//delete a student
router.delete("/students/:id", (req, res) => {
    const { params: { id } } = req;
    estudiantesSchema.remove({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

module.exports = router;