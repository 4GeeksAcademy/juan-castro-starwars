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
    default:
      return store;
  }    
}
