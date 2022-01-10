import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// Components
import ProjectCard from '../components/Project/ProjectCard'

const ProjectList = () => {
  const projects = useSelector((state) => state)
  console.log(projects);

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