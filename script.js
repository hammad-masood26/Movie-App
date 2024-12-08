getMovie = () => {
    let movie_name = document.getElementById("movies").value;
    let API_key = "75eee2846a7a7cea7c76c47bc2e2b574";

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_key}&query=${movie_name}`)
        .then(function (response) {
            // handle success
            console.log(response);
            document.querySelector("#name").innerHTML = `Movie Name: ${response.data.results[0].title}`;
            document.querySelector("#pic").src = `https://image.tmdb.org/t/p/w200${response.data.results[0].poster_path}`;
            document.querySelector("#overview").innerHTML = `Overview: ${response.data.results[0].overview}`;
            document.querySelector("#date").innerHTML = `Release Date: ${response.data.results[0].release_date}`;
        })
        .catch(function (error) {
            // handle error
            console.log(error.message);
            document.querySelector("#name").innerHTML = `Movie Not Found`
            document.querySelector("#pic").src = "";
            document.querySelector("#overview").innerHTML = "";
            document.querySelector("#date").innerHTML = "";
        })

}
