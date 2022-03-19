import React from "react";

const FilmEntry = (props) => {
    return(
        <div className="col-5 card m-2">
            <img className="card-img-top" src={props.movieBanner} alt="movie banner"></img>
            <h1 className="card-title">{props.movieTitle}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default FilmEntry;