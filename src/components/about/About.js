import React from 'react';

import './about.css';

const About = () => (
  <div className='about'>
    <h2>About Me</h2>
    <p>
      I am a recent graduate from the University of Alberta, graduated May 2018
      with a BSc in Mathematics, minor in Chemistry.
      <b> I am looking for an entry-level software engineering position in
      Vancouver, BC.</b>
    </p>
    <p>
      I began learning about software development in April of 2017,
      beginning with Stanford's CS106A course (all materials are online), taught
      in Java. From there I co-created an Android fitness app called Lifter Log,
      then started taking a Coursera course to learn algorithms and data
      structures.
    </p>
    <p>
      To begin my web development journey I co-created a web app
      where the user can search for stocks in Yahoo Finance's database,
      which was great experience using Node, Express, React/Redux,
      and other current web technologies. Afterwards, I created a
      calculator for investors to analyze rental properties, and
      this was mainly React+Redux with Node/Express for the server.
      The calculator supports user authentication to save rental property
      analyses, implemented with JWT and passport.
    </p>
    <p>
      Lately, my passion has brought me to C# and ASP.NET Core, where I
      created a Fitness API to access a database of information about
      weightlifting exercises. I am excited to improve my skills with ASP.NET
      and server-side programming in the future.
    </p>
  </div>
);

export default About;