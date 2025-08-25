const books = require("./books.js");

function getBooksByGenre(genre) {
    return books.filter(book => book.genre === genre);
};