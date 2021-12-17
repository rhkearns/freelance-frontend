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
      setProjects(postData)
      console.log('post fetch', projects);
    }
    fetchProjects()
    return () => { setProjects([]) }
  }, [])

  return (
    <>
    <h1>Projects</h1>
    
    {/* {projects?.map((project) => (
      <ProjectCard 
        project={project}
        key={project._id}
      />
    ))} */}
    </>
  )
}

export default ProjectList