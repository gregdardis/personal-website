import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  URL_HOME_PAGE,
  URL_PROJECTS_PAGE
} from '../../constants';
import './navBar.css';

const NavBar = ({
  selectedPageUrl,
  updateSelectedPageUrl
}) => {
  const setClassName = url => {
    // these URL's must correspond to the classes in navBar.css
    return selectedPageUrl === url
      ? 'navBarLinkSelected'
      : 'navBarLinkUnselected';
  };
  return (
    <div className='navBar'>
      <Link onClick={ () => updateSelectedPageUrl(URL_HOME_PAGE) }
        className={ setClassName(URL_HOME_PAGE) }
        to={ URL_HOME_PAGE }>Home</Link>
      <Link onClick={ () => updateSelectedPageUrl(URL_PROJECTS_PAGE) }
        className={ setClassName(URL_PROJECTS_PAGE) }
        to={ URL_PROJECTS_PAGE }>Projects</Link>
    </div>
  );
};
NavBar.propTypes = {
  selectedPageUrl: PropTypes.string.isRequired,
  updateSelectedPageUrl: PropTypes.func.isRequired
};
export default NavBar;