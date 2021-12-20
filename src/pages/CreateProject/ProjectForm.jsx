import React from 'react';
import { useEffect, useRef } from 'react';

const ProjectForm = ({ handleCreateProject, handleChange, validForm, setValidForm, formData, clients}) => {
  const formElement = useRef()
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm (true) : setValidForm(false)
  }, [formData])
  
  return (
    <>
      <h1>Project Form</h1>
      <form onSubmit={(e) => handleCreateProject(e)} ref={formElement}>
        <label>Project Title</label><br />
        <input
          required
          type='text'
          name='title'
          autoComplete='off'
          placeholder='Title'
          onChange={handleChange}
        /><br />
        <label>Client: </label>
        <select name="client" onChange={handleChange}>
            <option value='' default></option>
          {clients.map((client) => (
            <option value={client.name}>{client.name}</option>
          ))}
        </select><br />
        <label>Start Date</label><br />
        <input 
          required
          type='date'
          name='startDate'
          autoComplete='off'
          onChange={handleChange}
        /><br />
        <label>End Date</label><br />
        <input 
          required
          type='date'
          name='endDate'
          autoComplete='off'
          onChange={handleChange}
        /><br />
        <label>Hourly Rate</label><br />
        <input 
          required
          type='number'
          name='hourlyRate'
          autoComplete='off'
          onChange={handleChange}
        /><br />
        <button
          type="submit"
          disabled={!validForm}
        >
          Add Project
        </button>
      </form>
    </>
  )
}

export default ProjectForm