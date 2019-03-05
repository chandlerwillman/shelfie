import React, { Component } from 'react';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }
  
  componentWillMount() {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        this.setState({
          inventory: response.data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventoryList={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
