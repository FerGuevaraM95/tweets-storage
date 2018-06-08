// VARIABLES
const listTweets = document.querySelector('#list-tweets');
const form = document.querySelector('#form');



// EVENT LISTENERS
eventListeners();

function eventListeners() {
    // Cuando se envia el formulario
    form.addEventListener('submit', agregarTweet);
    // Borrar Tweets
    listTweets.addEventListener('click', deleteTweet);
}


// FUNCIONES
// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    // Leer el valor del textarea
    const tweet = document.querySelector('#tweet').value;
    // Crear el elemento y agregar el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // Crear botón de eliminar
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'delete-tweet';
    deleteButton.innerText = 'X'
    // Añade el botón de borrar al tweet
    li.appendChild(deleteButton);
    // Añade el tweet a la lista
    listTweets.appendChild(li);

    // Añadir a Local Storage
    addTweetLocalStorage(tweet);
}

// Eliminar tweet del DOM
function deleteTweet(e) {
    e.preventDefault();
    if(e.target.className === 'delete-tweet') {
        console.log(e.target.parentElement.remove());
        alert('Tweet Eliminado');
    }
}

// Agregar tweet a Local Storage
function addTweetLocalStorage(tweet) {
    let tweets;
    tweets = getTweetsLocalStorage();
    // Añadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a array para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Obtener tweets de Local Storage
function getTweetsLocalStorage() {
    let tweets;
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets.JSON.pase(localStorage.getItem('tweets'));
    }
    return tweets;
}
