import React from 'react';
import PropTypes from 'prop-types';

import './projectInfo.css';

const ProjectInfo = ({
  projectData
}) => (
  <div className='projectInfo'>
    <h2>{ projectData.name }</h2>
    <p>{ projectData.description }</p>
    { projectData.googlePlayLink
      ? <a href={ projectData.googlePlayLink }
        target='_blank'>Google Play Store</a>
      : <a href={ projectData.gitHubLink }
        target='_blank'>GitHub</a> }
    <p>Technologies: { projectData.technologiesUsed }</p>
  </div>
);

ProjectInfo.propTypes = {
  projectData: PropTypes.object.isRequired
};

export default ProjectInfo;