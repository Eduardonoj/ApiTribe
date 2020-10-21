const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    codigoUsuario:{
        type: String,
        unique: true,
        required: true
    },
    clave:{
        type: String,
        unique: true,
        required: true
    },
    rol:{
        type: String,
        default: 'regular',
        enum: [
            'regular',
            'admin'
        ]

    }

   
});

//Metodo utilizado para encriptamos la clave
UsuarioSchema.pre('save', function (next){
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.clave, salts).then(hash => {
        this.clave = hash;
        next();
    }).catch(error => next(error));
    }).catch(error => next(error));
});

const Usuario = mongoose.model('Usuario',UsuarioSchema);

module.exports = Usuario;