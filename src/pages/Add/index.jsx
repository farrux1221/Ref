import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'

export default function Add() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    last_name: "",
    specialist: "",
    degree: "",
  })
  const getData = () => {
    if (data.name && data.last_name && data.specialist && data.degree) {
      axios.post("https://6427fbdc46fd35eb7c492488.mockapi.io/teacher", data, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => navigate('/layout/teacher'))
        .catch(error => console.log(error))
    }
    else{
      alert("Malumaotlarni kiriting")
    }
  }
  return (
    <Container>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h4>Create new Teacher</h4>
        </div>
      </div>
      <div className='row w-100'>
        <div className='col-md-4 mt-2 offset-4 '>
          <label>Name</label>
          <input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className='form-control' placeholder='name ...' />
        </div>
        <div className='col-md-4 mt-2 offset-4 '>
          <label>Lastname</label>
          <input value={data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })} type="text" className='form-control' placeholder='last name ...' />
        </div>
        <div className='col-md-4 mt-2 offset-4 '>
          <label>Specialist</label>
          <input value={data.specialist} onChange={(e) => setData({ ...data, specialist: e.target.value })} type="text" className='form-control' placeholder='specialist ...' />
        </div>
        <div className='col-md-4 mt-2 offset-4 '>
          <label>Degree</label>
          <input value={data.degree} onChange={(e) => setData({ ...data, degree: e.target.value })} type="text" className='form-control' placeholder='degree ...' />
        </div>
        <div className='col-md-4 mt-5 offset-4 '>
          <button className='btn btn-success w-100' onClick={getData}>Add Teacher</button>
        </div>
      </div>
    </Container>
  )
}
