import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from '../navBar';
import './app.css';
import {
  URL_HOME_PAGE,
  URL_PROJECTS_PAGE
} from '../../constants';
import HomePage from '../homePage';
import ProjectsPage from '../projectsPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path={ URL_HOME_PAGE } component={ HomePage }/>
        <Route path={ URL_PROJECTS_PAGE } component={ ProjectsPage }/>
      </div>
    </Router>
  );
};

export default App;