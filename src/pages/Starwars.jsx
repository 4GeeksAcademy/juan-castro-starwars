import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const Starwars = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const handlerGoToDetails = async (url, type) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            data.result.properties
            console.log(data);
            if (type === "people") {
                dispatch({ type: "set_people_details", payload: data.result.properties });
                navigate(`/PeopleDetails`);
            } else if (type === "planet") {
                dispatch({ type: "set_planet_details", payload: data.result.properties });
                navigate(`/PlanetDetails`);
            }

        } catch (error) {
            console.error("Error data:", error);
        }
    };

    const handlerMovePeople = async (que) => {
        try {
            let url = "";
            if (que === "sig") {
                if (!store.data_people?.next) {
                    alert("No hay mas paginas Siguientes");
                    return;
                }
                url = store.data_people.next;
            } else {
                if (!store.data_people?.previous) {
                    alert("No hay mas paginas Anteriores");
                    return;
                }
                url = store.data_people.previous;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            dispatch({ type: "data_people", payload: data });

        } catch (error) {
            console.error(error);
        }
    };

    const handlerMovePlanet = async (que) => {
        try {
            let url = "";
            if (que === "sig") {
                if (!store.data_planet?.next) {
                    alert("No hay mas paginas Siguientes");
                    return;
                }
                url = store.data_planet.next;
            } else {
                if (!store.data_planet?.previous) {
                    alert("No hay mas paginas Anteriores");
                    return;
                }
                url = store.data_planet.previous;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            dispatch({ type: "data_planet", payload: data });

        } catch (error) {
            console.error(error);
        }
    };

    // para people
    useEffect(() => {
        const getPeople = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/people/");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                data.results

                dispatch({ type: "save_people_list", payload: data.results });
                dispatch({ type: "data_people", payload: data });
                console.log(data);

            } catch (error) {
                console.error("Error data:", error);
            }
        };
        getPeople();

    }
        , []);
    // #para planetas
    useEffect(() => {
        const getPlanet = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/planets/");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                data.results

                dispatch({ type: "save_planet_list", payload: data.results });
                dispatch({ type: "data_planet", payload: data });
                console.log(data);

            } catch (error) {
                console.error("Error data:", error);
            }
        };
        getPlanet();

    }
        , []);

    return (
        <div>
            <h1>Personajes</h1>
            <button onClick={() => handlerMovePeople('prev')}>Previos</button>
            <button onClick={() => handlerMovePeople('sig')}>Siguientes</button>
            <div className="cards-container">
                {console.log("STORE:", store)}
                {
                    store.data_people?.results?.length > 0 &&
                    store.data_people.results.map((ele) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={ele.uid}>
                                <img src="https://placehold.org/400x200/000000/ffffff" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <a href="#" className="btn btn-primary" onClick={() => handlerGoToDetails(ele.url, "people")} >Learn More!!</a>
                                </div>

                            </div>
                        );
                    })

                }
            </div>
            <h1>Planetas</h1>
            <button onClick={() => handlerMovePlanet('prev')}>Previos</button>
            <button onClick={() => handlerMovePlanet('sig')}>Siguientes</button>
            <div className="cards-container">
                {console.log("STORE:", store)}
                {
                    store.data_planet?.results?.length > 0 &&
                    store.data_planet.results.map((ele) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={ele.uid}>
                                <img src="https://placehold.org/400x200/000000/ffffff" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <a href="#" className="btn btn-primary" onClick={() => handlerGoToDetails(ele.url, "planet")} >Learn More!!</a>
                                </div>

                            </div>
                        );
                    })
                }
            </div>

        </div>
    );

};

export default Starwars;