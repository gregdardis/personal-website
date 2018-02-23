import React from 'react';

import './homePage.css';
import NameBanner from '../nameBanner';
import LeftColumn from '../leftColumn';
import RightColumn from '../rightColumn';

const HomePage = () => (
  <div className='homePage'>
    <NameBanner />
    <LeftColumn />
    <RightColumn />
  </div>
);

export default HomePage;