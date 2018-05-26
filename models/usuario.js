var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    dni: {type: String, required: true, max: 8},
    nombre: {type: String, required: true, max: 80},
    apellido: {type: String, required: true, max: 80},
    direccion: {type: String, required: true, max: 220},
    correo: {type: String, required: true, max: 110},
    clave: {type: String, required: true, max: 110},
});

// Exportamos la clase
module.exports = mongoose.model('Usuario',UsuarioSchema);