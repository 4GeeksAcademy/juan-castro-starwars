import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const VehicleDetails = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div>
            <h1>Detalles de {store.currentVehicleDetails.name}</h1> <br />
            <h4>Nombre:  {store.currentVehicleDetails.name}</h4>
            <h4>Modelo:  {store.currentVehicleDetails.model}</h4>
            <h4>Manufactura:  {store.currentVehicleDetails.manufacturer}</h4>
            <h4>pasajeros:  {store.currentVehicleDetails.passengers}</h4> 
            <h4>Valor de compra:  {store.currentVehicleDetails.cost_in_credits}</h4>
            <h4>velocidad en atmosfera:  {store.currentVehicleDetails.max_atmosphering_speed}</h4>
            <h4>Capacidad de carga:  {store.currentVehicleDetails.cargo_capacity}</h4>
        </div>
    );

    useEffect(() => {
        return () => {
            dispatch({ type: clean_vehicle_details })
        }
    }, []);
}

export default VehicleDetails;