import React from "react";

const PersonEntry = (props) => {
    return (
    <div className="card my-2 col-5">
        <h1 className="card-title text-center">{props.name}</h1>
        <h2 className="text-center">Age: {props.age}</h2>
        <h2 className="text-center">Gender: {props.gender}</h2>
        <div className="d-flex justify-content-center"><a href={props.link} target="blank" className="btn btn-secondary w-25 m-2">See Details</a></div>
        
    </div>
    );}
    

export default PersonEntry;