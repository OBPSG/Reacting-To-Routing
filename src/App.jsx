import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Films from './components/Films';
import FilmEntry from "./components/FilmEntry.jsx";
import FilmDetails from "./components/FilmDetails.jsx";
import PersonEntry from "./components/PersonEntry.jsx";
import People from './components/People.jsx';
import PersonDetails from './components/PersonDetails';
import Vehicles from "./components/Vehicles";


const App = () => {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/films/:filmID" element={<FilmDetails />}></Route>
                        <Route path="/films" element={<Films />} />
                        <Route path="/people/:personID" element={<PersonDetails />}></Route>
                        <Route path="/people" element={<People />} />
                        <Route path="/vehicles" element={<Vehicles />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;