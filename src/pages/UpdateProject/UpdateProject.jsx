import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import UpdateForm from './UpdateForm'

import { updateProject, getProjectById } from '../../services/projectService';

const UpdateProject = (props) => {
  console.log('props', props);
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState()
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleUpdateProject = async (e) => {
    e.preventDefault()
    console.log('form data in update', formData);
    try {
      const updatedProject = await updateProject(id, formData)
      console.log(updatedProject);
      props.handleUpdateProjectsList(updatedProject)
      navigate(`/projects`)
      } catch (error) {
        throw error
      }
  }

  useEffect(() => {
    const fetchProject = async () => {
      const projData = await getProjectById(id)
      setFormData(projData)
    }
    fetchProject()
  }, [id])

  console.log('formdata', formData);
  return (
    <UpdateForm 
      handleChange={handleChange}
      handleUpdateProject={handleUpdateProject}
      validForm={validForm}
      setValidForm={setValidForm}
      formData={formData}
      setFormData={setFormData}
      clients={props.clients}
    />
  )
}

export default UpdateProject