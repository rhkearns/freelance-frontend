import React, { useState, useEffect } from 'react';

// Services
import { getAllProjects } from '../services/projectService';

// Components
import ProjectCard from '../components/Project/ProjectCard'

const ProjectList = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const postData = await getAllProjects()
      console.log("post data", postData);
      setProjects(postData)
      console.log('projects', projects);
    }
    fetchProjects()
    return () => { setProjects([]) }
  }, [])

  return (
    <>
    <h1>Projects</h1>
    
    {projects?.map((project) => (
      <ProjectCard 
        project={project}
        key={project._id}
      />
    ))}
    </>
  )
}

export default ProjectList