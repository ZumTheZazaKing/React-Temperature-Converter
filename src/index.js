import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function Celsius(props){

  return <input value={props.data} name="celsius" type="number" onChange={props.handleChange}/>

}

function Fahrenheit(props){

  return <input value={props.data} name="fahrenheit" type="number" onChange={props.handleChange}/>

}

function Kelvin(props){
  return <input value={props.data} name="kelvin" type="number" onChange={props.handleChange}/>
}


function App(){

  let [celsiusValue, setCelsiusValue] = useState("");
  let [fahrenheitValue, setFahrenheitValue] = useState("");
  let [kelvinValue, setKelvinValue] = useState("");

  function handleChange(e){

    switch(e.target.name){
      
      case "celsius":
        setCelsiusValue(parseFloat(e.target.value));
        setFahrenheitValue(((parseFloat(e.target.value) * 9/5) + 32).toFixed(2));
        setKelvinValue((parseFloat(e.target.value) + 273.15).toFixed(2));
        break;

      case "fahrenheit":
        setFahrenheitValue(parseFloat(e.target.value));
        setCelsiusValue(((parseFloat(e.target.value) - 32) * 5/9).toFixed(2));
        setKelvinValue(((parseFloat(e.target.value) - 32) * 5/9 + 273.15).toFixed(2));
        break;

      case "kelvin":
        setKelvinValue(parseFloat(e.target.value));
        setCelsiusValue((parseFloat(e.target.value) -  273.15).toFixed(2));
        setFahrenheitValue(((parseFloat(e.target.value) - 273.15) * 9/5 + 32).toFixed(2));
        break;

    }

  }

  return <div className="container">

    <h3>Temperature Converter</h3>

    <div className="inputContainer">

      <label>Celsius (°C): </label>
      <Celsius data={celsiusValue} handleChange={handleChange}/>

      <br/><br/>

      <label>Fahrenheit (°F): </label>
      <Fahrenheit data={fahrenheitValue} handleChange={handleChange}/>

      <br/><br/>

      <label>Kelvin (K): </label>
      <Kelvin data={kelvinValue} handleChange={handleChange}/>

    </div>

  </div>

}


const el = <App/>


ReactDOM.render(el, document.getElementById('root'));


