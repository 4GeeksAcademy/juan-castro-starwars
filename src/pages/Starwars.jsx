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
            {
                store.people.length > 0 &&
                store.people.map((ele) => {
                    return (
                        <div key={ele.uid}>
                            <h3>{ele.name}</h3>
                        </div>
                        // <div key={ele.uid} class="card" style="width: 18rem;">
                        //     <img src="..." class="card-img-top" alt="...">
                        //         <div class="card-body">
                        //             <h5 class="card-title">{ele.name}</h5>
                        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        //             <a href="#" class="btn btn-primary">Go somewhere</a>
                        //         </div>
                        // </div>
                    );
                }
                )
            }

        </div>
    );
}

export default Starwars;