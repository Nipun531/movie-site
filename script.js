const apiUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}';
const moviesContainer =  document.getElementById("movies");

async function fetchmovies(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.results.forEach(media =>{
            const movieCard = createMovieCard(media);
            moviesContainer.approachChild(movieCard);
        });

    }catch (error){
        console.error("error fetching data:",error);
        }
    }
    function createMovieCard(media) {
        const  { title, name, backdrop_path } = media;
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie_item")

        movieCard.innerHTML = `
        <img src="https://image.tmbd.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
            <div class = "title">${title || name}</div>
            <div class = "title">${release_date}</div>
            `;
            return movieCard;
    }
    fetchMovies();
        
