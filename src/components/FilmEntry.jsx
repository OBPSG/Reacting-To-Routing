import React from "react";

const FilmEntry = (props) => {
    return (
        <div className="col-5 mx-2 my-3 card">
            <img className="card-img-top" src={props.movieBanner} alt="movie banner"></img>
            <h1 className="card-title">{props.movieTitle}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default FilmEntry;