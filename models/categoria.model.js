var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaSchema = new Schema({
    categoria: {type: String}
    // tipos: [{type: Schema.Types.ObjectId, ref:'Tipo'}]
})

module.exports = mongoose.model('Categoria',CategoriaSchema);