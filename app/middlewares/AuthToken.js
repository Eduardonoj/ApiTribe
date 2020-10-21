const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');
module.exports = function(req, res, next){
    if(!(req.path == 'auth/login'||'/usuario')){
        if(req.headers.authorization){
            let token = req.headers.authorization.split(' ')[1];
            jwt.verify(token, CONFIG.SECRET_TOKEN, function(error, decoded){   // El decoded es el que trae los datos que le mandamos en el token
                if(error) return res.status(403).send({message: 'No tenes permisos para la peticion'});
                if(req.method != 'GET'){
                    if(decoded.rol == 'admin') next();
                    else res.status(403).send({message: 'No tienes permiso para esta peticion'});

                }else{
                    next();
                }
               
            })
            
        }else res.status(403).send({message: 'No estas autorizado para usar Atento Tribe'});
    }else next();
}