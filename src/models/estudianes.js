const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    }, 
    numIdentificacion: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    programaAcademico: {
        type: String,
        required: true
    }


});

module.exports=mongoose.model('Estudiantes',estudianteSchema);