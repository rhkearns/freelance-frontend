import React, { useEffect, useRef } from 'react';

const UpdateForm = ({handleChange, handleUpdateProject, validForm, setValidForm, formData, clients}) => {
  
  const formElement = useRef()
  console.log('in form', formData);
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  


  return (
    <>
      <h1>Project Form</h1>
      <form onSubmit={(e) => handleUpdateProject(e)} ref={formElement}>
        <label>Project Title</label><br />
        <input
          required
          type='text'
          name='title'
          autoComplete='off'
          placeholder='Title'
          value={formData?.title}
          onChange={handleChange}
        /><br />
        <label>Client: </label>
        <select name="clientList" value={formData?.clientList}>
          {clients.map((client) => (
            <option value="client.name">{client.name}</option>
          ))}
        </select><br />
        <label>Start Date</label><br />
        <input 
          required
          type='date'
          name='startDate'
          autoComplete='off'
          value={formData?.startDate}
          onChange={handleChange}
        /><br />
        <label>End Date</label><br />
        <input 
          required
          type='date'
          name='endDate'
          autoComplete='off'
          value={formData?.endDate}
          onChange={handleChange}
        /><br />
        <label>Hourly Rate</label><br />
        <input 
          required
          type='number'
          name='hourlyRate'
          autoComplete='off'
          value={formData?.hourlyRate}
          onChange={handleChange}
        /><br />
        <button
          type="submit"
          disabled={!validForm}
        >
          Update Project
        </button>
      </form>
    </>
  )
}

export default UpdateForm