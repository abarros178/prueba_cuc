const mongoose = require('mongoose');

const profesoresSchema = mongoose.Schema({
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
        type: Number,
        required: true
    }


});

module.exports=mongoose.model('Profesores',profesoresSchema);