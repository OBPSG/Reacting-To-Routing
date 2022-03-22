import React from "react";
import { Link } from 'react-router-dom';

const PersonEntry = (props) => {
    return (
    <div className="card my-2 col-5">
        <h1 className="card-title text-center">{props.name}</h1>
        <h2 className="text-center">Age: {props.age}</h2>
        <h2 className="text-center">Gender: {props.gender}</h2>
        <div className="d-flex justify-content-center"><Link to={`/people/${props.id}`} className="btn btn-secondary w-25 m-2">See Details</Link></div>
        
    </div>
    );}
    

export default PersonEntry;