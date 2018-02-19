import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  URL_HOME,
  URL_PROJECTS
} from '../../constants';
import './navBar.css';

// TODO: set Link classNames based on which URL is selected (hold in state?)
const NavBar = ({
  selectedPageUrl,
  updateSelectedPageUrl
}) => {
  const setClassName = url => {
    return selectedPageUrl === url
      ? 'navBarLinkSelected'
      : 'navBarLinkUnselected';
  };
  return (
    <div className='navBar'>
      <Link onClick={ () => updateSelectedPageUrl(URL_HOME) }
        className={ setClassName(URL_HOME) }
        to={ URL_HOME }>Home</Link>
      <Link onClick={ () => updateSelectedPageUrl(URL_PROJECTS) }
        className={ setClassName(URL_PROJECTS) }
        to={ URL_PROJECTS }>Projects</Link>
    </div>
  );
};
NavBar.propTypes = {
  selectedPageUrl: PropTypes.string.isRequired,
  updateSelectedPageUrl: PropTypes.func.isRequired
};
// set classNames based on URL in state using method
// these methods will need to be passed to NavBar through the container component
export default NavBar;