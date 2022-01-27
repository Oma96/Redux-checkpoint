import React from 'react'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux'
import { FilterHandler } from '../Redux/action';

function Select() {
    const dispatch = useDispatch()
    const filterTodo = (e) => {
        dispatch(FilterHandler(e.target.value));
      };
    return (
        <div>
            <Form.Select style={{ maxWidth: 250, maxHeight: 40, marginLeft: 250, marginTop: 50, backgroundColor: "aquamarine" }} 
            aria-label="Default select example" onChange={filterTodo}>

                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </Form.Select>

        </div>
    )
}

export default Select
