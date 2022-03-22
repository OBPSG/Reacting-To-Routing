import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const FilmDetails = (props) => {
    const [film, setFilm] = useState(null);
    const {filmID} = useParams();

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films/" + filmID)
            .then(response => {
                return response.json();
            })
            .then(film => {
                setFilm(film);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    return(
        <>
            <h1>{film?.title}</h1>
            <h2>Original Title: {film?.original_title}</h2>
            <h2>Directed By: {film?.director}</h2>
            <h2>Produced By: {film?.producer}</h2>
            <h3>Released in the year of: {film?.release_date} - Running Time: {film?.running_time} minutes</h3>
            <h3>Score on Rotten Tomatoes: {film?.rt_score}</h3>
            <p>Full Description: {film?.description}</p>
            <p>Link to Raw JSON: <a href={film?.url} target="blank">{film?.url}</a></p>
        </>
    );
}

export default FilmDetails;