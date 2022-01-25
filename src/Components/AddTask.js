import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHandler } from '../Redux/action'
import {InputGroup,FormControl,Button} from 'react-bootstrap'

export const AddTask = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    const addTask = (e) => {
        e.preventDefault()
        input && dispatch(addHandler({
            id: Math.random(),
            text: input, isdone: false
        }))
        setInput('')
    }



    return (
        <div>
            
                <InputGroup style={{maxWidth:500, marginLeft:450, marginTop:50,backgroundColor:"aquamarine"}} className="mb-3">
                    <FormControl style={{backgroundColor:"aquamarine"}}
                        placeholder="Add a task"
                        aria-label="Add a task"
                        aria-describedby="basic-addon2"
                        value={input}
                        onChange={handleChange}
                    />
                    <Button onClick={addTask} variant="outline-secondary" id="button-addon2">
                        Add
                    </Button>
                </InputGroup>
           
        </div>
    )
}
