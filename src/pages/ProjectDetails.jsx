import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './project-details.scss'

// Services
import * as projectService from '../services/projectService'
// Components
import ProjectCard from '../components/Project/ProjectCard';
import CardActions from '../components/Project/CardActions';
import TaskSection from '../components/Task/TaskSection'

const ProjectDetails = (props) => {
  const { id } = useParams()
  const [project, setProject] = useState()
  const [tasks, setTasks] = useState([])
  console.log(project);
  console.log('tasks', tasks)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await projectService.getProjectById(id)
        setProject(projectData)
        setTasks(projectData.taskList)
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
        />
      } 
      <TaskSection 
        project={project}
        setProject={setProject}
        tasks={tasks}
        setTasks={setTasks}
        />
    </>
  )
}

export default ProjectDetails