import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './clientForm.scss'

const ClientForm = ({handleCreateClient, handleChange, validForm, setValidForm, formData}) => {
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

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <div className="clientel">
    <Link 
      to="/profile"
      style={linkStyle}
      div className="return">Return To Profile
    </Link>
      <div className="client-form">
        <h1>Client Form</h1>
        <form onSubmit={(e) => handleCreateClient(e)} ref={formElement}>
          <label>Name: </label>
          <input
            required
            type='text'
            name='name'
            autoComplete='off'
            onChange={handleChange}
          /><br />
          <label>Email: </label>
          <input
            required
            type="text" 
            name="email"
            autoComplete='off'
            onChange={handleChange}
          />
          <button className="new-client"
            type='submit'
            disabled={!validForm}
          >
            Add Client
          </button>
        </form>
        </div>
    </div>
  )
}

export default ClientForm