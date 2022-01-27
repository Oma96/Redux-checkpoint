import { add, completed, Delete, edit, Filter,filteredTodo } from "./action-types"

export const addHandler = (newtodo) => {
    return {
        type: add,
        payload: newtodo
    }
}

export const deleteHandler = (id) => {
    return {
        type: Delete,
        payload: id
    }
}

export const completeHandler = (id) => {
    return {
        type: completed,
        payload: id
    }
}

export const editHandler = (id, newtodo) => {
    return {
        type: edit,
        payload: { id, newtodo }
    }
}
export const FilterHandler = (choix) => {
    return {
        type: Filter,
        payload: choix
    }
}
export const filteredTab= ()=>{
    return{
        type: filteredTodo
    }
}

