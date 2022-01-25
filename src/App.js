
import './App.css';
import { AddTask } from './Components/AddTask';
import { ListTask } from './Components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'


function App() {
  return (
    <div className="App">
      <h1>Todo application</h1>
      <div className='input'>
      <AddTask />
      <Form.Select style={{maxWidth:250, maxHeight:40, marginLeft:250,marginTop:50, backgroundColor:"aquamarine"}} aria-label="Default select example">
        <option>Select </option>
        <option value="1">All</option>
        <option value="2">Completed</option>
        <option value="3">Uncompleted</option>
      </Form.Select>
      </div>
      <ListTask />

    </div>
  );
}

export default App;
