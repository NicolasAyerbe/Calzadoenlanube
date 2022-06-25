const express= require('express');
const controladorIndex = require('../controlers/controler_index');
const rutaindex= express.Router();

rutaindex.get("/",controladorIndex.mostrarLogin);

module.exports=rutaindex;