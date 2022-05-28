const mongoose = require('mongoose');

const asignaturasSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    salon: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    id_profesor: {
        type: mongoose.Schema.ObjectId, 
        ref: "Profesores",
        required: true,

    },

});

module.exports = mongoose.model('Asignatura', asignaturasSchema);