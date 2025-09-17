<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Sistema de Gestión de Profesores</title>
</head>
<body>
    <header class="contenedor-header">
        <h1>Sistema de Gestión de Profesores</h1>
    </header>
    
    <main class="contenedor-main">
        <section class="formulario-section">
            <h2 id="formulario-titulo">Agregar Profesor</h2>
            
            <form id="formulario">
                <div>                    
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" required placeholder="Ingrese el nombre completo">

                    <label for="edad">Edad:</label>
                    <input type="number" id="edad" min="18" max="100" required placeholder="Edad">

                    <label for="materia">Materia:</label>
                    <input type="text" id="materia" required placeholder="Materia">
                </div>
                
                <div>
                    <button type="submit" id="btn-submit">
                        Agregar Profesor
                    </button>
                    <button type="button" id="btn-cancelar" style="display: none;">
                        Cancelar
                    </button>
                </div>
            </form>
        </section>
        
        <section class="profesores-section" >
            <h2 id="profesores-titulo">Lista de Profesores</h2>
            <div id="contenedor-profesores" class="profesores-grid">
            </div>
        </section>
    </main>
    
    <footer class="contenedor-footer">
        <p>&copy; Parcial 1 - 2025</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background-color: #f5f5f5;
    padding: 20px;
    margin: 0 auto;
    display: grid;
    grid-template-areas: 
        "header header"
        "main main"
        "footer footer";
    grid-template-columns: 1fr 2fr;
    gap: 20px;
}

.contenedor-header {
    grid-area: header;
}

.contenedor-main {
    grid-area: main;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
}

.contenedor-footer{
    grid-area: footer;
    text-align: center;
}

.formulario-section {
    background: white;
    padding: 30px;
}

.profesores-section {
    background: white;
    padding: 30px;
}

h1 {
    text-align: center;
}

h2 {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
}

button {
    background-color: #007bff;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.profesores-grid {
    display: grid;
    gap: 20px;
}

.profesor-card {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 20px;
}

.profesor-info h3 {
    margin-bottom: 10px;
}

.profesor-info p {
    margin: 5px 0;
}

.profesor-botones {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.btn-edit {
    background-color: #28a745;
    flex: 1;
}

.btn-delete {
    background-color: #dc3545;
    flex: 1;
}


const URL = 'http://localhost:3000/profesores';

let idEditar = null;

const formulario = document.getElementById('formulario');
const formularioTitulo = document.getElementById('formulario-titulo');

const btnSubmit = document.getElementById('btn-submit');
const btnCancelar = document.getElementById('btn-cancelar');

const inputNombre = document.getElementById('nombre');
const inputEdad = document.getElementById('edad');
const inputMateria = document.getElementById('materia');

const contenedorProfesores = document.getElementById('contenedor-profesores');

document.addEventListener('DOMContentLoaded', cargarProfesores);

// GET
async function cargarProfesores() {
    try {        
        const response = await fetch(URL);
        
        const profesores = await response.json();
        mostrarProfesores(profesores);
    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarProfesores(profesores) {
    if (profesores.length === 0) {
        contenedorProfesores.innerHTML = '<div>No hay profesores registrados</div>';
        return;
    }

    contenedorProfesores.innerHTML = "";

    profesores.forEach(profesor => {
        const article = document.createElement("article");
        article.className = "profesor-card";
        
        const infoDiv = document.createElement("div");
        infoDiv.className = "profesor-info";
        infoDiv.innerHTML = `
            <h3>${profesor.nombre}</h3>
            <p>Edad: ${profesor.edad} años</p>
            <p>Materia: ${profesor.materia}</p>
        `;
        
        const actionsDiv = document.createElement("div");
        actionsDiv.className = "profesor-botones";
        
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "btn-edit";
        btnEditar.onclick = () => editarProfesor(profesor.id);
        
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn-delete";
        btnEliminar.onclick = () => eliminarProfesor(profesor.id);
        
        actionsDiv.appendChild(btnEditar);
        actionsDiv.appendChild(btnEliminar);
        
        article.appendChild(infoDiv);
        article.appendChild(actionsDiv);
        
        contenedorProfesores.appendChild(article);
    });
}

// POST
async function agregarProfesor() {
    try {
        const nuevoProfesor = {
            nombre: inputNombre.value.trim(),
            edad: parseInt(inputEdad.value),
            materia: inputMateria.value.trim()
        };

        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProfesor)
        });

        formulario.reset();
        await cargarProfesores();
        
    } catch (error) {
        console.error('Error al agregar profesor:', error);
    }
}

async function editarProfesor(id) {
    try {
        const response = await fetch(`${URL}/${id}`);
        
        const profesor = await response.json();
        
        inputNombre.value = profesor.nombre;
        inputEdad.value = profesor.edad;
        inputMateria.value = profesor.materia;

        idEditar = id;
        formularioTitulo.textContent = 'Editar Profesor';
        btnSubmit.textContent = 'Actualizar Profesor';
        btnCancelar.style.display = 'inline-block';
        
    } catch (error) {
        console.error('Error al cargar datos del profesor:', error);
    }
}

// PUT
async function actualizarProfesor() {
    try {
        const profesorActualizado = {
            nombre: inputNombre.value.trim(),
            edad: parseInt(inputEdad.value),
            materia: inputMateria.value.trim()
        };

        const response = await fetch(`${URL}/${idEditar}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profesorActualizado)
        });

        cancelarEdicion();
        await cargarProfesores();
    } catch (error) {
        console.error('Error al actualizar profesor:', error);
    }
}

// DELETE
async function eliminarProfesor(id) {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        });

        await cargarProfesores();

    } catch (error) {
        console.error('Error al eliminar profesor:', error);
    }
}

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (idEditar) {
        await actualizarProfesor();
    } else {
        await agregarProfesor();
    }
});

btnCancelar.addEventListener('click', cancelarEdicion);

function cancelarEdicion() {
    idEditar = null;
    formulario.reset();
    formularioTitulo.textContent = 'Agregar Profesor';
    btnSubmit.textContent = 'Agregar Profesor';
    btnCancelar.style.display = 'none';
}
