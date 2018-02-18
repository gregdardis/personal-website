import React from 'react';
import { Link } from 'react-router-dom';

import {
  URL_HOME,
  URL_PROJECTS
} from '../../constants'
import './navBar.css';

// TODO: set Link classNames based on which URL is selected (hold in state?)
const NavBar = () => (
  <div className='navBar'>
      <Link className='navBarLinkUnselected' to={ URL_HOME }><span>Home</span></Link>
      <Link className='navBarLinkUnselected' to={ URL_PROJECTS }>Projects</Link>
  </div>
);

export default NavBar;