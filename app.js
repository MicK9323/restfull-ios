// Agregar referencias
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

// Importar rutas de peticion para usuario
var usuario_routes = require('./routes/usuario.route');
var product_routes = require('./routes/producto.route');

var app = express();

// Configuracion de conexion a base de datos
mongoose.connect('mongodb://mongoios.documents.azure.com:10255/ios?ssl=true',{
    auth:{
        user:'mongoios',
        password:'s5HcPCQrr11C7tCvb7yuRbpi22HLFt59e9CtabnWSbxEGjxh84HzdE0rqZtPPWkywHTCOuz6gOm8xmcvB0fHuw=='
    }
})
.then( () => console.log('\x1b[32m%s\x1b[0m','Conexion a base de datos correcta') )
.catch( (error) => console.error(error) );
mongoose.Promise = global.Promise;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

// Rutas
app.use('/api',usuario_routes);
app.use('/api',product_routes);

var puerto = process.env.PORT || 3546;

app.listen(puerto, () => {
    console.log('\x1b[32m%s\x1b[0m','Express server online en el puerto:'+puerto);
})