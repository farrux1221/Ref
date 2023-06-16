import React from 'react'
import { Route, Routes } from 'react-router'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Error from './pages/Error'
import Layout from './pages/Layout'
import Register from './pages/Login'
import Student from './pages/Student'
import Teacher from './pages/Teacher'

export default function Root() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/layout' element={<Layout />}>
          <Route path='/layout/student' element={<Student />} />
          <Route path='/layout/teacher' element={<Teacher />} />
          <Route path='/layout/teacher/add' element={<Add />} />
          <Route path='/layout/teacher/edit/:id' element={<Edit />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}
