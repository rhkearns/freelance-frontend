import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

// Services
import * as projectService from '../services/projectService'
// Components
import ProjectCard from '../components/Project/ProjectCard';
import CardActions from '../components/Project/CardActions';

const ProjectDetails = (props) => {
  const { id } = useParams()
  const [project, setProject] = useState()
  // const [tasks, setTasks] = useState()
  console.log('project', project);

  
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
      {project &&
        <CardActions 
        project={project}
        key={project._id}
      />
      }
    </>
  )
}

export default ProjectDetails