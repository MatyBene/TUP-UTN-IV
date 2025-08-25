function showProductList(products) {
    console.log("=== LISTA DE PRODUCTOS ===");
    console.log("Total de productos:", products.length);
    console.log("Cantidad total de productos en stock:", products.reduce((total, product) => total + product.stock, 0));
    console.log("=====================================");
    
    products.forEach(function(product, index) {
        console.log(`${index + 1}. ID: ${product.id} | Nombre: ${product.name} | Precio: $${product.price} | Stock: ${product.stock}`);
    });
}

module.exports = { showProductList };
