const express = require('express');
const EmpleadoCtrl = require('../controllers/EmpleadoController');
const cors = require('cors');

const Router = express.Router();

Router.get('/',EmpleadoCtrl.index) // api.com/product/ Index: Listar todos los productos
      .post('/',EmpleadoCtrl.create)   // api.com/product/ Create: Crear un nuevo producto
      .get('/:key/:value',EmpleadoCtrl.find,EmpleadoCtrl.show)    // api.com/product/category/Hogar Show: Muestra un producto en específico
      .put('/:key/:value',EmpleadoCtrl.find,EmpleadoCtrl.update)    // api.com/product/name/SamsungGalaxy Update: Actualizar un producto en especifico
      .delete('/:key/:value',EmpleadoCtrl.find,EmpleadoCtrl.remove);// api.com/product/name/SamsungGalaxy

module.exports = Router; 