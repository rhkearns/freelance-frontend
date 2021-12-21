import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import InvoiceForm from './InvoiceForm'
import { addInvoice } from '../../services/invoiceService';

const AddInvoice = (props) => {
  const navigate = useNavigate()
  const [invoice, setInvoice] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    dateCreated: '',
    dueDate: '',
    projectBilled: '',
    clientList: {name:''},
    hoursWorked: 0,
    hourlyRate: 0,
    invoiceTotal: 0,
  })
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleCreateInvoice = async (e) => {
    e.preventDefault()
    try {
      const newInvoice = await addInvoice(formData)
      props.setInvoices([newInvoice, ...props.invoices])
      navigate('/invoices')
    } catch (error) {
      throw error
    }
  }
  
  return (
    <>
      <h1>Add Invoice</h1>
      <InvoiceForm 
        invoiec={invoice}
        setInvoice={setInvoice}
        handleCreateInvoice={handleCreateInvoice}
        handleChange={handleChange}
        validForm={validForm}
        setValidForm={setValidForm}
        formData={formData}
        setFormData={setFormData}
        projects={props.projects}
        clients={props.clients}
      />
    </>
  )
}

export default AddInvoice