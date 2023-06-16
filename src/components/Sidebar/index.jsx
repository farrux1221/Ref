import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Logo, Menu } from './style'

export default function Sidebar() {
    return (
        <Container>
           <Link to={'/layout/student'}><Logo>Sidebar</Logo></Link>
            <Menu>
                <NavLink to={'/layout/student'}>Students</NavLink>
                <NavLink to={'/layout/teacher'}>Teacher</NavLink>
            </Menu>
        </Container>
    )
}
