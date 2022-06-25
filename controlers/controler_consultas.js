const res = require("express/lib/response")

const controlador={}

controlador.mostrarcolor=(req,res)=>{
    res.render('colores.ejs');
}
controlador.mostrarcompra=(req,res)=>{
    res.render('comprar.ejs');
}
controlador.mostrarcliente=(req,res)=>{
    res.render('consultaCliente.ejs');
}
controlador.mostrarUsuario=(req,res)=>{
    res.render('consultaUsuario.ejs');
}
module.exports=controlador;
