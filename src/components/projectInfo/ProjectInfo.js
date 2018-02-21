import React from 'react';
import PropTypes from 'prop-types';

import './projectInfo.css';

const ProjectInfo = ({
  projectData
}) => (
  <div className='projectInfo'>
    Project Info
  </div>
);
ProjectInfo.propTypes = {
  projectData: PropTypes.object.isRequired
};
export default ProjectInfo;