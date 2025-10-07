const inputNombre = document.getElementById('nombreInput');
const btnRegistrar = document.getElementById('registrarBtn');
const listaNombres = document.getElementById('nombresLista');


btnRegistrar.addEventListener('click', () => {
const nombre = inputNombre.value.trim();
if (nombre === '') {
alert('Por favor, escribe un nombre.');
return;
}


const li = document.createElement('li');
li.textContent = nombre;
listaNombres.appendChild(li);


inputNombre.value = '';
});