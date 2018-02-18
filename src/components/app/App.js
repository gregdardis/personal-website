import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from '../navBar';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
      </div>
      </Router>
    );
  }
}

export default App;
