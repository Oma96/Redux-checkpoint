
import './App.css';
import { AddTask } from './Components/AddTask';
import { ListTask } from './Components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';

import Select from './Components/Select';


function App() {
  return (
    <div className="App">
      <h1 style={{color:"aquamarine"}}>Todo application</h1>
      <div className='input'>
      <AddTask />
      <Select/>
      </div>
      <ListTask />

    </div>
  );
}

export default App;
