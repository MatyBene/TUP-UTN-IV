const products = require('./products.js');
const { showProductList } = require('./utils.js');

const shop = {
    products: products,

    sell(productId, quantity){

        const product = this.searchProduct(productId);

        if(product && product.stock >= quantity){
            product.stock -= quantity;
            console.log("Venta realizada");
        } else if(product) {
            console.log("Stock insuficiente");
        }
    },

    searchProduct(productId) {
        const product = this.products.find(product => product.id === productId);

        if(product) {
            return product;
        } else {
            console.log("Producto no encontrado");
            return;
        }
    }
};

showProductList(shop.products);

console.log("-" .repeat(6));

console.log("\n1. Venta exitosa - 2 Laptops Dell:");
shop.sell(1, 2);

console.log("\n2. Intento de venta con stock insuficiente - 15 Laptops Dell:");
shop.sell(1, 15);

console.log("\n3. Intento de venta de producto inexistente - ID 99:");
shop.sell(99, 1);

console.log("-" .repeat(6));

showProductList(shop.products);
