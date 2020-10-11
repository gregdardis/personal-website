import React from 'react';
import { Link } from 'react-router-dom';

import { URL_PROJECTS_PAGE } from '../../constants';
import './about.css';

const lifterLogUrl = 'https://play.google.com/store/apps/details?' +
'id=com.hgdev.fitnessapps.lifterlog&hl=en';

const About = () => (
  <div className='about description-box'>
    <h2>About Me</h2>
    <p>
      I graduated from the University of Alberta in June 2018 with a
      BSc in Mathematics and a Chemistry minor. I currently work at
      Galvanize in Vancouver, B.C. as a software engineer. I am a
      full stack developer with a <b>preference for backend.</b>
    </p>
    <p>
      I began learning about software development in April of 2017,
      starting with Stanford's CS106A course (all materials are online), taught
      in Java. From there I co-created the Android fitness app <a
        href={ lifterLogUrl }>
        Lifter Log.
      </a>
    </p>
    <p>
      Afterwards I made multiple personal projects for fun and practice.
      To learn more about my projects, see the <Link
        to={ URL_PROJECTS_PAGE }
        exact>projects page</Link>.
    </p>
    <p>
      On evenings and weekends I continue to improve my computer science
      fundamentals, learn new technologies, and work on my personal projects.
    </p>
  </div>
);

export default About;