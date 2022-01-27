import React,{useEffect} from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { Task } from './Task'

import { filteredTab } from '../Redux/action'

export const ListTask = () => {
    const dispatch= useDispatch()
    const list =useSelector(state=>state.todos)
    const filter =useSelector(state =>state.Filter)   
    const filteredTodo=useSelector(state=>  state.filteredtodo)
    useEffect(()=> dispatch (filteredTab()) , [filter, list])
    return(
        <div>
            {filteredTodo.map(el=> <Task task ={el}/>)}
            
        </div>
    )
}
