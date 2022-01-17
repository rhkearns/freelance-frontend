import React from 'react';
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
import './signInForm.scss'
    

const SignInForm = (props) => {

  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/profile')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="user-sign-in">
      <h3>Sign In</h3>
      <Form 
        className="form"
        onSubmit={handleSubmit}
      >
        <FormGroup>
          <Label for="exampleEmail" style={{fontSize: "2vw"}}>Username</Label>
          <Input
            type="text"
            autoComplete='off'
            id="exampleEmail"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="example@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" style={{fontSize: "2vw"}}>Password</Label>
          <Input
            type="password"
            autoComplete='off'
            id="examplePassword"
            value={formData.pw}
            name="pw"
            placeholder="********"
            onChange={handleChange}
          />
        </FormGroup>
      <Button>Submit</Button>
    </Form>
</div>
  )
}

export default SignInForm