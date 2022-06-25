const express= require('express');
const controladorAgregar = require('../controlers/controler_detalles');
const rutaagregar= express.Router();

rutaagregar.get("/detalleCompra",controladorAgregar.mostrarcompra);

rutaagregar.get("/detalles1",controladorAgregar.mostrardetalles);

rutaagregar.get("/detalleVenta",controladorAgregar.mostrarventa);

rutaagregar.get("/editarDetalles",controladorAgregar.mostrareditar);


module.exports=rutaagregar;