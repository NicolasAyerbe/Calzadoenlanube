const express= require("express");
const bodyparser= require
("body-parser");

const servidor = express();

servidor.use(bodyparser.json());
servidor.use(bodyparser.urlencoded({extended:false}));

servidor.set('view engine','ejs');
servidor.set('views',__dirname+'/views');

servidor.use(express.static(__dirname+'/public'));


servidor.use(require("./routers/router_index.js"));
servidor.use(require("./routers/router_agregar.js"));
servidor.use(require("./routers/router_consultas.js"));
servidor.use(require("./routers/router_detalles.js"));
servidor.use(require("./routers/router_eliminar.js"));
servidor.use(require("./routers/router_datos.js"));


servidor.post('/ingreso',(peticion,respuesta)=>{
     let {txt, txtc, txtp}=peticion.body;
     if(txt == "empresa"){
          respuesta.render('consultaUsuario');
     }
     if (txt == "cliente"){
          respuesta.render('consultaCliente');
     }
});
servidor.post('/registro',(peticion,respuesta)=>{
     let {sels, txtnom, txtape, txtced, txttel, txtdir, txtcon}=peticion.body;
     if(sels == "resa"){
          respuesta.render('/');
     }
     if (sels == "ente"){
          respuesta.render('/');
     }
});
servidor.post('/editar',(peticion,respuesta)=>{
     let {actua, txt1, txt2, txt3, txt4, txt5, txt6}=peticion.body;
     respuesta.render('/productos');
});
/*
servidor.get('/ingresar',(peticion,respuesta)=>{
     respuesta.render('ingresar');
});
servidor.get('/registrar',(peticion,respuesta)=>{
     respuesta.render('registrar');
});


servidor.get('/informacion',(peticion,respuesta)=>{
     respuesta.render('informacion');
});
servidor.get('/productos',(peticion,respuesta)=>{
     respuesta.render('productos');
});



servidor.get('/pago',(peticion,respuesta)=>{
     respuesta.render('pago');
});

servidor.get('/PuntosVentas',(peticion,respuesta)=>{
     respuesta.render('PuntosVentas');
});
*/



servidor.listen(4000,()=>{
     console.log("El servidor inicio en el puerto 4000");
});