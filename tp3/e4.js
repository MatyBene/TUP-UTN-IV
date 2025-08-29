const products = require('./data/products.js');

const totalPrice = products.reduce((mount, product) => mount + product.price, 0);

console.log(`Precio total de todos los productos: ${totalPrice}`);

const avg = function() {
  return totalPrice / products.length;
};

console.log(`Precio promedio: ${avg()}`);


