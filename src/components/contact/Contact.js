import React from 'react';

import './contact.css';

const Contact = () => (
  <div className='contact'>
    <h2>Contact</h2>
    <ul>
      <li>dardis.greg@gmail.com</li>
      <li>Resume TODO LINK</li>
      <li>
        <a href='https://github.com/gregdardis'
          target='_blank' rel="noopener noreferrer">
        GitHub
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/greg-dardis-73495514b/' 
          target='_blank' rel="noopener noreferrer">
        LinkedIn
        </a>
      </li>
    </ul>
  </div>
);

export default Contact;