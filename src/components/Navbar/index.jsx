import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

export default function Navbar() {
  return (
    <Container>
        <span>Navbar</span>
        <Link to={'/'}><button className='btn btn-danger'>Log out</button></Link>
    </Container>
  )
}
