import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './projectForm.scss'
import '../../sassStyles/_variables.scss'

const ProjectForm = ({ handleCreateProject, handleChange, validForm, setValidForm, formData, clients}) => {
  const formElement = useRef()
  
  const linkStyle = {
    width: "20%",
    height: "20%",
    backgroundColor: "rgba(60, 110, 113, 0.5",
    color: "black",
    position: "absolute",
    borderRadius: "50%",
    top: "5vh",
    left: "77vw",
    fontSize: "3vw",
    display: "flex",
    alignItems: "center"
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  return (
    <div className="container">
    <Link 
      to="/profile"
      style={linkStyle}
      div className="return">Return To Profile
    </Link>
    <div className="project-form">
    
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
            <option value={client._id} key={client._id}>{client.name}</option>
          ))}
        </select>
        <br/><br/>
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
    </div>
  </div>
  )
}

export default ProjectForm