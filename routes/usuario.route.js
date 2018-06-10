var express = require('express');
var router = express.Router();

// Requerir controladores
var usuario_controller = require('../controllers/usuario.controller');

// Ruta de prueba para verificar la conexion entre los elemntos
router.get('/test',usuario_controller.test);

// Ruta para registrar usuario
router.post('/usuarios',usuario_controller.usuario_create);

// Ruta para logear usuario
router.post('/usuarios/login',usuario_controller.usuario_login);

// Exportamos la clase
module.exports = router;