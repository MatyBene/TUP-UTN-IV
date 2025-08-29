 
// ------------------------- Paso 1: Selección de elementos -------------------------

// 1. Por id
// Devuelve SOLO un elemento (o null si no existe).
// Es el método más rápido, directo y específico.

    // let titulo = document.getElementById("titulo");

    // console.log(titulo)


// 2. Por clase
// Devuelve una HTMLCollection con todos los elementos
// que tengan esa clase. Colección "en vivo".
// Acceso por índice.

    // let parrafos = document.getElementsByClassName("parrafo");

    // console.log("getElementsByClassName:", parrafos);
    // console.log("Primer párrafo:", parrafos[0]);


// 3. Por etiqueta
// Devuelve una HTMLCollection con todos los elementos
// de esa etiqueta. También es "en vivo".

    // let liElements = document.getElementsByTagName("li");

    // console.log("getElementsByTagName:", liElements);


// 4. querySelector("selectorCSS")
// Devuelve el PRIMER elemento que cumpla el selector.
// Acepta cualquier selector válido de CSS (#, ., etiquetas, combinados).

    // let primerParrafo = document.querySelector(".parrafo");

    // console.log("querySelector (primer .parrafo):", primerParrafo);


    // let spanEnContenedor = document.querySelector(".contenedor span");

    // console.log("querySelector (span dentro de .contenedor):", spanEnContenedor);


// 5. querySelectorAll("selectorCSS")
// Devuelve un NodeList con todos los elementos que cumplan
// el selector CSS. Es "estático" (no se actualiza si el DOM cambia).

    // let todosLosParrafos = document.querySelectorAll(".parrafo");
    // console.log("querySelectorAll (todos los .parrafo):", todosLosParrafos);

    // let todosLosItems = document.querySelectorAll("ul li");
    // console.log("querySelectorAll (todos los li dentro de ul):", todosLosItems);






// ------------------------- Paso 2: Modificación de elementos -------------------------

//1. .innerText
// Modifica el texto -visible- del elemento 
// (respeta los estilos CSS).

    // let p1 = document.getElementById("titulo");

    // p1.innerText = "Texto cambiado con innerText";
   
   

//2. .textContent
// Modifica -todo- el texto, sin importar si es visible o no.

  // let p2 = document.getElementById("p-oculto");

  // p2.textContent = "Ahora tengo otro texto";


//3. .innerHTML
// Modifica el contenido HTML -interno- del elemento.
// Permite incluir etiquetas HTML.

    // let caja = document.getElementById("caja");

    // caja.innerHTML = "<i>Ahora soy cursiva</i>";



//4. .outerHTML
// Devuelve o reemplaza el elemento completo, incluyendo la etiqueta.
//Mucho menos usado que innerHTML.

    // let bloque = document.getElementById("bloque");

    // bloque.outerHTML = "<p>Reemplacé el div por un párrafo</p>";


//5. .value
// Devuelve o modifica el valor de elementos de formulario.
// Se usa mucho en formularios y buscadores.

    // let input = document.getElementById("nombre");

    // console.log(input.value); // "Juan"

    // input.value = "María";




// ------------------------- Paso 3: Modificación de atributos -------------------------

//.getAttribute("atributo")
// Devuelve el valor actual del atributo

    // const img = document.getElementById("miImagen");
    // console.log(img.getAttribute("src")); // "img1.jpg"



//.setAttribute("atributo", "valor")
// Cambia o crea un atributo con el valor indicado.

    // img.setAttribute("src", "img2.jpg"); // Cambia la imagen
    // img.setAttribute("alt", "Nueva descripción");



//.removeAttribute("atributo")
// Elimina un atributo.

    //img.removeAttribute("alt"); 





// ------------------------- Paso 4: Modificación de clases y estilos -------------------------

// .style

    // let titulo = document.getElementById("titulo");

    // titulo.style.color = "red"
    // titulo.style.background = "blue"


// .classList permite manipular las clases css
// .add("clase") → agrega una clase
// .remove("clase") → elimina una clase
// .toggle("clase") → si la clase está, la quita; si no, la agrega
// .contains("clase") → devuelve true si el elemento tiene la clase

    //  let titulo = document.getElementById("titulo");

    //  titulo.classList.add("importante")
    //  console.log(titulo)

    //  titulo.classList.remove("importante")




// ------------------------- Paso 5: Eliminar elementos -------------------------

    // const li2 = document.getElementById("li2");
    // const li3 = document.getElementById("li3");
    // const lista = document.getElementById("lista");

    // // // Eliminar nodo directamente
    // li2.remove();

    // // // Eliminar usando el padre
    // lista.removeChild(li3);

    // // // Vaciar todo un contenedor
    // lista.innerHTML = ""; // elimina todos los elementos hijos



// ------------------------- Paso 6: Agregar elementos -------------------------

// Ejemplo 1

// 1. Seleccionamos la lista
    // const lista = document.getElementById("lista");

// 2. Creamos un nuevo elemento <li>
  //   const nuevoLi = document.createElement("li");

// 3. Agregamos contenido HTML dentro del <li>
  //   nuevoLi.innerHTML = "<b>Item D</b> - Nuevo agregado";

 // 4. Agregamos el <li> a la lista
    //lista.appendChild(nuevoLi);   // .prepend() si lo quiero agregar al inicio



// Ejemplo 2

    // const contenedor = document.getElementById("segundoContenedor");

    // Crear un div
    // const div = document.createElement("div");

  // Agregar HTML que contiene varios tipos de elementos
    // div.innerHTML = `
    //   <h2>Título</h2>
    //   <p>Parrafo con <b>negrita</b> y <i>cursiva</i></p>
    //   <ul>
    //     <li>Item 1</li>
    //     <li>Item 2</li>
    //   </ul>
    //   <img src="https://via.placeholder.com/50" alt="Imagen">
    // `;

// Agregar al contenedor
    //contenedor.appendChild(div);




// ------------------------- Paso 7: EVENTOS -------------------------

    // let botonDeEvento = document.getElementById("botonDeEvento")

    // botonDeEvento.addEventListener("click", () => {
    //   alert("Hola!");
    // })








// ------------------------------------------- Ejemplo completo -------------------------------------------

let boton = document.getElementById("agregar")

boton.addEventListener("click", () => {
    let nombreInput = document.getElementById("nombre");
    let telefonoInput = document.getElementById("telefono");

    let nombre = nombreInput.value.trim();
    let telefono = telefonoInput.value.trim();

    if (nombre === "" || telefono === "") {
      alert("Por favor, completá ambos campos.");
      return;
    }

    // Crear elemento <li> directamente
    let lista = document.getElementById("listaContactos");
    let li = document.createElement("li");
    li.innerText = `${nombre} - 📞 ${telefono}`;

    lista.appendChild(li);

    // Limpiar inputs
    nombreInput.value = "";
    telefonoInput.value = "";
});

// ---------------------------------------------- Resolución con clases ----------------------------------------------

// // Clase Contacto
// class Contacto {
//   constructor(nombre, telefono) {
//     this.nombre = nombre;
//     this.telefono = telefono;
//   }

//   mostrar() {
//     return `${this.nombre} - 📞 ${this.telefono}`;
//   }
// }

// // Evento del botón
// document.getElementById("agregar").addEventListener("click", () => {


//   const nombreInput = document.getElementById("nombre");
//   const telefonoInput = document.getElementById("telefono");

//   const nombre = nombreInput.value.trim();  //.trim() es un método de string que elimina espacios en blanco al inicio y al final de un texto
//   const telefono = telefonoInput.value.trim();

//   if (nombre === "" || telefono === "") {
//     alert("Por favor, completá ambos campos.");
//     return;
//   }

//   const nuevoContacto = new Contacto(nombre, telefono);
//   agregarContactoALaLista(nuevoContacto);

//   // Limpiar inputs
//   nombreInput.value = "";
//   telefonoInput.value = "";
  
// });

// // Función para mostrar el contacto en el DOM
// function agregarContactoALaLista(contacto) {
//   const lista = document.getElementById("listaContactos");

//   const li = document.createElement("li");
//   li.innerText = contacto.mostrar();

//   lista.appendChild(li);
// }