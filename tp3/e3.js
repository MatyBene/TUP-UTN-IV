const products = require('./products.js');
const { showProductList } = require('./utils.js');

showProductList(products);

let newPrice = products.map(product => ({...product, price: product.price * 1.2}));

showProductList(newPrice);