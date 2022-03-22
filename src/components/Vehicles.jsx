import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [featuredFilm, setFeaturedFilm] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/vehicles")
            .then(res => { return res.json() })
            .then(data => setVehicles(data))
            .catch((err) => console.log(err))
            // .then(() =>{
            //     vehicles.forEach((vehicle) => {
            //         fetch(vehicle.films[0])
            //             .then(res => res.json())
            //             .then(data => {
            //                 console.log(data);
            //                 setFeaturedFilm(featuredFilm.concat(data));
            //             }) 
            //     })
            .catch(err => { console.log(err); });;
    }, []);



    return (<>
        {vehicles.map((vehicle, idx) => {
            return (
                <div className="card my-2 mx-2 col-5">
                    <h1 className="card-title">{vehicle?.name}</h1>
                    <h2>{vehicle?.vehicle_class}</h2>
                    <h2>Length: {vehicle?.length}</h2>
                    {/* <h2>Featured In: {featuredFilm[idx].title}</h2> */}
                    <p>{vehicle?.description}</p>
                </div>
            )
        }
        )}
    </>);
}

export default Vehicles;