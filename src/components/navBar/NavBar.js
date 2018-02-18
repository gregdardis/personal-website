import React from 'react';
import { Link } from 'react-router-dom';

import {
  URL_HOME,
  URL_PROJECTS
} from '../../constants'
import './navBar.css';

const NavBar = () => (
  <div className='navBar'>
    <ul className='nav'>
      <li><Link to={ URL_HOME }>Home</Link></li>
      <li><Link to={ URL_PROJECTS }>Projects</Link></li>
    </ul>
  </div>
);

export default NavBar;