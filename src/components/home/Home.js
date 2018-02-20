import React from 'react';

import './home.css';
import About from '../about';
import hiking from '../../images/hiking.jpg';

const Home = () => (
  <div className='home'>
    <img src={ hiking } alt='Hiking in the Rocky Mountains'
      title='Hiking in the Rocky Mountains' />
    <About />
  </div>
);

export default Home;