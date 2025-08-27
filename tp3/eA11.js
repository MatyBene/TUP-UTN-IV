const books = require("./books.js");

console.log("Libros");

console.log(books);

console.log("-" .repeat(6));

const booksByGente = books.filter(book => book.genre === "Novela");

console.log("Libros por genero (Novela)");

console.log(booksByGente);

console.log("-" .repeat(6));

const titlesInUppercase = books.map(book => book.title.toUpperCase());

console.log("Libros con titulos en mayuscula");

console.log(titlesInUppercase);

console.log("-" .repeat(6));

function lendBook(id) {
    const book = books.find(book => book.id == id);

    if(book && book.available){
        book.available = false;
        console.log("Libro prestado con exito");
        
    } else {
        console.log("No disponible");
        
    }
}

console.log("Libro 1 - Disponible");
lendBook(1);

console.log("Libro 2 - No disponible");
lendBook(2);
