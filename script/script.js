let container = document.querySelector('.container');
let recherche = document.getElementById('recherche');
let validChoix = document.getElementById('validChoix');
let nav = document.querySelector('.nav');

validChoix.addEventListener('click', getFilms);

function getFilms(){
    displayFilm()
}



async function displayFilm (url){
    container.innerHTML = '';
    nav.innerHTML = '';
    if (!url) {
        url = `http://www.omdbapi.com?apikey=54e93cf8&s=${recherche.value}`;
    };
    const reponse = await fetch(url);
    const films = await reponse.json();

    console.log(films);
    films.Search.map((film) => {
        container.innerHTML += `<div class="card"> <img src=${film.Poster} class="cardImg"/><p class="text">${film.Title} sortie en ${film.Year}</p></div>`;
    });

    if (films.info.prev) {
        createPrevButton(films.info.prev);
    };
    if (films.info.next) {
        createNextButton(films.info.next);
    };
};
function createNextButton(url) {
    nav.innerHTML += `<button class="right-0 absolute" onclick="displayFilm('${url}')">Next</button>`;
};

function createPrevButton(url) {
    nav.innerHTML += `<button class="right-0 absolute" onclick="displayFilm('${url}')">Prev</button>`;
};

