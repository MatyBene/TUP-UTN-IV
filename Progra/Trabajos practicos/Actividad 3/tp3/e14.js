const products = require('./data/products.js');

function buy(product, quantity, callbackSuccess, callbackError) {
    if(product.stock >= quantity) {
        product.stock -= quantity;

        const total = product.price * quantity;

        callbackSuccess(product, quantity, total);
    } else {
        callbackError("No hay stock suficiente");
    }

}

function callbackSuccess(product, quantity, total) {
    console.log("Detalle de la compra: ");
    console.log(`ID: ${product.id}`);
    console.log(`Producto: ${product.name}`);
    console.log(`Cantidad: ${quantity}`);
    console.log(`Total: $${total}`);
    console.log("---");
}

function callbackError(msg) {
    console.log(msg);
}

// buy(1, 2, callbackSuccess, callbackError);
// buy(999, 2, callbackSuccess, callbackError);
// buy(1, 20, callbackSuccess, callbackError);

// Ejercicio 15

function applyDiscount(id, percentage, callbackSuccess, callbackError) {
    const product = products.find(prod => prod.id === id);

    if(!product){
        callbackError("Producto no encontrado");
        return;
    }

    if (percentage <= 0 || percentage > 100) {
        callbackError("Porcentaje invalido");
        return;
    }

    

}