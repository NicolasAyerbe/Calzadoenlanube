const res = require("express/lib/response")

const controlador={}

controlador.mostrarLogin=(req,res)=>{
    res.render('index.ejs');
}
module.exports=controlador;
