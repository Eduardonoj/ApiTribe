const mongoose = require('mongoose');


const BeneficioSchema = new mongoose.Schema({
    nombre: {
        type: String
    },

    url:{
        type: String
    },
    descripcion:{
        type: String
    },
    categoria:{
        type: String,
        default: 'Bancos',
        enum: [
            'Restaurantes',
            'Bancos',
            'Accesorios',
            'Super Mercados'

        ]

    },
    fechaInicio:{
        type: Date
    },
    fechaFin:{
        type: Date
    },
    fechaCreado:{
        type: Date,
        default: Date.now
    }

   
});

const Beneficio = mongoose.model('Beneficio', BeneficioSchema);

module.exports = Beneficio;