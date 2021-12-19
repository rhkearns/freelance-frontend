import React, { useEffect, useRef } from 'react';

const ClientForm = ({handleCreateClient, handleChange, validForm, setValidForm, formData, setFormData}) => {
  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  return (
    <h1>Client Form</h1>
  )
}

export default ClientForm