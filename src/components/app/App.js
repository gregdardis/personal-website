import React from 'react';
import {
  BrowserRouter,
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
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path={ URL_HOME_PAGE } component={ HomePage }/>
        <Route path={ URL_PROJECTS_PAGE } component={ ProjectsPage }/>
      </div>
    </BrowserRouter>
  );
};

export default App;