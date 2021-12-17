import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// Services
import { getAllProjects } from '../services/projectService';

// Components
import ProjectCard from '../components/Project/ProjectCard'

const ProjectList = ({user}) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const postData = await getAllProjects()
      setProjects(postData)
    }
    fetchProjects()
    return () => { setProjects([]) }
  }, [])

  return (
    <>
    <h1>Projects</h1>
    
    {projects?.map((project) => (
      <Link to={`/projects/${project._id}`}>
        <ProjectCard 
          project={project}
          key={project._id}
        />
      </Link>
    ))}
    </>
  )
}

export default ProjectList