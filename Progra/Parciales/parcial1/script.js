const URL = "http://localhost:3001/extraterrestres";
const listaExt = document.getElementById("listaExt");
const formExts = document.getElementById("extForm");
const inputNombre = document.getElementById("postNombre");
const inputPlaneta = document.getElementById("postPlaneta");
const inputPoder = document.getElementById("postPoder");

// GET Listado completo de extraterrestres
async function cargarExt(){
    try {
        let response = await fetch(URL);
        let extraterrestres = await response.json();

        listaExt.innerHTML = "";

        extraterrestres.forEach(ext => {
            const li = document.createElement("li");
            li.textContent = `${ext.nombre} / ${ext.planeta} / ${ext.nivelPoder}`;
        
            // const btnEliminar = document.createElement("button");
            // btnEliminar.textContent = "Eliminar";

            
            // btnEliminar.addEventListener("click", () => eliminarUsuario(ext.id));

            // li.appendChild(btnEliminar);
            listaExt.appendChild(li);
        });
    } catch (error) {
        console.error("Error al cargar los extraterrestres.", error);
    }
}

// POST Agregar un extraterrestre a la lista
async function agregarExt(){
    event.preventDefault();

    const nuevoExt = {
        id: (listaExt.children.length + 1).toString(),
        nombre: inputNombre.value,
        planeta: inputPlaneta.value,
        nivelPoder: parseInt(inputPoder.value)
    }

    try {
        await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(nuevoExt)
        });

        inputNombre.value = "";
        inputPlaneta.value = "";
        inputPoder.value = "";


        await cargarExt();
    } catch (error) {
    console.error("Error al agregar usuario:", error);
    }
}

// Al cargar la pagina
cargarExt();

formExts.addEventListener("submit", agregarExt);