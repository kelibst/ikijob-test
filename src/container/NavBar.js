import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import Icofont from 'react-icofont'
import { NavLink, withRouter } from 'react-router-dom'
import './NavBar.scss'

class NavBar extends Component {

  
    render() {
      const logUserOut = () => {
        localStorage.removeItem('currentUser');
       const { history } = this.props
  
        history.push('/login');
      }
        return (
            <Navbar
                collapseOnSelect
                expand="sm"
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

                <Button variant="danger" className="text-white" onClick={logUserOut}>Log Out</Button>
              </Nav>
            </Navbar>
        )
    }
}

export default withRouter(NavBar)