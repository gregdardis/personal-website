import React from 'react';
import PropTypes from 'prop-types';

import './projectInfo.css';

const ProjectInfo = ({
  projectData
}) => (
  <div className='projectInfo'>
    <h2>{ projectData.name }</h2>
    <p>{ projectData.description }</p>
    {
      projectData.googlePlayLink
        ? <a href={ projectData.googlePlayLink } target='_blank'>
            Google Play Store
        </a>
        : null
    }
    {
      projectData.gitHubLink
        ? <a href={ projectData.gitHubLink } target='_blank'>
            GitHub
        </a>
        : null
    }
    <p>Technologies: { projectData.technologiesUsed }</p>
    {
      projectData.deployedSiteLink
        ? <a href={ projectData.deployedSiteLink } target='_blank'>
            Website
        </a>
        : null
    }
  </div>
);

ProjectInfo.propTypes = {
  projectData: PropTypes.object.isRequired
};

export default ProjectInfo;