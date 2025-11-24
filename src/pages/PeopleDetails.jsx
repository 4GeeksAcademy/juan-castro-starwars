import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const PeopleDetails = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div>
            <h1>Detalles de Personajes</h1> <br />
            <h4>{store.currentPeopleDetails.name}</h4>
            <h4>Gender:  {store.currentPeopleDetails.gender}</h4>
            <h4>Hair Color:  {store.currentPeopleDetails.hair_color}</h4>
            <h4>Eye Color:  {store.currentPeopleDetails.eye_color}</h4>
        </div>
    );
    useEffect(() => {
        return () => {
            dispatch({ type: clean_people_details })
        }
    }, []);
}

export default PeopleDetails;
