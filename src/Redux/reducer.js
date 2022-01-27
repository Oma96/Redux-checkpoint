import { Task } from "../Components/Task"
import { add, completed, Delete ,edit,Filter, filteredTodo} from "./action-types"

const initialState = {
   
    todos: [{
        id: 1,
        text: 'workshop',
        isdone: false
    }],
    Filter: "All",
    filteredtodo:[]

}




export const taskReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case add: return {
            ...state,
             todos: [...state.todos, payload]
        }
        case Delete: return{
            ...state,
            todos:[...state.todos.filter(el=>el.id !== payload)]
        }
        case completed: return{
            ...state,
            todos: state.todos.map(el=> el.id===payload ?
                  {...el ,isdone:!el.isdone}:el)
                }
        case edit: return{
            ...state,
            todos:state.todos.map(el=> el.id ===payload.id?
                {...el, text: payload.newtodo}: el) 
        }        
        case Filter: return{
            ...state,
            Filter: payload

        }
        case filteredTodo: return{
            ...state,
            filteredtodo: state.Filter==="Completed"? state.todos.filter(el=> el.isdone===true):
            state.Filter==="Uncompleted"? state.todos.filter(el=> el.isdone===false):
            state.Filter==="All"? state.todos: null
        }






        default: return state

    }

}