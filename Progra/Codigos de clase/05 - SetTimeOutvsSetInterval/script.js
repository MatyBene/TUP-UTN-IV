// setTimeout(() => {
//     console.log("aca estoy :D");
// }, 3000);

// console.log('Hola, yo parezco primero');


// let cont = 1;

// let id= setInterval(() => {
//     if(cont < 6){
//         console.log(`Ha pasado ${cont} segundos`);
//         cont++;
//     }else{
//         clearInterval(id);
//     }
    
// }, 1000);

// console.log("pepepepe");


// Animacion 1
// const mensaje = "Hola, bienvenid@ a la clase de JavaScript!";
// let i = 0;

// function escribir() {
//     if (i < mensaje.length) {
//         document.getElementById("texto").textContent += mensaje.charAt(i);
//         i++;
//         setTimeout(escribir, 100);
//     }
// }

// escribir();


// Animacion 2

// let x = 0;

// const mover = setInterval(() => {
//     if (x >= 500) {
//         clearInterval(mover);
//     } else {
//         x += 5;
//         document.getElementById("cuadro").style.left = x + "px";
//     }
// }, 30); // se mueve cada 30ms


// Animacion 3
// let visible = true;

// setInterval(() => {
//     visible = !visible;
//     document.getElementById("aviso").style.visibility = visible ? "visible" : "hidden";
// }, 500); // alterna visibilidad cada medio segundo



// ----------------------------------- Promesas -----------------------------------

// const promesa = new Promise((resolve, reject) => {
//   const todoBien = false;

//   if (todoBien) {
//     resolve("¡Todo salió bien!");
//   } else {
//     reject("Algo salió mal...");
//   }
// });

// promesa.then((resultado) => {
//     console.log("Éxito:", resultado);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });



function irAlSupermercado() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fui al supermercado");
      resolve();
    }, 1000);
  });
}

function comprarIngredientes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Compré los ingredientes");
      resolve();
    }, 1000);
  });
}

function cocinar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Cociné la comida");
      resolve();
    }, 1000);
  });
}

function comer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comí la comida");
      resolve();
    }, 1000);
  });
}


// irAlSupermercado()
//   .then(() => comprarIngredientes())
//   .then(() => cocinar())
//   .then(() => comer())
//   .then(() => {
//     console.log("¡Todo hecho!");
//   });


async function prepararComida() {
  await irAlSupermercado();
  await comprarIngredientes();
  await cocinar();
  await comer();
  console.log("¡Todo hecho!");
}

prepararComida();














