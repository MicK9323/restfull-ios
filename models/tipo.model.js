var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoSchema = new Schema({
    tipo: {type: String},
    categoria: {type: Schema.Types.ObjectId, ref: "Categoria"}
});

module.exports = mongoose.model('Tipo',TipoSchema);