// Configuración de la API
const API_URL = 'http://localhost:3000/dioses';

// Variables globales
let dioses = [];
let editandoDios = null;

// Elementos del DOM
const diosForm = document.getElementById('diosForm');
const diosesList = document.getElementById('diosesList');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const mostrarTodosBtn = document.getElementById('mostrarTodosBtn');
const mostrarSimpleBtn = document.getElementById('mostrarSimpleBtn');
const atributoInput = document.getElementById('atributoInput');
const buscarAtributoBtn = document.getElementById('buscarAtributoBtn');

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', async () => {
    await cargarDioses();
    configurarEventListeners();
});

// Configurar event listeners
function configurarEventListeners() {
    diosForm.addEventListener('submit', manejarSubmitFormulario);
    cancelBtn.addEventListener('click', cancelarEdicion);
    mostrarTodosBtn.addEventListener('click', () => mostrarDioses());
    mostrarSimpleBtn.addEventListener('click', mostrarDiosesSimple);
    buscarAtributoBtn.addEventListener('click', buscarPorAtributo);
    atributoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') buscarPorAtributo();
    });
}

// ================== OPERACIÓN GET ==================
async function cargarDioses() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error al cargar dioses: ${response.status}`);
        }
        dioses = await response.json();
        mostrarDioses();
    } catch (error) {
        console.error('Error al cargar dioses:', error);
        mostrarError('Error al cargar los dioses. Asegúrate de que json-server esté ejecutándose.');
    }
}

// Mostrar dioses en el DOM con clases según nivel de poder
function mostrarDioses(diosesAMostrar = dioses) {
    diosesList.innerHTML = '';

    if (diosesAMostrar.length === 0) {
        diosesList.innerHTML = '<p style="text-align: center; color: #666;">No hay dioses para mostrar.</p>';
        return;
    }

    diosesAMostrar.forEach(dios => {
        const diosCard = crearDiosCard(dios);
        diosesList.appendChild(diosCard);
    });
}

// Crear tarjeta de dios con la clase CSS correspondiente
function crearDiosCard(dios) {
    const div = document.createElement('div');
    div.className = `dios-card ${obtenerClasePoder(dios.poder)}`;
    div.dataset.id = dios.id;

    div.innerHTML = `
        <div class="dios-header">
            <span class="dios-name">${dios.nombre}</span>
            <span class="dios-poder">${dios.poder}</span>
        </div>
        <div class="dios-info">
            <p><strong>Dominio:</strong> ${dios.dominio}</p>
            <p><strong>Símbolo:</strong> ${dios.simbolo}</p>
            <p><strong>Ciudad:</strong> ${dios.ciudad}</p>
            <p><strong>ID:</strong> ${dios.id}</p>
        </div>
        <div class="dios-actions">
            <button class="btn-editar" onclick="editarDios('${dios.id}')">Editar</button>
            <button class="btn-eliminar" onclick="eliminarDios('${dios.id}')">Eliminar</button>
        </div>
    `;

    return div;
}

// Obtener clase CSS según el nivel de poder
function obtenerClasePoder(poder) {
    if (poder >= 9000) return 'legendario';
    if (poder >= 95) return 'supremo';
    if (poder >= 85) return 'poderoso';
    return ''; // Clase por defecto
}

// ================== OPERACIÓN POST ==================
async function manejarSubmitFormulario(e) {
    e.preventDefault();

    // Validar campos
    if (!validarFormulario()) {
        return;
    }

    const diosData = obtenerDatosFormulario();

    try {
        if (editandoDios) {
            // Actualizar dios existente (PUT)
            await actualizarDios(editandoDios, diosData);
        } else {
            // Crear nuevo dios (POST)
            await crearDios(diosData);
        }
        
        limpiarFormulario();
        await cargarDioses(); // Recargar la lista
    } catch (error) {
        console.error('Error al procesar formulario:', error);
        mostrarError('Error al procesar la solicitud. Inténtalo de nuevo.');
    }
}

// Validar que todos los campos estén completos
function validarFormulario() {
    const campos = ['nombre', 'dominio', 'simbolo', 'poder', 'ciudad'];
    
    for (const campo of campos) {
        const elemento = document.getElementById(campo);
        if (!elemento.value.trim()) {
            mostrarError(`El campo ${campo} es obligatorio.`);
            elemento.focus();
            return false;
        }
    }

    const poder = parseInt(document.getElementById('poder').value);
    if (poder < 1 || poder > 10000) {
        mostrarError('El poder debe estar entre 1 y 10000.');
        document.getElementById('poder').focus();
        return false;
    }

    return true;
}

// Obtener datos del formulario
function obtenerDatosFormulario() {
    return {
        nombre: document.getElementById('nombre').value.trim(),
        dominio: document.getElementById('dominio').value.trim(),
        simbolo: document.getElementById('simbolo').value.trim(),
        poder: parseInt(document.getElementById('poder').value),
        ciudad: document.getElementById('ciudad').value.trim()
    };
}

// Crear nuevo dios
async function crearDios(diosData) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diosData)
    });

    if (!response.ok) {
        throw new Error(`Error al crear dios: ${response.status}`);
    }

    console.log('Dios creado exitosamente');
}

// ================== OPERACIÓN PUT ==================
async function editarDios(id) {
    const dios = dioses.find(d => d.id == id);
    if (!dios) {
        mostrarError('Dios no encontrado.');
        return;
    }

    // Rellenar formulario con datos del dios
    document.getElementById('diosId').value = dios.id;
    document.getElementById('nombre').value = dios.nombre;
    document.getElementById('dominio').value = dios.dominio;
    document.getElementById('simbolo').value = dios.simbolo;
    document.getElementById('poder').value = dios.poder;
    document.getElementById('ciudad').value = dios.ciudad;

    // Cambiar estado del formulario a modo edición
    editandoDios = id;
    submitBtn.textContent = 'Actualizar Dios';
    cancelBtn.style.display = 'inline-block';

    // Scroll al formulario
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

// Actualizar dios existente
async function actualizarDios(id, diosData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...diosData, id: id })
    });

    if (!response.ok) {
        throw new Error(`Error al actualizar dios: ${response.status}`);
    }

    console.log('Dios actualizado exitosamente');
}

// Cancelar edición
function cancelarEdicion() {
    limpiarFormulario();
}

// ================== OPERACIÓN DELETE ==================
async function eliminarDios(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar este dios?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar dios: ${response.status}`);
        }

        console.log('Dios eliminado exitosamente');
        await cargarDioses(); // Recargar la lista
    } catch (error) {
        console.error('Error al eliminar dios:', error);
        mostrarError('Error al eliminar el dios. Inténtalo de nuevo.');
    }
}

// ================== FUNCIONALIDAD NOMBRE Y DOMINIO ==================
function mostrarDiosesSimple() {
    diosesList.innerHTML = '';

    if (dioses.length === 0) {
        diosesList.innerHTML = '<p style="text-align: center; color: #666;">No hay dioses para mostrar.</p>';
        return;
    }

    dioses.forEach(dios => {
        const div = document.createElement('div');
        div.className = 'dios-simple';
        div.innerHTML = `
            <h3>${dios.nombre}</h3>
            <p>${dios.dominio}</p>
        `;
        diosesList.appendChild(div);
    });
}

// ================== BÚSQUEDA POR ATRIBUTO ==================
function buscarPorAtributo() {
    const atributo = atributoInput.value.trim().toLowerCase();
    
    if (!atributo) {
        mostrarError('Por favor, ingresa un atributo para buscar.');
        return;
    }

    // Validar que el atributo existe
    const atributosValidos = ['nombre', 'dominio', 'simbolo', 'poder', 'ciudad', 'id'];
    
    if (!atributosValidos.includes(atributo)) {
        mostrarError(`Atributo "${atributo}" no encontrado. Atributos válidos: ${atributosValidos.join(', ')}`);
        return;
    }

    // Mostrar solo los valores de ese atributo
    diosesList.innerHTML = '';
    
    dioses.forEach(dios => {
        const div = document.createElement('div');
        div.className = 'atributo-item';
        
        const valor = dios[atributo];
        div.textContent = `${dios.nombre}: ${valor}`;
        
        diosesList.appendChild(div);
    });
}

// ================== FUNCIONES AUXILIARES ==================
// Limpiar formulario
function limpiarFormulario() {
    diosForm.reset();
    document.getElementById('diosId').value = '';
    editandoDios = null;
    submitBtn.textContent = 'Agregar Dios';
    cancelBtn.style.display = 'none';
}

// Mostrar mensaje de error
function mostrarError(mensaje) {
    // Eliminar mensaje de error anterior si existe
    const errorAnterior = document.querySelector('.error-message');
    if (errorAnterior) {
        errorAnterior.remove();
    }

    // Crear nuevo mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = mensaje;

    // Insertar al inicio del contenedor de dioses
    diosesList.insertBefore(errorDiv, diosesList.firstChild);

    // Eliminar el mensaje después de 5 segundos
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}
