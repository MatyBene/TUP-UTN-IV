const numbers = require("./data/numbers.js");

console.log(numbers);

console.log(numbers.sort((a, b) => (a - b)));

console.log(numbers.sort((a, b) => (b - a)));