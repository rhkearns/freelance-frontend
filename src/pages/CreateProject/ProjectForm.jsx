import React from 'react';
import { useEffect, useRef } from 'react';

const ProjectForm = ({project, setProject, handleCreateProject, handleChange, validForm, setValidForm, formData, setFormData}) => {
  
  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm (true) : setValidForm(false)
  }, [formData])
  
  return (
    <>
      <h1>Project Form</h1>
      <form onSubmit={handleCreateProject}>
        <label>Project Title</label>
        <input
          required
          type='text'
          name='title'
          autoComplete='off'
          placeholder='Title'
          onChange={(e) => setProject(e.target.value)}
        />
        <label>Start Date</label>
        <input 
          required
          type='date'
          name='startDate'
          autoComplete='off'
          onChange={(e) => setProject(e.target.value)}
        />
      </form>
    </>
  )
}

export default ProjectForm