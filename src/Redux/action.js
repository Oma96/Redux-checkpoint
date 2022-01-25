import { add, completed, Delete } from "./action-types"

export const addHandler =(newtodo)=>{
    return{
        type: add,
        payload: newtodo
    }
}

export const deleteHandler=(id)=>{
    return{
        type: Delete,
        payload:id
    }
}

export const completeHandler=(id)=>{
    return{
        type:completed,
        payload:id
    }
}

