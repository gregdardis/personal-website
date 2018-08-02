import React from 'react';

import './technologies.css';

const Technologies = () => (
  <div className='technologies'>
    <h2>Technologies</h2>
    <h3>Java</h3>
    <ul>
      <li>Android</li>
      <li>JUnit</li>
      <li>Eclipse/Android Studio</li>
    </ul>
    <h3>JavaScript (ES6)</h3>
    <ul>
      <li>Node/Express</li>
      <li>Mongoose/MongoDB</li>
      <li>React/Redux</li>
      <li>Webpack/Babel</li>
      <li>Mocha/Chai</li>
      <li>HTML5/CSS3</li>
      <li>Electron</li>
    </ul>
    <h3>C#</h3>
    <ul>
      <li>ASP.NET Core</li>
      <li>Entity Framework Core</li>
      <li>Visual Studio 2017</li>
    </ul>
    <h3>General</h3>
    <ul>
      <li>Git</li>
      <li>VS Code/Atom</li>
      <li>SQLite</li>
      <li>SQL Server</li>
      <li>Heroku</li>
    </ul>
  </div>
);

export default Technologies;