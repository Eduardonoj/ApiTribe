const express = require('express');
const UsuarioCtrl = require('../controllers/UsuarioController');
const Usuario = require('../models/Usuario');
const Router = express.Router();
Router.get('/',UsuarioCtrl.index)
 // api.com/product/ Index: Listar todos los productos
      .post('/',UsuarioCtrl.create)   // api.com/product/ Create: Crear un nuevo producto
      .get('/:key/:value',UsuarioCtrl.find,UsuarioCtrl.show)    // api.com/product/category/Hogar Show: Muestra un producto en específico
      .put('/:key/:value',UsuarioCtrl.find,UsuarioCtrl.update)    // api.com/product/name/SamsungGalaxy Update: Actualizar un producto en especifico
      .delete('/:key/:value',UsuarioCtrl.find,UsuarioCtrl.remove);// api.com/product/name/SamsungGalaxy

      


    
module.exports = Router;