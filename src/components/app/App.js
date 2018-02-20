import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from '../navBar';
import './app.css';
import {
  URL_HOME,
  URL_PROJECTS
} from '../../constants';
import Home from '../home';
import Projects from '../projects';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path={ URL_HOME } component={ Home }/>
        <Route path={ URL_PROJECTS } component={ Projects }/>
      </div>
    </Router>
  );
};

export default App;