import React from "react";
import { useEffect, useState } from "react";
import FilmEntry from "./FilmEntry";

const Films = () => {
    const [films, setFilms] = React.useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => {
                return response.json();
            })
            .then((films) => { //console.log(films)
                setFilms(films);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div className="row">
                {films.map((film) => {
                    return (
                        <FilmEntry
                            key={film?.id}
                            movieBanner={film?.movie_banner}
                            movieTitle={film?.title}
                            description={film?.description}>
                        </FilmEntry>
                    )
                })}
            </div>
        </>
    )
}

export default Films;