const mongoose = require('mongoose');

const profesoresSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }, 
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }


});

module.exports=mongoose.model('Profesores',profesoresSchema);