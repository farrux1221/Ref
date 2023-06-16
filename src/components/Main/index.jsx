import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar'
import { Container, Content } from './style'

export default function Main() {
    return (
        <Container>
            <Navbar />
            <Content>
                <Outlet />
            </Content>
        </Container>
    )
}
