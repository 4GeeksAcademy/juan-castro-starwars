import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Starwars = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const getPeople = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/people/");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                data.results

                dispatch({ type: "save_people_list", payload:data.results});
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
            {
                store.people.length > 0 &&
                store.people.map((ele) => {
                    return (
                        <div key={ele.uid}>
                            <h2>{ele.name}</h2>
                        </div>
                    );
                }
                )
            }
        </div>
    );
}

export default Starwars;