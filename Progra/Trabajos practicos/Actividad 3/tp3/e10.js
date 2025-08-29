var cart = [];

console.log("Carrito vacio:", cart);

cart.push({
    product: "Laptop Dell",
    quantity: 2,
    unitPrice: 850000
});

cart.push({
    product: "Gaming Mouse",
    quantity: 1,
    unitPrice: 45000
});

cart.push({
    product: "Mechanical Keyboard",
    quantity: 1,
    unitPrice: 120000
});

cart.push({
    product: "24 Monitor",
    quantity: 1,
    unitPrice: 300000
});

console.log("Carrito con productos:", cart);

const total = cart.reduce((accumulator, product) => {
    return accumulator + (product.quantity * product.unitPrice);
}, 0);

const details = cart.map(product => {
    const subtotal = product.quantity * product.unitPrice;
    return `Producto ${product.product} - Cantidad ${product.quantity} - Subtotal $${subtotal}`;
});

console.log("\nDetalle de carrito: ");
details.forEach(product => console.log(product));
console.log("====================");
console.log(`Total a pagar: $${total}`);

