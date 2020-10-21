const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
        
    },
    puesto: {
        type: String
    },
    telefono: {
        type: String
    }
});

const Empleado = mongoose.model('Empleado',EmpleadoSchema);

module.exports = Empleado;