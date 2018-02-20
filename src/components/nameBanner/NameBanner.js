import React from 'react';

import './nameBanner.css';
import hiking from '../../images/hiking square cropped.jpg';
import NameAndTitle from '../nameAndTitle';

const NameBanner = () => (
  <div className='nameBanner'>
    <img src={ hiking } alt='Hiking in the Rocky Mountains'
      title='Hiking in the Rocky Mountains' />
    <NameAndTitle />
  </div>
);

export default NameBanner;