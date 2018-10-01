import React from 'react';

import './about.css';

const About = () => (
  <div className='about'>
    <h2>About Me</h2>
    <p>
      I am a recent graduate from the University of Alberta, graduated June 2018
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
      and other current web technologies.
    </p>
    <p>
      Once I had the basics down, I created a calculator for investors
      to analyze rental properties, and this was mainly
      React+Redux with Node/Express forthe server. The
      calculator supports user authentication to save rental
      property analyses, implemented with JWT and passport.
    </p>
    <p>
      My passion had me dabbling in C# and ASP.NET Core, where I
      created a Fitness API to access a database of information about
      weightlifting exercises. I am interested in learning more about
      C# and server side programming in the future.
    </p>
    <p>
      Most recently, I have been improving my JavaScript/TypeScript skills,
      focusing a lot on testing, as well as working towards more meaningful
      open-source contributions in the JS/TS community.
    </p>
  </div>
);

export default About;