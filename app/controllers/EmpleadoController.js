//const express = require('../models/Empleado');
const Empleado = require('../models/Empleado');


function index(req, res){
    Empleado.find({})
    .then(empleados => {
        if(empleados.length) return res.status(200).send({empleados});
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(error => res.status(500).send({error}));

}

function show(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.empleados) return res.status(404).send({message: 'NOT FOUND'});
    let empleados = req.body.empleados;
    return res.status(200).send({empleados});

}

function create(req, res){
    new Empleado(req.body).save().then(empleado => res.status(201).send({empleado})).catch(error => res.status(500).send({error}));

}

function update(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.empleados) return res.status(404).send({message: 'NOT FOUND'});
    let empleado = req.body.empleados[0];
    empleado = Object.assign(empleado, req.body);
    empleado.save().then(empleado => res.status(200).send({message: "UPDATED", empleado})).catch(error => res.status(500).send({error}));

}

function remove(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.empleados) return res.status(404).send({message: 'NOT FOUND'});
    req.body.empleados[0].remove().then(empleado => res.status(200).send({message: 'REMOVED', empleado})).catch(error => res.status(500).send({error}));

}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value;
    Empleado.find(query).then(empleados => {
        if(!empleados.length) return next();
        req.body.empleados = empleados;
        return nex();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index, 
    show,
    create,
    update,
    remove,
    find
}