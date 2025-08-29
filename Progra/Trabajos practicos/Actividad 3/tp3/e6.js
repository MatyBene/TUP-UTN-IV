const clients = require('./data/clients.js');

console.log("Cantidad de compras por cliente: \n");

clients.forEach((client) => console.log(`Nombre: ${client.name} | Cantidad: ${client.purchases.length}`));
