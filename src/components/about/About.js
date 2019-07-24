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
        Lifter Log.
      </a>
    </p>
    <p>
      From there I made multiple personal projects both for fun and to practice
      my skills (see the projects page for details).
    </p>
    <p>
      On evenings and weekends I continue to improve my computer science
      fundamentals, learn new technologies, and work on my personal projects.
      My latest obsessions are databases, Python and Docker.
    </p>
  </div>
);

export default About;