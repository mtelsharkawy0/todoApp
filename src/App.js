import './App.css';
import React, {Component} from 'react';
import Input from './components/Input';
import {Spring} from 'react-spring/renderprops';
class App extends Component{
  render(){
    return(
       <Spring
          from={{opacity:0}}
          to={{opacity:1}}
          config={{delay:1000,duration:1000}}
        >
          {props=>(
          <div style={props}>
            <Input/>
          </div>
        )}</Spring>
    );
   }
}
export default App;
