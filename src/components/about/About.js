import React from 'react';

import './about.css';

const lifterLogUrl = 'https://play.google.com/store/apps/details?' +
'id=com.hgdev.fitnessapps.lifterlog&hl=en';
const stockMarketSearchUrl = 'https://github.com/' +
'gregdardis/stock-market-search';
const rentalPropertyCalculatorDeployedUrl =
'https://rental-property-calculator.herokuapp.com/';
const rentalPropertyCalculatorGithubUrl =
'https://github.com/gregdardis/rental-property-calculator';

const About = () => (
  <div className='about'>
    <h2>About Me</h2>
    <p>
      I am a graduate from the University of Alberta, graduated June 2018
      with a BSc in Mathematics, minor in Chemistry. I am currently employed by
      Pleasant Solutions in Vancouver, B.C. as a software developer.
    </p>
    <p>
      I began learning about software development in April of 2017,
      beginning with Stanford's CS106A course (all materials are online), taught
      in Java. From there I co-created an Android fitness app called <a
        href={lifterLogUrl}>
        Lifter Log
      </a>
      , then started taking a Coursera course to learn algorithms and data
      structures.
    </p>
    <p>
      To begin my web development journey I co-created a <a
        href={stockMarketSearchUrl}>
        web app
      </a>
      , where the user can search for stocks in Yahoo Finance's database.
      This was great experience using Express, React/Redux,
      and other current web technologies. I have since gone back
      and added continuous integration using Travis CI. I also added
      Jest coverage reports and got code coverage to 90%.
    </p>
    <p>
      Once I had the basics down, I created a <a
        href={rentalPropertyCalculatorDeployedUrl}>
        calculator for investors to analyze rental properties
      </a>
      , and this was mainly React+Redux with Express
      for the server. The calculator supports user authentication
      to save rental property analyses, implemented with JWT
      and passport. I am still working on this project fairly often
      as of May 05, 2019. <a
        href={rentalPropertyCalculatorGithubUrl}>
        Here is the repository.
      </a>
    </p>
    <p>
      My passion had me dabbling in C# and ASP.NET Core, where I
      created a Fitness API to access a database of information about
      weightlifting exercises.
    </p>
    <p>
      Afterwards, I worked on my JavaScript/TypeScript skills,
      focusing a lot on testing, as well as working towards more meaningful
      open-source contributions in the JS/TS community.
    </p>
    <p>
      Day to day I am a full stack developer, mainly using a C# stack, but
      I also write a fair bit of JavaScript and CSS on the front end.
    </p>
    <p>
      On evenings and weekends I continue to improve my computer science
      fundamentals, learn new technologies, and work on my personal projects.
    </p>
  </div>
);

export default About;