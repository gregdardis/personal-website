import React from 'react';

import './technologies.css';

const Technologies = () => (
  <div className='technologies'>
    <h2>Technologies</h2>
    <p className='technologies-explanation'>Note: This is far from a complete list of technologies I have used.</p>
    <h3 className='technologies-name'>General</h3>
    <ul>
      <li>Git</li>
      <li>Docker</li>
      <li>SQL</li>
      <li>Nginx</li>
      <li>AWS</li>
      <li>Jira</li>
    </ul>
    <h3 className='technologies-name'>Java</h3>
    <ul>
      <li>Android</li>
      <li>JUnit</li>
    </ul>
    <h3 className='technologies-name'>JavaScript</h3>
    <ul>
      <li>TypeScript</li>
      <li>Express</li>
      <li>Fastify</li>
      <li>React/Redux</li>
      <li>Webpack/Babel</li>
      <li>Jest</li>
    </ul>
    <h3 className='technologies-name'>C#</h3>
    <ul>
      <li>ASP.NET Core</li>
      <li>Entity Framework Core</li>
      <li>nHibernate</li>
      <li>ASP.NET MVC 5</li>
    </ul>
    <h3 className='technologies-name'>Ruby</h3>
    <ul>
      <li>Rails</li>
      <li>RSpec</li>
    </ul>
    <h3 className='technologies-name'>Python</h3>
    <ul>
      <li>Flask</li>
      <li>unittest</li>
    </ul>
  </div>
);

export default Technologies;