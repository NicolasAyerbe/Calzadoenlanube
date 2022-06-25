const res = require("express/lib/response")

const controlador={}

controlador.mostrarcolor=(req,res)=>{
    res.render('eliminarColor.ejs');
}
controlador.mostrarproducto=(req,res)=>{
    res.render('eliminarProductos.ejs');
}
controlador.mostrarpunto=(req,res)=>{
    res.render('eliminarPuntos.ejs');
}

module.exports=controlador;