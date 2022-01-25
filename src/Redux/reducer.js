import { Task } from "../Components/Task"
import { add, completed, Delete } from "./action-types"

const initialState = {
   
    todos: [{
        id: 1,
        text: 'workshop',
        isdone: false
    }]

}


// 

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case add: return {
            ...state,
             todos: [...state.todos, action.payload]
        }
        case Delete: return{
            ...state,
            todos:[...state.todos.filter(el=>el.id !==action.payload)]
        }
        case completed: return{
            ...state,
            todos: state.todos.map(el=> el.id===action.playload ?
                  {...el ,isdone:!el.isdone}:el)
                }






        default: return state

    }

}