const express = require('express');
const bodyParser = require('body-parser');
const App = express();
const cors = require('cors');
const path = require('path');

const Empleado = require('./routes/empleado');
const Usuario = require('./routes/usuario');
const Auth = require('./routes/auth');
const Beneficio = require('./routes/beneficio');

const AuthToken = require('./middlewares/AuthToken');
//const Beneficio = require('./models/Beneficio');

//const Empleado = require('./models/Empleado');
App.use(cors());
App.use(AuthToken); //recordar de poner esto que es el middleware antes de las rutas 


//App.use(bodyParser.json());
//App.use(bodyParser.urlencoded({extended: false}));

App.use(express.json());
App.use(express.urlencoded({extended: true}));

App.use('/images', express.static(path.resolve('images')));
App.use('/empleado', Empleado);
App.use('/usuario', Usuario);
App.use('/auth', Auth);
App.use('/beneficio', Beneficio);
App.use('/cargaImg', Beneficio);
App.use('/mostrar', Beneficio);
App.use('/create', Usuario);


module.exports = App;  