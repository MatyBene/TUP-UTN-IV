// // Ejemplo 1
// const url = "https://jsonplaceholder.typicode.com/posts";

//   //  GET - Obtener un post
//     async function getPost() {
//       try {
//         let respuesta = await fetch(url + "/1");
//         let data = await respuesta.json();
//         document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
//       } catch (error) {
//         document.getElementById("resultado").textContent = "Error: " + error;
//       }
//     }

//     // POST - Crear un nuevo post
//     async function crearPost() {
//       let nuevoPost = {
//         title: "Título nuevo",
//         body: "Contenido del nuevo post",
//         userId: 1
//       };

//       try {
//         let respuesta = await fetch(url, {
//           method: "POST",
//           headers: { //Los headers (cabeceras HTTP) son información adicional que se manda con la petición
//             "Content-Type": "application/json" //esto le avisa al servidor "esta en formato json"
//           },
//           body: JSON.stringify(nuevoPost)
//         });

//         let data = await respuesta.json();
//         document.getElementById("resultado").textContent = "POST creado:\n" + JSON.stringify(data, null, 2);
//       } catch (error) {
//         document.getElementById("resultado").textContent = "Error: " + error;
//       }
//     }

//     // PUT - Actualizar un post existente
//     async function actualizarPost() {
//       const postActualizado = {
//         id: 1,
//         title: "Título actualizado",
//         body: "Este es el nuevo contenido del post",
//         userId: 1
//       };

//       try {
//         let respuesta = await fetch(url + "/1", {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(postActualizado)
//         });

//         let data = await respuesta.json();

//         document.getElementById("resultado").textContent = "POST actualizado:\n" + JSON.stringify(data, null, 2);
//       } catch (error) {
//         document.getElementById("resultado").textContent = "Error: " + error;
//       }
//     }

//     // DELETE - Eliminar un post
//     async function borrarPost() {
//       try {
//         let respuesta = await fetch(url + "/1", {
//           method: "DELETE"
//         });

//         if (respuesta.ok) {
//           document.getElementById("resultado").textContent = "Post eliminado correctamente.";
//         } else {
//           document.getElementById("resultado").textContent = "Error al eliminar.";
//         }
//       } catch (error) {
//         document.getElementById("resultado").textContent = "Error: " + error;
//       }
//     }




// Ejemplo 2
const urlBase = "https://jsonplaceholder.typicode.com/posts";

// GET -----------------------------------------------------------------------------------------
async function obtenerPost() {
  let id = document.getElementById("idPost").value;
  let respuesta = await fetch(`${urlBase}/${id}`);
  let datos = await respuesta.json();
  document.getElementById("resultadoGet").textContent = JSON.stringify(datos, null, 2);
}

document.getElementById("btnGet").addEventListener("click", obtenerPost);




// POST ----------------------------------------------------------------------------------------
async function crearPost() {
  let titulo = document.getElementById("postTitulo").value;
  let cuerpo = document.getElementById("postContenido").value;

  const respuesta = await fetch(urlBase, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: titulo,
      body: cuerpo
    })
  });

  const datos = await respuesta.json();
  document.getElementById("resultadoPost").textContent = JSON.stringify(datos, null, 2);
}

document.getElementById("btnPost").addEventListener("click", crearPost);



// PUT -----------------------------------------------------------------------------------------
async function modificarPost() {
  const id = document.getElementById("putId").value;
  const titulo = document.getElementById("putTitulo").value;
  const cuerpo = document.getElementById("putContenido").value;

  const respuesta = await fetch(`${urlBase}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      title: titulo,
      body: cuerpo,
      userId: 1
    })
  });

  const datos = await respuesta.json();
  document.getElementById("resultadoPut").textContent = JSON.stringify(datos, null, 2);
}

document.getElementById("btnPut").addEventListener("click", modificarPost);



// DELETE ---------------------------------------------------------------------------------------
async function eliminarPost() {
  const id = document.getElementById("idAEliminar").value;

  const respuesta = await fetch(`${urlBase}/${id}`, {
    method: "DELETE"
  });

  document.getElementById("resultadoDelete").textContent =
    respuesta.ok
      ? `Post ${id} eliminado (simulado)`
      : `Error al eliminar`;
}

document.getElementById("btnDelete").addEventListener("click", eliminarPost);

