import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Films from './components/Films';
import FilmEntry from "./components/FilmEntry.jsx";
import PersonEntry from "./components/PersonEntry.jsx";
import People from './components/People.jsx';


const App = () => {
    
    
    // const [showFilms, setShowFilms] = React.useState(false);
    // const [showPeople, setShowPeople] = React.useState(false);

    //function that handles the conditional rendering logic using the showFilms/People state variables
    // const renderingSwitch = () =>
    // {
    //     if(showFilms)
    //     {
            
    //     if(showPeople)
    //     //return (<h1>*Placeholder for the people list*</h1>);
    //     {
    //         return people.map(person => {
    //             return <PersonEntry
    //                 key = {person.id}
    //                 name = {person.name}
    //                 age = {person.age}
    //                 gender = {person.gender}
    //                 link = {person.url}>
    //             </PersonEntry>
    //         })
    //     }
    // }

    // const handleFilmsButtonClick = () => {
    //     setShowFilms(true);
    //     setShowPeople(false);
    // }

    // const handlePeopleButtonClick = () => {
    //     setShowPeople(true);
    //     setShowFilms(false);
    // }


    //Retrieive both films and people info from their respective endpoints when the page first loads
    // useEffect(() => {
    //     // fetch("https://ghibliapi.herokuapp.com/films")
    //     // .then(response => {
    //     //     return response.json();
    //     // })
    //     // .then((films) =>
    //     // { //console.log(films)
    //     //     setFilms(films);
    //     // })
    //     // .catch(error => console.log(error));

    //     fetch("https://ghibliapi.herokuapp.com/people")
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(people => {
    //         setPeople(people);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });

    // }, []);

    return(
        <>
            <BrowserRouter>
                <NavBar/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/films" element={<Films/>}/>
                        <Route path="/people" element={<People/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
            {/* <div className="d-flex justify-content-center">
                <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli API Logo"></img>
            </div>
            
            <h1 className="text-center">Studio Ghibli Films And People</h1>

            <div className="d-flex justify-content-around">
                <button className="btn btn-primary" onClick={handleFilmsButtonClick}>Show Films</button>
                <button className="btn btn-primary" onClick={handlePeopleButtonClick}>Show People</button>
            </div>
            
            <div className="row justify-content-between">
                {renderingSwitch()}
            </div> */}
            
        </>
    );
}

export default App;