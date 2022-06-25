const express= require('express');
const controladorAgregar = require('../controlers/controler_datos');
const rutaagregar= express.Router();

rutaagregar.get("/informacion",controladorAgregar.mostrarinfo);

rutaagregar.get("/ingresar",controladorAgregar.mostraringresar);

rutaagregar.get("/pago",controladorAgregar.mostrarpago);

rutaagregar.get("/productos",controladorAgregar.mostrarproductos);

rutaagregar.get("/puntosVentas",controladorAgregar.mostrarpuntos);

rutaagregar.get("/registrar",controladorAgregar.mostrarregistrar);

rutaagregar.get("/usuario",controladorAgregar.mostrarusuario);


module.exports=rutaagregar;