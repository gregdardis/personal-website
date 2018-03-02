import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  URL_HOME_PAGE,
  URL_PROJECTS_PAGE
} from '../../constants';
import './navBar.css';

const NavBar = () => (
  <div className='navBar'>
    <NavLink
      to={ URL_HOME_PAGE }
      exact
      className='navBarLink'
      activeClassName='selected'>Home</NavLink>
    <NavLink
      to={ URL_PROJECTS_PAGE }
      exact
      className='navBarLink'
      activeClassName='selected'>Projects</NavLink>
  </div>
);

export default NavBar;