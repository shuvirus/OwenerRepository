import React, { Component } from 'react';
import './App.css';
import Greet from "./components/Greet"
import Welcome from "./components/Welcome"
import Message from "./components/Message"
import Customers from "./components/Customers"
import Custs from "./components/Custs"

class App extends Component {
  render() {
    return (
      <div>
        {/* <Customers/> */}
        <Custs/>
      </div>
    );
  }
}
export default App;
