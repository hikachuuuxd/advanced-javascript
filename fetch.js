/* Api pada js modern */

const search = document.getElementById('search-button')
search.addEventListener('click', async function(){
    let input = document.getElementById('search-input').value
    let movies = await getMovie(input)
    showMovie(movies)
})

function getMovie(input){
    
    return fetch('http://www.omdbapi.com/?apikey=5ba8bf5e&s=' + input)
        .then(res => res.json())
        .then(res => res.Search)
}

function showMovie(getMovie){
    let value = ''
    getMovie.forEach(movie =>  value += show(movie) )
    const card = document.getElementById('movie-list')
     card.innerHTML = value
}

function show(movie){
    return `<div class="col">
    <div class="card" style="width: 18rem;">
    <img src="`+ movie.Poster +`" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${movie.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
        <a href="#" class="">See detail</a>
        </div>
    </div>
    </div>`
}
