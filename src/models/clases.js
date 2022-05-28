const mongoose = require('mongoose');

const clasesSchema = new mongoose.Schema({
        id_estudiante: {
        type: mongoose.Schema.ObjectId, 
        ref: "Estudiantes",
        required: true,
    },
    id_asignatura: {
        type: mongoose.Schema.ObjectId, 
        ref: "Asignatura",
        required: true,
    }


});

module.exports=mongoose.model('Clases',clasesSchema);