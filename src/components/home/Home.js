import React from 'react';

import './home.css';
import About from '../about';
import NameBanner from '../nameBanner';
import Technologies from '../technologies';

const Home = () => (
  <div className='home'>
    <NameBanner />
    <About />
    <Technologies />
  </div>
);

export default Home;