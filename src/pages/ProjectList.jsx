import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

// Services
import { getAllProjects } from '../services/projectService';

// Components
import ProjectCard from '../components/Project/ProjectCard'

const ProjectList = ({user, projects}) => {

  

  return (
    <>
      <h1>Projects</h1>
      
      {projects?.map((project) => (
        <Link key={project._id} to={`/projects/${project._id}`}>
          <ProjectCard 
            project={project}
            
          />
        </Link>
      ))}
    </>
  )
}

export default ProjectList