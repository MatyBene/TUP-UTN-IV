const products = require('./data/products.js');
const { showProductList } = require('./utils.js');

showProductList(products);

var newProduct = {
    id: 8,
    name: "Webcam HD",
    price: 45000,
    stock: 20
};

// Agregar un nuevo producto usando push()
products.push(newProduct);
console.log("\n=== AGREGA PRODUCTO ===");
console.log("Producto agregado:", newProduct);
showProductList(products);

// Eliminar el último producto con pop()
var removedProduct = products.pop();
console.log("\n=== DESPUÉS DE ELIMINAR PRODUCTO ===");
console.log("Producto eliminado:", removedProduct);
showProductList(products);