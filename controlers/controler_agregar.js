const res = require("express/lib/response")

const controlador={}

controlador.mostrarobjeto=(req,res)=>{
    res.render('agregar.ejs');
}
controlador.mostrarcolor=(req,res)=>{
    res.render('agregarColor.ejs');
}
controlador.mostrarpuntos=(req,res)=>{
    res.render('agregrarPuntos.ejs');
}
module.exports=controlador;

