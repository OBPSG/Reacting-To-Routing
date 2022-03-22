import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const PersonDetails = (props) => {

    const [person, setPerson] = useState(null);
    const { personID } = useParams();

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people/" + personID)
            .then(response => {
                return response.json();
            })
            .then(person => {
                setPerson(person);
            })
            .catch(error => {
                console.log(error)
            });

    }, []);

    return (
        <>
            <h1>{person?.name}</h1>
            <h2>{person?.age}, {person?.gender}</h2>
            <h2>Eye Color: {person?.eye_color} - Hair Color: {person?.hair_color} </h2>
            <p>Link to Raw JSON: <a href={person?.url} target="blank">{person?.url}</a></p>
        </>
    )
}

export default PersonDetails;