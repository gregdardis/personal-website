import React from 'react';

import projectsData from './projectsData';
import Project from '../project';
import './projectsPage.css';

const ProjectsPage = () => (
  <div className='projectsPage'>
    <h1>Projects</h1>
    { projectsData.map(projectData =>
      <Project
        key={ projectData.name }
        projectData={ projectData }
      />
    ) }
  </div>
);

export default ProjectsPage;