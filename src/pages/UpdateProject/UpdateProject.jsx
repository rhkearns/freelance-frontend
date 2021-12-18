import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import UpdateForm from './UpdateForm'

import { updateProject } from '../../services/projectService';

const UpdateProject = (props) => {
  console.log('props', props);
  const navigate = useNavigate()
  const location = useLocation()
  console.log('location', location);
  const [formData, setFormData] = useState(location.state)
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleUpdateProject = async (formData) => {
    console.log('form data in update', formData);
    try {
      const updatedProject = await updateProject(formData)
      console.log(updatedProject);
    //   // props.handleUpdateProjectsList(updatedProject)
      navigate(`/projects`)
      } catch (error) {
        throw error
      }
  }

  return (
    <UpdateForm 
      handleChange={handleChange}
      handleUpdateProject={handleUpdateProject}
      validForm={validForm}
      setValidForm={setValidForm}
      formData={formData}
      setFormData={setFormData}
    />
  )
}

export default UpdateProject