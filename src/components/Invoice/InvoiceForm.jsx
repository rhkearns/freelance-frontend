import React, { useEffect, useRef } from 'react'

const InvoiceForm = ({handleCreateInvoice, handleChange, validForm, setValidForm, formData, clients, projects}) => {
  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
      <h1>Invoice For: </h1>
      <form onSubmit={(e) => handleCreateInvoice(e)} ref={formElement}>
        <label>Project:</label>
        <select name="projectBilled" onChange={handleChange}>
            <option value='' default></option>
            {projects.map((project) => (
              <option value={project._id} key={project._id}>{project.title}</option>
            ))}
        </select> <br />
        
      </form>
    </>
  )

}

export default InvoiceForm