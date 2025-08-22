function showProductList(products) {
    console.log("=== LISTA DE PRODUCTOS ===");
    console.log("Total de productos:", products.length);
    console.log("=====================================");
    
    products.forEach(function(product, index) {
        console.log(`${index + 1}. ID: ${product.id} | Nombre: ${product.name} | Precio: $${product.price} | Stock: ${product.stock}`);
    });
}

module.exports = { showProductList };
