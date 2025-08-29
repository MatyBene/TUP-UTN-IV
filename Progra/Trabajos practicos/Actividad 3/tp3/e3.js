const products = require('./data/products.js');

function searchProductByName(productName) {
    const foundProduct = products.find(function(product) {
        return product.name === productName;
    });
    
    if (foundProduct) {
        console.log(`Producto encontrado: ${foundProduct.name} - Precio: $${foundProduct.price} - Stock: ${productoEncontrado.stock}`);
    } else {
        console.log("Producto no encontrado");
    }
}

searchProductByName("Laptop Dell");
searchProductByName("Mouse Logitech");
searchProductByName("Producto Inexistente");