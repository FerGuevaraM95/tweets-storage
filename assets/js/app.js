// VARIABLES
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');



// EVENT LISTENERS
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    formulario.addEventListener('submit', agregarTweet);
}


// FUNCIONES
// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    // Leer el valor del textarea
    const tweet = document.querySelector('#tweet').value;
    // Crear botón de eliminar
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'delete-tweet';
    deleteButton.innerText = 'X'
    // Crear el elemento y agregar el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // Añade el botón de borrar al tweet
    li.appendChild(deleteButton);
    // Añade el tweet a la lista
    listaTweets.appendChild(li);

    console.log(tweet);
}
