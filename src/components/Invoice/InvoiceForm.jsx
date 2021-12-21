import React, { useEffect, useRef } from 'react'

const InvoiceForm = ({handleCreateInvoice, handleChange, validForm, setValidForm, formData, setFormData, clients, projects}) => {
  const formElement = useRef()

  const fetchProjectData = (e) => {
    console.log(e.target.value);
    const foundProj = projects.find((project) => {
      return project._id === e.target.value
    })
    setFormData({
      projectBilled: foundProj.title,
      hourlyRate: foundProj.hourlyRate,
      hoursWorked: foundProj.hoursWorked,
      client: foundProj.client,
    })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
      <h1>Invoice for: {formData?.projectBilled}</h1>
      <form onSubmit={(e) => handleCreateInvoice(e)} ref={formElement}>
        <label>Project:</label>
        <select name="projectBilled" onChange={(e) => fetchProjectData(e)}>
            <option value='' default></option>
            {projects.map((project) => (
              <option value={project._id} key={project._id}>{project.title}</option>
            ))}
        </select> <br />
        <label>Client: </label>
        <input 
          required
          type='text'
          name='clientList'
          autoComplete='off'
          value={formData?.client.name}
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
        <label>Date: </label><br />
        <input
          required
          type='date'
          name='dateCreated'
          autoComplete='off'
          onChange={handleChange}
        /> <br />
        <label>Due Date (optional): </label>
        <input
          required
          type='date'
          name='dueDate'
          autoComplete='off'
          onChange={handleChange}
        /> <br />
        <button
          type='submit'
          disabled={!validForm}
        >
          Add Invoice
        </button>
      </form>
    </>
  )

}

export default InvoiceForm