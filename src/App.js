import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';

import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Shelf from './Components/Shelf/Shelf';
import Form from './Components/Form/Form';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shelf/:id" component={Shelf} />
          <Route path="/add" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;
