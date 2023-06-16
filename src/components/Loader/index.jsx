import React from 'react'
import { Container } from './style'

export default function Loader() {
  return (
    <Container>
        <div className='spinner-border' role="status">
            <span className='visually-hidden'>Loading...</span>
        </div>
    </Container>
  )
}
