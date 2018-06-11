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
    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageReady);
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
        e.target.parentElement.remove();
        deleteTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// Mostrar datos de Local Storage en la Lista
function localStorageReady() {
    let tweets;
    tweets = getTweetsLocalStorage();

    tweets.forEach(function(tweet) {
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
    });
}

// Agregar tweet a Local Storage
function addTweetLocalStorage(tweet) {
    let tweets;
    tweets = getTweetsLocalStorage();
    // Añadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar que haya elementos en localstorage, retorna un arreglo
function getTweetsLocalStorage() {
    let tweets;
    // Revisamos los valoes de local storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

// Eliminar tweet de Local Storage
function deleteTweetLocalStorage(tweet) {
    let tweets, tweetDelete;
    // Eliminar la X del tweet
    tweetDelete = tweet.substring(0, tweet.length -1);

    tweets = getTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if(tweetDelete === tweet) {
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
