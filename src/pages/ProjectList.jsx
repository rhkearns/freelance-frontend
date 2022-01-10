import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setProjects } from '../redux/actions/projectActions'
import { getAllProjects } from '../services/projectService';
// Components
import ProjectCard from '../components/Project/ProjectCard'

const ProjectList = () => {
  const projects = useSelector((state) => state.allProjects.projects)
  const dispatch = useDispatch()
  console.log(projects);

  const fetchProjects = async () => {
    try {
      const response = await getAllProjects()
      console.log('response', response);
      dispatch(setProjects(response))
    } catch (err) {
      throw err
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])
console.log('projects post fetch', projects);

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