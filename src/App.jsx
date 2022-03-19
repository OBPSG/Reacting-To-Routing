import React from "react";
import { useEffect, useState } from "react";
import FilmEntry from "./components/FilmEntry.jsx";

const App = () => {
    const [films, setFilms] = React.useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => {
            return response.json();
        })
        .then((films) =>
        { //console.log(films)
            setFilms(films);
        });
    }, []);

    return(
        <div>
            <div className="d-flex justify-content-center">
                <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli API Logo"></img>
            </div>
            
            <h1 className="text-center">Studio Ghibli Films And People</h1>
            <div class="row">
                {films.map((film) => {
                return <FilmEntry movieBanner={film.movie_banner}
                movieTitle = {film.title}
                description = {film.description}>    
                </FilmEntry>
                
                })}
            </div>
            
        </div>
    );
}

export default App;