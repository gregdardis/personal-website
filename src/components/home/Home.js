import React from 'react';

import './home.css';
import NameBanner from '../nameBanner';
import LeftColumn from '../leftColumn';
import RightColumn from '../rightColumn';

const Home = () => (
  <div className='home'>
    <NameBanner />
    <LeftColumn />
    <RightColumn />
  </div>
);

export default Home;