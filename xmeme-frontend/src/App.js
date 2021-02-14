import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Form } from 'react-bootstrap';
import Formm from './Components/Formm';
import Parent from './Components/Parent';

function App() {
  return (
    <div className="bg-dark" style={{border:'solid', borderBlockEndColor:'black', borderLeftWidth:'20px', borderRightWidth:'20px', borderBlockWidth:'50px' , backgroundColor: 'lightorange'}}>
      <Formm />
      <Parent />
    </div>
  );
}

export default App;
