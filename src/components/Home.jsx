import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli API Logo"></img>
            </div>

            <h1 className="text-center">Studio Ghibli API with Routing</h1>
        </>
    )
}

export default Home;