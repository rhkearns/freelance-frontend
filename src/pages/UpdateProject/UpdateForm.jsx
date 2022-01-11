import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const UpdateForm = ({handleChange, handleUpdateProject, validForm, setValidForm, formData}) => {  
  const formElement = useRef()
  
const linkStyle = {
    width: "10vw",
    height: "10vh",
    border: " 3px solid rgba(53, 53, 53, 0.5",
    color: "rgba(60, 110, 113, 1",
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "2vw",
    display: "flex",
    alignItems: "center"
  }

  const clients = useSelector((state) => state.allClients.clients)

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  return (
    <div className="proj-update">
    <Link 
      to="/profile"
      style={linkStyle}
      div className="return">Return To Profile
    </Link>
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
        <button className='change'
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