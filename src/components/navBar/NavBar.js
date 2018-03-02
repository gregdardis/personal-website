import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  URL_HOME_PAGE,
  URL_PROJECTS_PAGE
} from '../../constants';
import './navBar.css';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      selectedPageUrl: URL_HOME_PAGE
    };
    this.setClassName.bind(this);
    this.updateSelectedPageUrl.bind(this);
  }

  setClassName(url) {
    // these URL's must correspond to the classes in navBar.css
    return this.state.selectedPageUrl === url
      ? 'navBarLinkSelected'
      : 'navBarLinkUnselected';
  }

  updateSelectedPageUrl(url) {
    this.setState(() => ({
      selectedPageUrl: url
    }));
  }

  render() {
    return (
      <div className='navBar'>
        <Link onClick={ () => this.updateSelectedPageUrl(URL_HOME_PAGE) }
          className={ this.setClassName(URL_HOME_PAGE) }
          to={ URL_HOME_PAGE }>Home</Link>
        <Link onClick={ () => this.updateSelectedPageUrl(URL_PROJECTS_PAGE) }
          className={ this.setClassName(URL_PROJECTS_PAGE) }
          to={ URL_PROJECTS_PAGE }>Projects</Link>
      </div>
    );
  }
}

export default NavBar;