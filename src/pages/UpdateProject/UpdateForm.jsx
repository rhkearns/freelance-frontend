import React, { useEffect, useRef } from 'react';
import moment from 'moment';

const UpdateForm = ({handleChange, handleUpdateProject, validForm, setValidForm, formData, clients}) => {  
  const formElement = useRef()
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  return (
    <div className="proj-update">
      <h1>Project Form</h1>
      <form className='update' onSubmit={(e) => handleUpdateProject(e)} ref={formElement}>
        <label>Project Title</label><br />
        <input
          required
          type='text'
          name='title'
          autoComplete='off'
          placeholder='Title'
          value={formData?.title}
          onChange={handleChange}
        /><br/>
        <label >Client: </label>
        <select name="clientList" value={formData?.clientList}>
          {clients.map((client) => (
            <option value={client._id} key={client._id}>{client.name}</option>
          ))}
        </select><br/><br/><br/>
        <label>Start Date</label><br />
        <input 
          required
          name='startDate'
          type="date"
          autoComplete='off'
          value={moment(formData?.startDate).format('YYYY-MM-DD')}
          onChange={handleChange}
        /><br />
        <label>End Date</label><br />
        <input 
          required
          type="date"
          name='endDate'
          autoComplete='off'
          value={moment(formData?.endDate).format('YYYY-MM-DD')}
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
        <button className='update'
          type="submit"
          disabled={!validForm}
        >
          Update Project
        </button>
      </form>
    </div>
  )
}

export default UpdateForm