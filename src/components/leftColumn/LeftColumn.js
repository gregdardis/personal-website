import React from 'react';

import './leftColumn.css';
import About from '../about';
import Contact from '../contact';

const LeftColumn = () => (
  <div className='leftColumn'>
    <About />
    <Contact />
  </div>
);

export default LeftColumn;