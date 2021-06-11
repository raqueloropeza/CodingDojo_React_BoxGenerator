import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Style from "./components/BoxStyle";
import './App.css';


function App() {
  const [box, setBox] = useState([]);
  const [form, setForm] = useState("")

  const onSubmitHandler = (e) => {
      e.preventDefault();
      setBox([... box, form])
      setForm (" ")
        
    }
  
  return (
    <div className= "container">
        <h1>Box Generator</h1>
      <form onSubmit= { onSubmitHandler }>
            <div className= "row">
              <div className = "input-group mb-3">
                  <label className = "input-group-text">Color: </label>
                  <input className = "form-control" type="text" onChange={ (e) => setForm(e.target.value)} value={form}></input>
              </div>
              <input className= "btn btn-dark" type="submit" value="Add"></input>
            </div>

      </form>
        <table>
          <tr>
              {
                box.map((i, key) => <td> <Style key={key} source = {i}/> </td>)
              }
          </tr>
        </table>
        
    </div>
  );

}
export default App;
