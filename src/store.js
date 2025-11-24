export const initialStore=()=>{
  return{
    message: null,
    name: "",
    people: [],
    currentPeopleDetails: {},
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

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'save_people_list':
      let lista= action.payload
      return {
        ...store, people: lista
      }

    case 'set_people_details':
      let detalles= action.payload
      return {
        ...store, currentPeopleDetails: detalles
      }
    case 'clean_people_details':
      return {
        ...store, currentPeopleDetails: {}
      }
    default:
      throw Error('Unknown action.');
  }    
}
