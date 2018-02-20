import React from 'react';

import './home.css';
import About from '../about';
import NameBanner from '../nameBanner';


const Home = () => (
  <div className='home'>
    <NameBanner />
    <About />
  </div>
);

export default Home;