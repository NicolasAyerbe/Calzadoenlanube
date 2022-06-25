const res = require("express/lib/response")

const controlador={}

controlador.mostrarinfo=(req,res)=>{
    res.render('informacion.ejs');
}
controlador.mostraringresar=(req,res)=>{
    res.render('ingresar.ejs');
}
controlador.mostrarpago=(req,res)=>{
    res.render('pago.ejs');
}
controlador.mostrarproductos=(req,res)=>{
    res.render('productos.ejs');
}
controlador.mostrarpuntos=(req,res)=>{
    res.render('puntosVentas.ejs');
}
controlador.mostrarregistrar=(req,res)=>{
    res.render('registrar.ejs');
}
controlador.mostrarusuario=(req,res)=>{
    res.render('usuario.ejs');
}
module.exports=controlador;