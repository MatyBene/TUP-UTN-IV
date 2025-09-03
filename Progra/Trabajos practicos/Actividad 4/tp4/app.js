// 1
let msg = document.getElementById('mensaje');
msg.textContent = 'Hola Matias'; 


// 2
msg.addEventListener('click', () => {
    msg.style.backgroundColor = 'red';
    msg.style.color = 'black';
})

// 3
let list = document.getElementById('lista');
let btnAdd = document.getElementById('btnAgregar');
let btnDelete = document.getElementById('btnEliminar');

btnAdd.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'Nuevo elemento';
    list.appendChild(nuevoLi);
});

btnDelete.addEventListener('click', () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
})


// 4
const resultsList = document.getElementById('listaResultados');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = nombre.value.trim();
    const e = email.value.trim();

    if (name === '' || e === '') {
        alert(name === '' ? 'Completar el nombre.' : 'Completar el email.');
        return;
    }   

    const li = document.createElement('li');
    li.textContent = `Nombre: ${name} | Email: ${e}`;

    listaResultados.appendChild(li);

    formulario.reset(); 
});