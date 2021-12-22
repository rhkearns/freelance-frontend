import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import './signUpForm.scss'


const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
  <div className="user-sign-up">
    <h3>Sign Up</h3>
    <Form
      className='form'
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <Label for="name">Name</Label>
        <Input 
          type="text"
          autoComplete='off'
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input 
          type="text"
          autoComplete='off'
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input 
          type="password"
          autoComplete='off'
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="passwordConfirm"></Label>
        <Input 
           type="password"
          autoComplete='off'
          id="confirm"
          name="passwordConf"
          onChange={handleChange}
        />
      </FormGroup>
      <Button disabled={isFormInvalid()}></Button> 
    </Form>
   </div>
  )
}

export default SignupForm