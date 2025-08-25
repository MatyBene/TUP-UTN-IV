const products = require('./products.js');

console.log(products.some(product => product.stock == 0)); // No hay ningun producto con stock igual a cero
console.log(products.every(product => product.price > 100)); // Todos los productos valen mas de 100
