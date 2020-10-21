const Usuario = require ('../models/Usuario');
const bcrypt = require ('bcrypt');
const CONFIG = require ('../config/config');

const jwt = require('jsonwebtoken');

function login(req, res){
    let codigoUsuario = req.body.codigoUsuario;
    let clave = req.body.clave;

    Usuario.findOne({codigoUsuario})
        .then(usuario => {
            if(!usuario) return res.status(404).send({message: 'EL USUARIO NO EXISTE'});
            bcrypt.compare(clave, usuario.clave)
                .then(match => {
                    if(match) {
                        payload = {
                            codigoUsuario: usuario.codigoUsuario,
                            clave: usuario.clave,    
                            name: usuario.name,
                            rol: usuario.rol
                        }
                        jwt.sign(payload, CONFIG.SECRET_TOKEN, function(error, token){
                            if(error){
                                res.status(500).send({error});
                            }else{
                                res.status(200).send({message: 'ACCESO', token});
                            }
                        })

                    }else{
                        return res.status(200).send({message: 'CLAVE INCORRECTA'});
                    }
                    
                }).catch(error => {
                    console.log(error);
                    res.status(500).send({error});
                });
            
        }).catch(error => {
            console.log(error);
            res.status(500).send(error);

        });

}


module.exports = login;