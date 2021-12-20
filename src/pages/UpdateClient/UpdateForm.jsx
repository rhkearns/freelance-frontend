import React, { useEffect, useRef } from 'react'

const UpdateForm = ({handleChange, handleUpdateClient, validForm, setValidForm, formData}) => {
  const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
      <h1>Client Form</h1>
      <form onSubmit={(e) => handleUpdateClient(e)} ref={formElement}>
        <label>Name: </label>
        <input
          required
          type='text'
          name='name'
          autoComplete='off'
          value={formData?.name}
          onChange={handleChange}
        /><br />
        <label>Email: </label>
        <input
          required
          type="text" 
          name="email"
          autoComplete='off'
          value={formData?.email}
          onChange={handleChange}
        />
        <button
          type='submit'
          disabled={!validForm}
        >
          Update Client
        </button>
      </form>
    </>
  )

}

export default UpdateForm