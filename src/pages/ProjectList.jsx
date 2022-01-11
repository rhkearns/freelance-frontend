import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProjects } from '../redux/actions/projectActions'
// Components
import ProjectCard from '../components/Project/ProjectCard'

const ProjectList = () => {
  const projects = useSelector((state) => state.allProjects.projects)
  const dispatch = useDispatch()
  // console.log(projects);

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

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