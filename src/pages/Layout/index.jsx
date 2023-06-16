import React from 'react'
import Main from '../../components/Main'
import Sidebar from '../../components/Sidebar'
import { Container } from './style'

export default function Layout() {
  return (
    <Container>
        <Sidebar/>
        <Main/>
    </Container>
  )
}
