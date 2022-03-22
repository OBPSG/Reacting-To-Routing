import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonEntry from "./PersonEntry.jsx";

const People = () => {

    const [people, setPeople] = React.useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => {
                return response.json();
            })
            .then(people => {
                setPeople(people);
            })
            .catch(error => {
                console.log(error)
            });

    }, []);


    return (
        <>
            <div className="row">
                {people.map(person => {
                    return <PersonEntry
                        key={person?.id}
                        id={person?.id}
                        name={person?.name}
                        age={person?.age}
                        gender={person?.gender}
                        link={person?.url}>
                    </PersonEntry>
                })}
            </div>
        </>
    )
}

export default People;