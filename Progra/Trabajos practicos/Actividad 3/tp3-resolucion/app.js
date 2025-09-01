/* ----------------------------------------  Ejercicio 1  ---------------------------------------- */

// //Creo el arreglo
// let productos = [
//     {
//         id: 1,
//         nombre: "Manzana",
//         precio: 300, 
//         stock: 50
//     },{
//         id: 2,
//         nombre: "Banana",
//         precio: 300, 
//         stock: 50
//     },{
//         id: 3,
//         nombre: "Pera",
//         precio: 80, 
//         stock: 3
//     },{
//         id: 4,
//         nombre: "Uva",
//         precio: 300, 
//         stock: 8
//     },{
//         id: 5,
//         nombre: "Anana",
//         precio: 300, 
//         stock: 0
//     },
// ]


// //Agrego uno al final
// productos.push({
//         id: 1,
//         nombre: "Granada",
//         precio: 300, 
//         stock: 50
//     },)

// //Elimino el ultimo
// productos.pop();

// //Muestro
// console.log(productos);

/* ----------------------------------------  Ejercicio 2  ---------------------------------------- */

// let productosEnStock = productos.filter( function(n){
//     return n.stock > 10;
// });

// console.log(productosEnStock);


/* ----------------------------------------  Ejercicio 3  ---------------------------------------- */

// let nombreBuscado = "Pera";

// let encontrado = productos.find( (n) => n.nombre === nombreBuscado);

// if(encontrado){
//     console.log("Se ha encontrado")
// }else{
//     console.log("No existe ese producto")
// }


/* ----------------------------------------  Ejercicio 4  ---------------------------------------- */
// let precioTotal = productos.reduce( (acumulador, producto) => acumulador + producto.precio, 0);

// console.log(precioTotal)

// let obtenerPromedio = function(){
//     return precioTotal / productos.length;
// }

// console.log("El promedio de precios es de: " + obtenerPromedio());


/* ----------------------------------------  Ejercicio 5  ---------------------------------------- */
// let existeStock0 = productos.some(n => n.stock === 0);

// if(existeStock0){
//     console.log("Si! Hay productos con stock 0")
// }else{
//     console.log("No, no hay productos con stock 0")
// }

// let todosMayorA100 = productos.every(n => n.precio > 100);

// if(todosMayorA100){
//     console.log("Si! Todos los precios son mayores a 100")
// }else{
//     console.log("No, no todos los precios son mayores a 100")
// }


/* ----------------------------------------  Ejercicio 6  ---------------------------------------- */

// let clientes = [
//     {
//         id: 1,
//         nombre: "Adrian", 
//         edad: 40, 
//         compras: ["Zapatos", "Tele"]
//     },
//     {
//         id: 2,
//         nombre: "Raul", 
//         edad: 40, 
//         compras: ["Fruta"]
//     },{
//         id: 1,
//         nombre: "Pedro", 
//         edad: 40, 
//         compras: ["Cartas"]
//     }
// ]

// clientes.forEach( c => {
//    console.log(c.nombre + " compro: " + c.compras);
// })


/* ----------------------------------------  Ejercicio 7  ---------------------------------------- */

// function procesarClientes(clientes, callback){
//     callback(clientes);
// }

// procesarClientes(clientes, function(arreglo){
//     console.log("Listado de nombres: " + arreglo.map(n => n.nombre))
// } )

// procesarClientes(clientes, function(arreglo){
//     let total =  arreglo.reduce((acc, cliente) => acc + cliente.compras.length, 0);
//     console.log('El total de compras es de: ' + total);
// })


/* ----------------------------------------  Ejercicio 8  ---------------------------------------- */

// let numeros = [5,8,1,9,3]

//Ascendente
// numeros.sort( (a,b) => a - b)
// console.log(numeros)

//Descendente
// numeros.sort( (a,b) => b - a)
// console.log(numeros)


/* ----------------------------------------  Ejercicio 9  ---------------------------------------- */

// let tienda = {
//     productos: [...productos],
//     vender: function(idProducto, cantidad){
//         let productoBuscado = this.productos.find( p => p.id === idProducto);
        
//         if(!productoBuscado){
//             console.log("No existe el producto buscado")
//         }
        
//         if(productoBuscado.stock > cantidad){
//             productoBuscado.stock -= cantidad;
//             console.log('Venta realizada!'); 
//         }else{
//             console.log('Stock insuficiente');
//         }
//     }
// }

// tienda.vender(1, 20);
// console.log(tienda);


/* ----------------------------------------  Ejercicio 10  ---------------------------------------- */

// let carrito = [];

// carrito.push({
//     producto: "Mouse",
//     cantidad: 3,
//     precioUnitario: 4000
// },
// {
//     producto: "Monitor",
//     cantidad: 5,
//     precioUnitario: 680000
// },
// {
//     producto: "Teclado",
//     cantidad: 8,
//     precioUnitario: 85000
// })

// console.log(carrito)

// let totalAPagar = carrito.reduce( (acc, p) => acc + (p.precioUnitario * p.cantidad), 0 )
// console.log("El total a pagar es de: " + totalAPagar)

// let detalle = carrito.map(p => "Producto: " + p.producto + " - Cantidad: " + p.cantidad + " - Subtotal: " + (p.cantidad * p.precioUnitario))
// console.log(detalle);


/* ----------------------------------------  Ejercicio 11  ---------------------------------------- */
// let libros = [
//     {
//         id: 1,
//         titulo: "Libro 1",
//         autor: "Autor 1",
//         genero: "Terror",
//         disponible: true
//     },
//       {
//         id: 2,
//         titulo: "Libro 2",
//         autor: "Autor 2",
//         genero: "Romance",
//         disponible: true
//     },
//       {
//         id: 3,
//         titulo: "Libro 3",
//         autor: "Autor 3",
//         genero: "Terror",
//         disponible: false
//     },
// ]

// let librosDeTerror = libros.filter(l => l.genero === "Terror")
// console.log(librosDeTerror)

// let titulosEnMayuscula = libros.map(l => l.titulo.toLocaleUpperCase())
// console.log(titulosEnMayuscula)

// function prestarLibroId(id){
//     let libroAPrestar = libros.find(l => l.id === id)

//     if(libroAPrestar){

//         if(libroAPrestar.disponible){
//             libroAPrestar.disponible = false;
//             console.log("Prestado")
//         }else{
//             console.log("No disponible")
//         }
//     }else{
//         console.log("El libro buscado no existe")
//     }
// }

// prestarLibroId(3)

/* ----------------------------------------  Ejercicio 12  ---------------------------------------- */
// let agenda = {
//     contactos:  [
//     {
//         id: 1,
//         nombre: "Pri",
//         telefono: 2231234
//     }, {
//         id: 2,
//         nombre: "Adrian",
//         telefono: 22356789
//     }, {
//         id: 3,
//         nombre: "Joni",
//         telefono: 22311111
//     }
//     ],
//     agregarContacto: function(contactoNuevo){
//         this.contactos.push(contactoNuevo)
//     },
//     eliminarContacto: function(id){
//         this.contactos = this.contactos.filter(c => c.id !== id);
//     },
//     buscarContacto: function(nombre){
//         return this.contactos.find(c => c.nombre === nombre)
//     },
//     listarContactos: function(){
//         this.contactos.forEach(c => console.log(" - " + c.nombre ))
//     }

// }


// agenda.agregarContacto({id: 4, nombre: "Nica", telefono: 2222222})
// console.log(agenda)

// agenda.eliminarContacto(2)
// console.log(agenda)

//agenda.listarContactos()


/* ----------------------------------------  Ejercicio 13  ---------------------------------------- */

// let alumnos = [
//     {
//         id: 1,
//         nombre: "Juan", 
//         notas: [8,5,9]
//     },
//     {
//         id: 2,
//         nombre: "Pedro", 
//         notas: [2,5,4]
//     },
//     {
//         id: 3,
//         nombre: "Laura", 
//         notas: [8,3,7]
//     },
// ]

// let calcularPromedioDeAlumno = alumnos.map( alumno => {
//     let promedio = alumno.notas.reduce( (acc, nota) => acc + nota, 0) / alumno.notas.length
//     return { id: alumno.id, nombre: alumno.nombre, promedio: promedio}
// })

// console.log(calcularPromedioDeAlumno)

// let aprobados = calcularPromedioDeAlumno.filter(alumno => alumno.promedio >= 6)
// console.log(aprobados)


/* ----------------------------------------  Ejercicio 14  ---------------------------------------- */
// function comprar(id, cantidad, callbackExito, callbackError){

//     let productoAComprar = productos.find(p => p.id === id)

//     if(productoAComprar){

//         if(productoAComprar.stock >= cantidad){
//             let precioTotal = productoAComprar.precio * cantidad;
//             callbackExito("Compra realizada: " + productoAComprar.nombre + " - $" + precioTotal)
//         }else{
//             callbackError("Stock insuficiente")
//         }
//     }else{
//         callbackError("No existe producto con el id ingresado")
//     }

// }

// comprar(1, 5, 
//     msj => console.log(msj),
//     msjError => console.log(msjError)
// )


/* ----------------------------------------  Ejercicio 15  ---------------------------------------- */

// function aplicarDescuento(id, porcentaje, callbackExito, callbackError){

//      let productoABuscar = productos.find(p => p.id === id)

//     if(!productoABuscar){
//         callbackError("Producto no encontrado")
//     }
//     else if(porcentaje < 0 || porcentaje > 100){
//         callbackError("Porcentaje invalido")
//     }else{
//         productoABuscar.precio = productoABuscar.precio - ((productoABuscar.precio * porcentaje) / 100)
//         callbackExito(productoABuscar.nombre + " - " + productoABuscar.precio)
//     }
// }

// aplicarDescuento(
//     2, // id del producto
//     20, // porcentaje de descuento
//     mensaje => {
//         console.log(mensaje); // callbackExito de aplicarDescuento

//         // Ahora intentamos comprar 2 unidades del producto dentro del callback de éxito
//         comprar(
//             2,
//             2,
//             mensajeCompra => console.log(mensajeCompra), // callbackExito de comprar
//             errorCompra => console.log(errorCompra) // callbackError de comprar
//         );
//     },
//     error => console.log(error) // callbackError de aplicarDescuento
// );


/* ----------------------------------------  Ejercicio 16  ---------------------------------------- */

// function filtrarPorStock(minStock, callbackExito, callbackError){

//     let productosFiltrados = productos.filter(producto => producto.stock >= minStock)

//     if(productosFiltrados.length > 0){
//         callbackExito(productosFiltrados)
//     }else{
//         callbackError("No hay productos con ese stock");
//     }
// }

// filtrarPorStock(10, 
//     arreglo => {
//         console.log("Productos disponibles: ")
//         arreglo.forEach( producto => console.log(producto.nombre + " - " + producto.precio))
//     },
//     msj => console.log(msj)
// )