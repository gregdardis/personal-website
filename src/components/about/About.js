import React from 'react';

import './about.css';

const About = () => (
  <div className='about'>
    <h2>About Me</h2>
    <p>
      Currently a student at the University of Alberta, graduating May 2018
      with a BSc in Mathematics, minor in chemistry.
      <b> I am looking for an entry-level software engineering position in
      Vancouver, BC starting May 2018 or after.</b>
    </p>
    <p>
      I began learning about software development in April of 2017,
      beginning with Stanford's CS106A course (all materials are online), taught
      in Java. From there I co-created an Android fitness app called Lifter Log,
      then started taking a Coursera course to learn algorithms and data
      structures. More recently I co-created a web app where the user can
      search for stocks in Yahoo Finance's database, which was great practice
      using Node, Express, React/Redux, and other current web technologies.
    </p>
  </div>
);

export default About;