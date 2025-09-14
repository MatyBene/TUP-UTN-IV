const URL = "http://localhost:3001/extraterrestres";

const listaExt = document.getElementById("extraterrestres-container");

const btnListaCompleta = document.getElementById("listaCompleta");
const btnListaPlanetas = document.getElementById("listaPlanetas");
const btnListaPoder = document.getElementById("listaPoder");
const btnAgregar = document.getElementById("btnAgregar");

const formularioUnificado = document.getElementById("form-extraterrestre");
const seccionFormulario = document.getElementById("formulario");
const tituloFormulario = document.getElementById("titulo-formulario");
const legendFormulario = document.getElementById("legend-formulario");
const btnSubmit = document.getElementById("btn-submit");
const btnCancelar = document.getElementById("btn-cancelar");

const inputId = document.getElementById("extraterrestre-id");
const inputNombre = document.getElementById("nombre");
const inputPlaneta = document.getElementById("planeta");
const inputPoder = document.getElementById("poder");

// Variable para controlar el modo del formulario
let modoFormulario = 'agregar'; // 'agregar' o 'editar' 

// GET Listado completo de extraterrestres
async function cargarExt(){
    try {
        let response = await fetch(URL);
        let extraterrestres = await response.json();
        mostrarExtraterrestres(extraterrestres, 'completo');
    } catch (error) {
        console.error("Error al cargar los extraterrestres.", error);
    }
}

// Función para mostrar solo nombres y planetas
async function mostrarNombresYPlanetas(){
    try {
        let response = await fetch(URL);
        let extraterrestres = await response.json();
        mostrarExtraterrestres(extraterrestres, 'planeta');
    } catch (error) {
        console.error("Error al cargar los extraterrestres.", error);
    }
}

// Funcion para mostrar solo nombres y nivel de poder
async function mostrarNombresYNivelDePoder(){
    try {
        let response = await fetch(URL);
        let extraterrestres = await response.json();
        mostrarExtraterrestres(extraterrestres, 'poder');
    } catch (error) {
        console.error("Error al cargar los extraterrestres.", error);
    }
}

// Función modular para mostrar extraterrestres
function mostrarExtraterrestres(extraterrestres, tipo = 'completo') {
    listaExt.innerHTML = "";

    extraterrestres.forEach(ext => {
        const div = document.createElement("div");
        div.className = "cardExt";
        
        const infoSpan = document.createElement("span");
        
        switch(tipo) {
            case 'planeta':
                infoSpan.textContent = `Nombre: ${ext.nombre} / Planeta: ${ext.planeta}`;
                break;
            case 'poder':
                infoSpan.textContent = `Nombre: ${ext.nombre} / Nivel de poder: ${ext.nivelPoder}`;
                break;
            default:
                infoSpan.textContent = `Nombre: ${ext.nombre} / Planeta: ${ext.planeta} / Nivel de poder: ${ext.nivelPoder}`;
        }
        
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "btnEditar";
        btnEditar.onclick = () => rellenarEditar(ext.id);
        
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btnEliminar";
        btnEliminar.onclick = () => eliminarExt(ext.id);
        
        div.appendChild(infoSpan);
        div.appendChild(btnEditar);
        div.appendChild(btnEliminar);

        listaExt.appendChild(div);
    });
}

// Funciones para manejar el formulario unificado
function mostrarFormulario(modo = 'agregar', extraterrestre = null) {
    modoFormulario = modo;
    
    if (modo === 'agregar') {
        tituloFormulario.textContent = 'Agregar Nuevo Extraterrestre';
        legendFormulario.textContent = 'Datos del Extraterrestre';
        btnSubmit.textContent = 'Agregar';
        btnSubmit.className = 'btn btn-primary';
        
        // Limpiar campos
        inputId.value = '';
        inputNombre.value = '';
        inputPlaneta.value = '';
        inputPoder.value = '';
    } else if (modo === 'editar' && extraterrestre) {
        tituloFormulario.textContent = 'Editar Extraterrestre';
        legendFormulario.textContent = 'Modificar Datos';
        btnSubmit.textContent = 'Guardar Cambios';
        btnSubmit.className = 'btn btn-success';
        
        // Llenar campos con datos del extraterrestre
        inputId.value = extraterrestre.id;
        inputNombre.value = extraterrestre.nombre;
        inputPlaneta.value = extraterrestre.planeta;
        inputPoder.value = extraterrestre.nivelPoder;
    }
    
    seccionFormulario.style.display = 'block';
}

function ocultarFormulario() {
    seccionFormulario.style.display = 'none';
    
    // Limpiar campos
    inputId.value = '';
    inputNombre.value = '';
    inputPlaneta.value = '';
    inputPoder.value = '';
}

// Función unificada para procesar el formulario
async function procesarFormulario(event) {
    event.preventDefault();
    
    const extraterrestre = {
        nombre: inputNombre.value,
        planeta: inputPlaneta.value,
        nivelPoder: parseInt(inputPoder.value)
    };
    
    try {
        if (modoFormulario === 'agregar') {
            // Agregar nuevo extraterrestre
            extraterrestre.id = (listaExt.children.length + 1).toString();
            
            await fetch(URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(extraterrestre)
            });
            
        } else if (modoFormulario === 'editar') {
            // Editar extraterrestre existente
            extraterrestre.id = inputId.value;
            
            await fetch(`${URL}/${inputId.value}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(extraterrestre)
            });
        }
        
        // Ocultar formulario y recargar lista
        ocultarFormulario();
        await cargarExt();
        
    } catch (error) {
        console.error(`Error al ${modoFormulario} extraterrestre:`, error);
    }
}

// POST Agregar un extraterrestre a la lista
function mostrarFormAgregar(){
    if (seccionFormulario.style.display === 'none' || seccionFormulario.style.display === '') {
        mostrarFormulario('agregar');
    } else {
        ocultarFormulario();
    }
}

// Función para mostrar el formulario de edición
async function rellenarEditar(id){
    try {
        let response = await fetch(`${URL}/${id}`);
        let ext = await response.json();
        
        mostrarFormulario('editar', ext);
        
    } catch(error) {
        console.error("Error al cargar los datos para edición:", error);
    }
}
// DELETE
async function eliminarExt(id) {
    try {
        await fetch(`${URL}/${id}`, {
            method: "DELETE"
        });
        
        await cargarExt();

    } catch (error) {
        console.error("Error al eliminar el extraterrestre", error);
    }
}

// Inicialización y event listeners
cargarExt();

btnListaCompleta.addEventListener("click", cargarExt);
btnListaPlanetas.addEventListener("click", mostrarNombresYPlanetas);
btnListaPoder.addEventListener("click", mostrarNombresYNivelDePoder);

btnAgregar.addEventListener("click", mostrarFormAgregar);
formularioUnificado.addEventListener("submit", procesarFormulario);
btnCancelar.addEventListener("click", ocultarFormulario);