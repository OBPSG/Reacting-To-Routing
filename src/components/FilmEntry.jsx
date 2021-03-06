import React from "react";
import { Link } from "react-router-dom";

const FilmEntry = (props) => {
    return (
        <div className="col-5 mx-2 my-3 card">
            <img className="card-img-top" src={props.movieBanner} alt="movie banner"></img>
            <h1 className="card-title">{props.movieTitle}</h1>
            <p>{props.description.substring(0, 50) + "..."}</p>
            <Link to={`/films/${props.id}`} className="btn btn-secondary">See Details...</Link>
        </div>
    )
}

export default FilmEntry;