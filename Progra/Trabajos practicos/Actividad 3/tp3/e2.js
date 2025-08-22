const products = require('./products.js');
const { showProductList } = require('./utils.js');

var productsInStock = products.filter(product => product.stock > 10);

showProductList(productsInStock);

