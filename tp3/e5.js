const products = require('./products.js');

const totalPrice = products.reduce((mount, product) => {
  return mount + product.price;
}, 0);

console.log(totalPrice);
