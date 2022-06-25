const express= require('express');
const controladorAgregar = require('../controlers/controler_eliminar');
const rutaagregar= express.Router();

rutaagregar.get("/eliminarColor",controladorAgregar.mostrarcolor);

rutaagregar.get("/eliminarProductos",controladorAgregar.mostrarproducto);

rutaagregar.get("/eliminarPuntos",controladorAgregar.mostrarpunto);




module.exports=rutaagregar;