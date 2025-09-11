// Declaracion de constantes ------------------------------------------------------------------
const URL = "http://localhost:3000/usuarios";
const listaUsers = document.getElementById("listaUsers");
const formUsers = document.getElementById("usersForm");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");

//Declaracion de funciones --------------------------------------------------------------------
async function cargarUsuarios() {

  try {
    let response = await fetch(URL);
    let usuarios = await response.json();

    listaUsers.innerHTML = "";

    usuarios.forEach(usuario => {
      const li = document.createElement("li");
      li.textContent = `${usuario.nombre}: ${usuario.email}`;

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";

      
      btnEliminar.addEventListener("click", () => eliminarUsuario(usuario.id));

      li.appendChild(btnEliminar);
      listaUsers.appendChild(li);
    });
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  }
}


async function agregarUsuario() {
  event.preventDefault(); 

  const nuevoUsuario = {
    nombre: inputNombre.value,
    email: inputEmail.value
  };

  try {
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoUsuario)
    });

    inputNombre.value = "";
    inputEmail.value = "";

    await cargarUsuarios();
  } catch (error) {
    console.error("Error al agregar usuario:", error);
  }
}


async function eliminarUsuario(id) {
  try {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
    await cargarUsuarios();
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
  }
}


// Invocacion de funciones --------------------------------------------------------------------
cargarUsuarios();

formUsers.addEventListener("submit", agregarUsuario);







