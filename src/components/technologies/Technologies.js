import React from 'react';

import './technologies.css';

const Technologies = () => (
  <div className='technologies'>
    <h2>Technologies</h2>
    <h3>Java</h3>
    <ul>
      <li>Android</li>
      <li>JUnit</li>
    </ul>
    <h3>JavaScript (ES6)</h3>
    <ul>
      <li>TypeScript</li>
      <li>Express</li>
      <li>React/Redux</li>
      <li>Webpack/Babel</li>
      <li>Mocha/Chai</li>
      <li>Jest</li>
      <li>Sinon</li>
      <li>Enzyme</li>
    </ul>
    <h3>C#</h3>
    <ul>
      <li>ASP.NET Core</li>
      <li>Entity Framework Core</li>
      <li>nHibernate</li>
      <li>ASP.NET MVC 5</li>
    </ul>
    <h3>General</h3>
    <ul>
      <li>Git</li>
      <li>Travis CI</li>
      <li>TeamCity</li>
      <li>MongoDB</li>
      <li>SQL</li>
      <li>Heroku</li>
      <li>Jira</li>
    </ul>
  </div>
);

export default Technologies;