const clients = require('./clients.js');

function processClients(clients, callback) {
    callback(clients);
}

function showNames(clients) {
    console.log("=== NOMBRES DE LOS CLIENTES ===");
    clients.forEach(client => {
        console.log(client.name);
    });
}

function showQuantityPurchases(clientes) {
    console.log("=== CANTIDAD TOTAL DE COMPRAS POR CLIENTE ===");
    clients.forEach(client => {
        console.log(`${client.name}: ${client.purchases.length} compras`);
    });
}

processClients(clients, showNames);

processClients(clients, showQuantityPurchases);

