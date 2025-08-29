// Crear variable

let numero1 = 5 //Esta si
var numero2 = 10 //Esta no

//Crear arreglo
let arreglo = []

//Crear objeto literal
let persona = {
    nombre: "Rodrigo",
    apellido: "Bueno",
    cantar: function(){
        return "Fue lo mejor del amorrrrr" //No precisa indicar tipo de retorno
    },
    presentarse: function(){
        return "Hola!, soy " + this.nombre
    } 
}

console.log(persona.cantar() ) //Invocar método del objeto literal

// Formas de imprimir en js
console.log("Hola, soy " + persona.nombre + " y estoy concatenando")
console.log(`Hola, soy ${persona.nombre} y estoy interpolando`)


//Funcion tradicional
function dobleTradicional(num){
    return num*2
}

//Funcion anonima guardada en una variable
let dobleAnonimo = function(num){
    return num*2
}

//Funcion arrow function guardada en una variable
let dobleArrow = num => num*2


//Funcion callback
function dobleCallback(funcionQueMultiplica){
    let numero = 10
    return funcionQueMultiplica(numero)
}

//Llamado a funcion callback 
let resultado = dobleCallback(num => num*2)
console.log(resultado)




