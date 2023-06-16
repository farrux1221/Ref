import React, { useEffect } from 'react'
import { Container } from './style'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useNavigate } from 'react-router-dom'

export default function Teacher() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [dep, setDep] = useState(false)
  const [load, setLoad] = useState(true)
  useEffect(() => {
    axios.get('https://6427fbdc46fd35eb7c492488.mockapi.io/teacher', {
      headers: {
        "Content-Type": "Application/json"
      }
    }).then(res => setData(res.data))
      .catch(error => console.log(error))
    setTimeout(() => {
      setLoad(false)
    }, 1000);
  }, [dep])

  const removeTeacher = (id) => {
    axios.delete(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${id}`, {
      headers: {
        "Content-Type": "Application/json"
      }
    }).then(res => {
      setDep(!dep);
      setLoad(true)
    })
      .catch(error => console.log(error))
  }

  return (
    <Container>
      <h4>Teacher
        <Link to={'/layout/teacher/add'}> <button className='btn btn-success'>Create Teacher</button></Link>
      </h4>
      {
        load
          ?
          <Loader />
          :
          <table className="table">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">last_name</th>
                <th scope="col">specialist</th>
                <th scope="col">degree</th>
                <th scope="col">-/-</th>
              </tr>
            </thead>
            <tbody>
              {
                data.length ?
                  data.map(item => {
                    return (
                      <tr key={item.id}>
                        <th scope="row">{item.name}</th>
                        <td>{item.last_name}</td>
                        <td>{item.specialist}</td>
                        <td>{item.degree}</td>
                        <td>
                          <button className='btn btn-danger' onClick={() => removeTeacher(item.id)}>Delete</button>
                          <button className='btn btn-primary ms-1' onClick={() => navigate(`/layout/teacher/edit/${item.id}`)}>Edit</button>
                        </td>
                      </tr>
                    )
                  })
                  :
                  <tr><td>"Yoq"</td></tr>
              }
            </tbody>
          </table>
      }



    </Container>
  )
}
