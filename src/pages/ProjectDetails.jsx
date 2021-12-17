import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

// Services
import * as projectService from '../services/projectService'
// Components
import ProjectCard from '../components/Project/ProjectCard';
import { useEffect } from 'react/cjs/react.development';

const ProjectDetails = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState()
  
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await projectService.getProjectById(id)
        setProject(projectData)
      } catch (error) {
        throw error
      }
    }
    fetchProject()
  }, [id])

  return (
    <>
      <h1>Project Details</h1>
      {project &&
        <ProjectCard 
          project={project}
          key={project._id}
        />
      }
    </>
  )
}

export default ProjectDetails