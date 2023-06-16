import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Container } from './style'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Edit() {
  const location = useLocation()
  const id = location.pathname.split('/')
  const a = id[id.length-1]
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    last_name: "",
    specialist: "",
    degree: "",
    id:null
  })

  useEffect(()=>{
    axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${a}`,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>{
      setData({...data,id:Number(res.data.id).data.id,last_name:res.data.last_name,specialist:res.data.specialist,name:res.data.name,degree:res.data.degree})
    })
  },[])

  const editData=()=>{
    axios.put(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${data.id}`,data,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>{
      navigate('/layout/teacher')
    })
   .catch(error=>console.log(error))
  }


  return (
    <Container>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h4>Edit Teacher</h4>
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
          <button className='btn btn-success w-100' onClick={editData}>Save</button>
        </div>
      </div>
    </Container>
  )
}
