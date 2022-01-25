import React from 'react'
import {useSelector } from 'react-redux'
import { Task } from './Task'

export const ListTask = () => {
    const list =useSelector(state=>state.todos)

    return (
        <div>
            {list.map(el=> <Task task ={el}/>)}
            
        </div>
    )
}
