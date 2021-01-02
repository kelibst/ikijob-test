import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Icofont from 'react-icofont'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

class NavBar extends Component {
    render() {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                className="mb-5 d-none d-sm-flex border-bottom"
                variant="dark"
                >
                <Navbar.Brand href="/" className="font-weight-bolder">
                <span className="brand-icon">
                  <Icofont icon="attachment" />
                </span>
                {' '}
                IJIKOD
              </Navbar.Brand>
              <Nav className="mr-auto">
              <NavLink
                to={`/dashboard`}
                className="nav-item text-uppercase font-weight-bolder px-3"
              >
                Dashboard
              </NavLink>
              <NavLink
                to={`/profile`}
                className="nav-item text-uppercase font-weight-bolder px-3"
              >
                profile
              </NavLink>

              <NavLink
                to={`/contact`}
                className="nav-item text-uppercase font-weight-bolder px-3"
              >
                Contact
              </NavLink>
              </Nav>

              <Nav className="float-right">
                <NavLink
                to={`/play`}
                className="nav-item text-uppercase font-weight-bolder px-3"
                >
                <Icofont icon="play"/>
                { ' '}
                Play
                </NavLink>

                <NavLink
                to={`/login`}
                className="nav-item text-uppercase font-weight-bolder px-3"
                >
                <Icofont icon="user"/>
                { ' '}
                Login
                </NavLink>
              </Nav>
            </Navbar>
        )
    }
}

export default NavBar