import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import ProjectForm from './ProjectForm'
// Services
import { createProjcet } from '../../services/projectService';

const CreateProject = (props) => {
  const navigate = useNavigate()
  const [project, setProject] = useState('')
  
  const formData = {
    project: project,
    owner: props.user.profile,
  }

  const handleCreateProject = async (e) => {
    e.preventDefault()
    try {
      const newProject = await CreateProject(formData)
      console.log('new project data', newProject);
      navigate('/projects')
    } catch (error) {
      throw error
    }
  }

  return (
    <>
      <h1>Create Project</h1>
      <ProjectForm 
        project={project}
        setProject={setProject}
        handleCreateProject={handleCreateProject}
      />
    </>
  )
}

export default CreateProject