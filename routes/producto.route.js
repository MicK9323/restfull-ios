var express = require('express');
var router = express.Router();

var products_controller = require('../controllers/productos.controller');

// Obtener categorias
router.get('/products/categories',products_controller.FindCategories);
// Obtener tipos
router.get('/products/types',products_controller.FindTypes);
// Obtener todos los productos
router.get('/products/all',products_controller.ProductsList);
// Buscar por categoria
router.post('/products/categories',products_controller.FindByCategory);
// Buscar por tipo
router.post('/products/types',products_controller.FindByType);
// Buscar por Id
router.post('/products/id',products_controller.FindByID);


// Exportar clase
module.exports = router;