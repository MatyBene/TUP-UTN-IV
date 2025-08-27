const products = require('./products.js');

const product1 = products.find(product => product.name == "Laptop Dell");

const product2 = products.find(product => product.name == "La");

if(product1){
    console.log(product1.name);
} else {
    console.log("Producto no encontrado");
}