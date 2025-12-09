export const initialStore=()=>{
  return{
    message: null,
    name: "",
    people: [],
    currentPeopleDetails: {},
    data_people: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store = initialStore(), action = {}) {
  switch (action.type) {
    case "save_people_list":
      return { ...store, people: action.payload };

    case "data_people":
      return { ...store, data_people: action.payload };

    case "set_people_details":
      // guardar en la misma propiedad del initialStore
      return { ...store, currentPeopleDetails: action.payload };

    case 'clean_people_details':
      return {
        ...store, currentPeopleDetails: {}
      };

    case "save_planet_list":
      return { ...store, planet: action.payload };

    case "data_planet":
      return { ...store, data_planet: action.payload };

    case "set_planet_details":
      return { ...store, currentPlanetDetails: action.payload };

    case 'clean_planet_details':
      return {
        ...store, currentPlanetDetails: {}
      };

    case "save_vehicle_list":
      return { ...store, vehicle: action.payload };

    case "data_vehicle":
      return { ...store, data_vehicle: action.payload };

    case "set_vehicle_details":
      return { ...store, currentVehicleDetails: action.payload };

    case 'clean_vehicle_details':
      return {
        ...store, currentVehicleDetails: {}
      };

    default:
      return store;
  }    
}
