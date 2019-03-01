import React, { Component } from 'react';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [
        {
          name: "Nest Thermostat",
          imageURL: "https://nest.com/support/images/misc-nest-thermostat/3rd-gen/nest-thermostat-gen3-time-to-temp.png",
          price: 249,
        },
        {
          name: "Apple Airpods",
          imageURL: "https://ss7.vzw.com/is/image/VerizonWireless/apple-airpods-mmef2ama-iset?$device-lg$",
          price: 159,
        },
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        <Dashboard inventoryList={this.state.inventory} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
