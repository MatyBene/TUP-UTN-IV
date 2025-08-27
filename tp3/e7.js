const clients = require('./clients.js');

console.log("Cantidad de compras por cliente: \n");

clients.forEach(function(client, index) {
    console.log(`Nombre: ${client.name} | Cantidad: ${client.purchases.length}`);
});
