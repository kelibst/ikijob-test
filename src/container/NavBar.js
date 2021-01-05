import React, { Component } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import Icofont from 'react-icofont'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { logCurrentUserOut } from '../store/actions/userAction'
import './NavBar.scss'

class NavBar extends Component {

  
    render() {
      const { currentUser, logCurrentUserOut } = this.props
      const logUserOut = () => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('jwtId');
       const { history } = this.props
        logCurrentUserOut()
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
              {currentUser.id &&  
                <NavLink
                to={`/dashboard${currentUser.id}`}
                className="nav-item text-uppercase font-weight-bolder px-3"
              >
                Dashboard
              </NavLink>}
             
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

                {currentUser.id ? (
                  <Button
                    variant="danger"
                    className="text-white"
                    onClick={logUserOut}
                  >
                    Log Out
                  </Button>
                ) : (
                  <NavLink
                    to={`/login`}
                    className="nav-item text-uppercase font-weight-bolder px-3"
                  >
                    <Icofont icon="user" /> Login
                  </NavLink>
                )}
              </Nav>
            </Navbar>
        )
    }
}
const mapStateToProps = state => ({
  currentUser: state.userData.currentUser,
});

const ShowTheLocationWithRouter = withRouter(NavBar);

export default connect(mapStateToProps, {logCurrentUserOut})(ShowTheLocationWithRouter)