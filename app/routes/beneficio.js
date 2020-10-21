const express = require('express');
const BeneficioCtrl = require('../controllers/BeneficioController');
const storage = require('../config/multer');
const multer = require('multer');
const Beneficio = require('../models/Beneficio');
//const storage = require('../config/multer');

const Router = express.Router();


const Archivo = multer({         
    storage
}).single('file');

 Router.post('/cargarImg', Archivo, async (req, res)=>{
        const {body, file} = req
        if(file && body){
            const newBeneficio = new Beneficio({
                nombre : body.nombre,
                url: `http://localhost:4200/${file.filename}`,
                descripcion: body.descripcion,
                categoria: body.categoria,
                fechaInicio: body.fechaInicio,
                fechaFin: body.fechaFin
            })
            await newBeneficio.save();
            res.json({})
        }
    } );

    Router.get ('/mostrar', async (req, res) =>{
        const images = await Beneficio.find();
        res.json(images)
    })

    Router.get ('/ver', async (req, res) =>{
        const images = await Beneficio.find();
        res.json(images)
    })



module.exports = Router;