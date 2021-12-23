import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';


import './invoiceForm.scss'

const InvoiceForm = ({handleCreateInvoice, handleChange, validForm, setValidForm, formData, setFormData, projects}) => {
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

  const fetchProjectData = (e) => {
    const foundProj = projects.find((project) => {
      return project._id === e.target.value
    })
    setFormData({
      projectBilled: foundProj._id,
      title: foundProj.title,
      hourlyRate: foundProj.hourlyRate,
      hoursWorked: foundProj.hoursWorked,
      clientList: foundProj.client,
      invoiceTotal: foundProj.hoursWorked * foundProj.hourlyRate,
    })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <div className='invoice-container'>
      <Link 
      to="/profile"
      style={linkStyle}
      div className="return">Return To Profile
    </Link>
    <div className='invoice-form'>
      <h1>Invoice for: {formData?.title}</h1>
      <form onSubmit={(e) => handleCreateInvoice(e)} ref={formElement}>
        <label>Project:</label>
        <select name="projectBilled" onChange={(e) => fetchProjectData(e)}>
            <option value='' default></option>
            {projects.map((project) => (
              <option value={project._id} key={project._id}>{project.title}</option>
            ))}
        </select> <br/><br/>
        <label>Client: </label>
        <input 
          required
          type='text'
          name='clientList'
          autoComplete='off'
          defaultValue={formData?.clientList?.name}
        /> <br />
        <label>Hourly Rate: </label>
        <input 
          required
          type='number'
          name='hourlyRate'
          autoComplete='off'
          defaultValue={formData?.hourlyRate}
        /> <br />
        <label>Hours Worked: </label>
        <input 
          required
          type='number'
          name='hoursWorked'
          autoComplete='off'
          defaultValue={formData?.hoursWorked}
        /> <br />
        <label>Invoice Total: </label>
        <input
          required
          type='number'
          name='invoiceTotal'
          autoComplete='off'
          defaultValue={formData?.invoiceTotal}
          onChange={handleChange}
        /> <br />
        <label>Date: </label><br />
        <input
          required
          type='date'
          name='dateCreated'
          autoComplete='off'
          onChange={handleChange}
        /> <br />
        <label>Due Date: </label>
        <input
          required
          type='date'
          name='dueDate'
          autoComplete='off'
          onChange={handleChange}
        /> <br />
        <button className='bill'
          type='submit'
          disabled={!validForm}
        >
          Add Invoice
        </button>
      </form>
      </div>
    </div>
  )

}

export default InvoiceForm