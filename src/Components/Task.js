import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteHandler,completeHandler } from '../Redux/action'
import {ListGroup,Button} from 'react-bootstrap'

export const Task = ({task}) => {

   
    const dispatch = useDispatch()

    const deleteTask=()=>{
        dispatch(deleteHandler(task.id))
        }
    const completeTask=()=>{
        dispatch(completeHandler(task.id))
        
    }    

    return (
        <div className='task'>
            <ListGroup.Item variant="warning" style={{maxWidth:500,marginRight:50,marginLeft:450}} 
            className={`${task.isdone? "completed": ""}`} >{task.text}</ListGroup.Item>
            <Button variant ="light"style={{backgroundColor:"aquamarine"}} onClick={completeTask} >Done</Button>
            <Button variant ="light"style={{backgroundColor:"aquamarine"}} onClick={deleteTask}>delete</Button>

            
        </div>
    )
}
