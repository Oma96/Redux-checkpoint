import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteHandler, completeHandler, editHandler } from '../Redux/action'
import { ListGroup, Button } from 'react-bootstrap'

export const Task = ({ task }) => {


    const dispatch = useDispatch()

    const deleteTask = () => {
        dispatch(deleteHandler(task.id))
    }
    const completeTask = () => {
        dispatch(completeHandler(task.id))
    }
    const [editing, setEditing] = useState(false)
    const toggle = () => {
        setEditing(!editing)
    }
    const [input, setInput] = useState(task.text)
    const editTodo = () => {
        dispatch(editHandler(task.id, input))
        toggle()
    }

    return (
        <div className='task'>
            <ListGroup.Item variant="warning" style={{ maxWidth: 500, marginRight: 50, marginLeft: 450 }}
                className={`${task.isdone ? "completed" : ""}`} >{editing ?
                    (<input
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                        value={input} />) :
                    (<h3>{task.text}</h3>)}
            </ListGroup.Item>
            <Button variant="light"
                style={{ backgroundColor: "aquamarine" }}
                onClick={completeTask} >Done</Button>
            <Button variant="light"
                style={{ backgroundColor: "aquamarine" }}
                onClick={deleteTask}>delete</Button>
            <Button onClick={() => (editing ? editTodo() : toggle())}
                variant="light"
                style={{ backgroundColor: "aquamarine" }}>
                {editing ? <h4 style={{ fontSize: 15 }}>Submit</h4> :
                    <h4 style={{ fontSize: 15 }}>Edit</h4>} </Button>

        </div>
    )
}
