import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const PlanetDetails = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div>
            <h1>Detalles de {store.currentPlanetDetails.name}</h1> <br />
            <h4>Name:  {store.currentPlanetDetails.name}</h4>
            <h4>Clima:  {store.currentPlanetDetails.climate}</h4>
            <h4>Agua en la superficie:  {store.currentPlanetDetails.surface_water}</h4>
            <h4>Diametro:  {store.currentPlanetDetails.diameter}</h4>
            <h4>Periodo de rotacion:  {store.currentPlanetDetails.rotation_period}</h4>
            <h4>Periodo de orbita:  {store.currentPlanetDetails.orbital_period}</h4>
            <h4>Poblacio:  {store.currentPlanetDetails.population}</h4>
        </div>
    );
    useEffect(() => {
        return () => {
            dispatch({ type: clean_planet_details })
        }
    }, []);
}

export default PlanetDetails;