import React from 'react';

import './home.css';
import NameBanner from '../nameBanner';
import Technologies from '../technologies';
import LeftColumn from '../leftColumn';

const Home = () => (
  <div className='home'>
    <NameBanner />
    <LeftColumn />
    <Technologies />
  </div>
);

export default Home;