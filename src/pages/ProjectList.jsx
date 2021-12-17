import React, { useState, useEffect } from 'react';

// Services
import { getAllProjects } from '../services/projectService';

// Components

const ProjectList = (props) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchAllProjects = async () => {
      const postData = await getAllProjects()
      setProjects(postData)
      console.log('postfetch', projects);
    }
    fetchAllProjects()
    return () => { setProjects([]) }
  }, [])

  return (
    <>
    <h1>Projects</h1>

    </>
  )
}

export default ProjectList