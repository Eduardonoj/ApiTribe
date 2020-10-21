const Beneficio = require('../models/Beneficio');
const storage = require('../config/multer');
const multer = require('multer');



async function show (req, res) {
    const beneficios = await Beneficio.find()
    res.json(beneficios)
}


module.exports = {
    show
}