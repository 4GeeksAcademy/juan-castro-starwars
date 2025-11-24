import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const Starwars = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const handlerGoToDetails = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            data.result.properties
            console.log(data);
            dispatch({ type: "set_people_details", payload: data.result.properties });
            navigate(`/PeopleDetails`);

        } catch (error) {
            console.error("Error data:", error);
        }
    };

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
                console.log(data);

            } catch (error) {
                console.error("Error data:", error);
            }
        };
        getPeople();

    }
        , []);

    return (
        <div>
            <h1>Personajes</h1>
            <div className="cards-container">
                {
                    store.people.length > 0 &&
                    store.people.map((ele) => {
                        return (
                            <div className="card" style={{ width: "18rem" }} key={ele.uid}>
                                <img src="https://placehold.org/400x200/000000/ffffff" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <a href="#" className="btn btn-primary" onClick={() => handlerGoToDetails(ele.url)} >Learn More</a>

                                </div>
                            </div>


                        );
                    }
                    )

                }
            </div>
        </div>
    );
}

export default Starwars;