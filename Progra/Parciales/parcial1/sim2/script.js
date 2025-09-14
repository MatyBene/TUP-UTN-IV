const URL = "http://localhost:3001/dioses";

const btnListadoCompleto = document.getElementById("btn-listado-completo");
const btnNombreDominio = document.getElementById("btn-nombre-dominio");
const btnAgregar = document.getElementById("btn-agregar");

document.addEventListener('DOMContentLoaded', async () => {
    await cargarDioses();
});

function mostrarForm(formulario){
    const form = document.getElementById(formulario);

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

// GET: Cargar los dioses
function obtenerClasePoder(poder) {
    if (poder >= 9000) {
        return 'legendario';
    } else if (poder >= 95) {
        return 'supremo';
    } else if (poder >= 85) {
        return 'poderoso';
    } else {
        return '';
    }
}

function mostrarDioses(dioses, tipo = 'completo') {
    const diosesContainer = document.getElementById('dioses-container');
    diosesContainer.innerHTML = "";

    dioses.forEach(dios => {
        const clasePoder = obtenerClasePoder(dios.poder);
        
        const div = document.createElement("div");
        div.className = `dios-card ${clasePoder}`;
        
        const titulo = document.createElement("h4");
        titulo.textContent = dios.nombre;
        
        const infoSpan = document.createElement("span");
        
        switch(tipo) {
            case 'nombre':
                // Solo el título, no se agrega información adicional
                break;
            case 'dominio':
                infoSpan.innerHTML = `<p><strong>Dominio:</strong> ${dios.dominio}</p>`;
                break;
            case 'simbolo':
                infoSpan.innerHTML = `<p><strong>Símbolo:</strong> ${dios.simbolo}</p>`;
                break;
            case 'ciudad':
                infoSpan.innerHTML = `<p><strong>Dominio:</strong> ${dios.dominio}</p>
                                     <p><strong>Símbolo:</strong> ${dios.simbolo}</p>
                                     <p><strong>Ciudad:</strong> ${dios.ciudad}</p>
                                     <p><strong>Poder:</strong> ${dios.poder}</p>`;
                break;
            case 'poder':
                infoSpan.innerHTML = `<p><strong>Poder:</strong> ${dios.poder}</p>`;
                break;
            default:
                infoSpan.innerHTML = `<p><strong>Dominio:</strong> ${dios.dominio}</p>
                                     <p><strong>Símbolo:</strong> ${dios.simbolo}</p>
                                     <p><strong>Ciudad:</strong> ${dios.ciudad}</p>
                                     <p><strong>Poder:</strong> ${dios.poder}</p>`;
        }
        
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.className = "btn-editar";
        btnEditar.onclick = () => rellenarEditar(dios.id);

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn-eliminar";
        btnEliminar.onclick = () => eliminarDios(ext.id);
        
        div.appendChild(titulo);
        if (infoSpan.innerHTML) {
            div.appendChild(infoSpan);
        }
        div.appendChild(btnEditar);
        div.appendChild(btnEliminar);

        diosesContainer.appendChild(div);
    });
}

async function cargarDioses(tipo){
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }

        const dioses = await response.json();

        mostrarDioses(dioses, tipo);        

    } catch (error) {
        console.error('Error al cargar dioses:', error);
    }
}

// POST: Agregar un dios



btnListadoCompleto.addEventListener("click", () => cargarDioses());
btnNombreDominio.addEventListener("click", () => cargarDioses('dominio'));
btnAgregar.addEventListener("click", () => mostrarForm('agregar'));