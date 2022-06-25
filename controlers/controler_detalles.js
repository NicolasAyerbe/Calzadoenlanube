const res = require("express/lib/response")

const controlador={}

controlador.mostrarcompra=(req,res)=>{
    res.render('detalleCompra.ejs');
}
controlador.mostrardetalles=(req,res)=>{
    res.render('detalles1.ejs');
}
controlador.mostrarventa=(req,res)=>{
    res.render('detalleVenta.ejs');
}
controlador.mostrareditar=(req,res)=>{
    res.render('editarDetalles.ejs');
}
module.exports=controlador;