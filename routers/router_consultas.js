const express= require('express');
const controladorAgregar = require('../controlers/controler_consultas');
const rutaagregar= express.Router();

rutaagregar.get("/colores",controladorAgregar.mostrarcolor);

rutaagregar.get("/comprar",controladorAgregar.mostrarcompra);

rutaagregar.get("/consultaCliente",controladorAgregar.mostrarcliente);

rutaagregar.get("/consultaUsuario",controladorAgregar.mostrarUsuario);

module.exports=rutaagregar;