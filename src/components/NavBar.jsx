import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <Link to="/" className="btn btn-primary">Home</Link>
                <Link to="/films" className="btn btn-primary">Show Films</Link>
                <Link to="/people" className="btn btn-primary">Show People</Link>
            </div>
        </>
    )
}

export default NavBar;