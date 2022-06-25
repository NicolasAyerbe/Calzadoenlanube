const express= require('express');
const controladorAgregar = require('../controlers/controler_agregar');
const rutaagregar= express.Router();

rutaagregar.get("/agregar",controladorAgregar.mostrarobjeto);

rutaagregar.get("/agregarColor",controladorAgregar.mostrarcolor);

rutaagregar.get("/agregrarPuntos",controladorAgregar.mostrarpuntos);

module.exports=rutaagregar;