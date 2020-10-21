'use strict'
const multer = require('multer');
const express = require('express');
const path = require('path');
const App = express();

App.use(express.json());
App.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../images'))
    },
    filename: function (req, file, cb) {
        cb(null,`${file.fieldname}-${Date.now()}.${file.mimetype.split('/')[1]}`);
    }
})


module.exports = storage; 