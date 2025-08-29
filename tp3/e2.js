const products = require('./data/products.js');
const { showProductList } = require('./utils.js');

let productsInStock = products.filter(function(product) {
    return product.stock > 10
});

showProductList(productsInStock);

