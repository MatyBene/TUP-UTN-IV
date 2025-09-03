//Ejercicio 1
let mensaje = document.getElementById('mensaje');
mensaje.textContent = 'Hola Lucrecia'; 


//Ejercicio 2
mensaje.addEventListener('click', () => {
  mensaje.style.backgroundColor = 'lightgreen';
  mensaje.style.color = 'white';
  mensaje.style.padding = '10px';
  mensaje.style.borderRadius = '5px';
})

//Ejercicio 3
let lista = document.getElementById('lista');
let btnAgregar = document.getElementById('btnAgregar');
let btnEliminar = document.getElementById('btnEliminar');

btnAgregar.addEventListener('click', () => {
  const nuevoLi = document.createElement('li');
  nuevoLi.textContent = 'Nuevo elemento';
  lista.appendChild(nuevoLi);
});

btnEliminar.addEventListener('click', () => {
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
  }
})


//Ejercicio 4
const listaResultados = document.getElementById('listaResultados');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const n = nombre.value.trim();
  const e = email.value.trim();

  if (n === '' || e === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `Nombre: ${n} | Email: ${e}`;
  
  listaResultados.appendChild(li);

  formulario.reset(); 
});