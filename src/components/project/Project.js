import React from 'react';
import PropTypes from 'prop-types';

import ProjectInfo from '../projectInfo';
import './project.css';

const Project = ({
  projectData
}) => (
  <div className='project'>
    <ProjectInfo projectData={ projectData } />
    {/* <img src='../../images/lifter log feature graphic.jpg' /> */}
  </div>
);
Project.propTypes = {
  projectData: PropTypes.object.isRequired
};
export default Project;