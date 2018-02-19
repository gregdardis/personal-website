import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  URL_HOME,
  URL_PROJECTS
} from '../../constants'
import './navBar.css';

// TODO: set Link classNames based on which URL is selected (hold in state?)
// TODO: WHY IS THE SELECTEDURL NOT IN THE STATE!! NOTHING IS IN THE STATE
// TODO: get ESLINT working, i already installed it
const NavBar = ({
  selectedURL,
  updateSelectedURL
}) => {
  const setClassName = url => {
    return selectedURL === url ? 'navBarLinkSelected' : 'navBarLinkUnselected';
  }
  return (
    <div className='navBar'>
        <Link onClick={ updateSelectedURL } className={ setClassName(URL_HOME) } to={ URL_HOME }>Home</Link>
        <Link onClick={ updateSelectedURL } className={ setClassName(URL_PROJECTS) } to={ URL_PROJECTS }>Projects</Link>
    </div>
  )
};
NavBar.propTypes = {
  selectedURL: PropTypes.string.isRequired,
  updateSelectedURL: PropTypes.func.isRequired
}
// make onclick method that fires action and updates URL in state
// set classNames based on URL in state using method
// these methods will need to be passed to NavBar through the container component
export default NavBar;