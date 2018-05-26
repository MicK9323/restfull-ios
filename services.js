// Habilitar funcionalidades de ecmascript 6
'use strict'

// Agregar referencias
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

// Puerto de escucha del servidor
var PUERTO = process.env.PORT || 8091;
// Constante que almacena la cadena de conexion al servidor
// Conectar a base de datos
mongoose.connect('mongodb://mongoios.documents.azure.com:10255/ios?ssl=true',{
    auth:{
        user:'mongoios',
        password:'s5HcPCQrr11C7tCvb7yuRbpi22HLFt59e9CtabnWSbxEGjxh84HzdE0rqZtPPWkywHTCOuz6gOm8xmcvB0fHuw=='
    }
})
.then( () => console.log('\x1b[32m%s\x1b[0m','Conexion a base de datos correcta') )
.catch( (error) => console.error(error) );


// Definir coleccion a trabajar
var _usuarios = mongoose.Schema({
    dni: String, 
    nombre: String, 
    apellido: String, 
    direccion: String, 
    correo: String, 
    usuario: String, 
    clave: String, 
});
// Definir modelo
var modelUsuarios = mongoose.model('usuarios',_usuarios);

// Iniciando el servidor Express
var app = express();
app.use(bodyparser.json())

// Mapeo de rutas
app.get('/',(req,res) => {
    res.status(200).json({
        ok:true,
        mensaje:'Servidor a la escucha de peticiones'
    });
});


// Escuchar peticiones
app.listen(this.PUERTO, () => {
    console.log('\x1b[32m%s\x1b[0m','Express server online en el puerto:'+PUERTO);
})