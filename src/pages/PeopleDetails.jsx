import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const PeopleDetails = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div>
            <h1>Detalles de {store.currentPeopleDetails.name}</h1> <br />
            <h4>Nombre:  {store.currentPeopleDetails.name}</h4>
            <h4>Genero:  {store.currentPeopleDetails.gender}</h4>
            <h4>Color Pelo:  {store.currentPeopleDetails.hair_color}</h4>
            <h4>Color De Ojos:  {store.currentPeopleDetails.eye_color}</h4>
        </div>
    );
    useEffect(() => {
        return () => {
            dispatch({ type: clean_people_details })
        }
    }, []);
}

export default PeopleDetails;
