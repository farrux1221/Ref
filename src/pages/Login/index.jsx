import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    user: "",
    password: "",
  })
  const Login = () => {
    if(data.user === 'admin' && data.password === '@admin'){
      navigate('/layout/teacher')
    }
    else{
      alert('Login yoki parol xato')
    }
  }
  return (
    <Container>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h4>Log in</h4>
        </div>
      </div>
      <div className='row w-100'>
        <div className='col-md-4 mt-2 offset-4 '>
          <label>Login</label>
          <input value={data.user} onChange={(e) => setData({ ...data, user: e.target.value })} type="text" className='form-control' placeholder='name ...' />
        </div>
        <div className='col-md-4 mt-2 offset-4 '>
          <label>Password</label>
          <input value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} type="password" className='form-control' placeholder='last name ...' />
        </div>
        <div className='col-md-4 mt-5 offset-4 '>
          <button className='btn btn-success w-100' onClick={Login}>Add Teacher</button>
        </div>
      </div>
    </Container>
  )
}
