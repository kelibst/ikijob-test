import React, { Component } from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Icofont from "react-icofont";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { logCurrentUserOut } from "../store/actions/userAction";
import "./NavBar.scss";

class MobileNav extends Component {
  render() {
    const { currentUser, logCurrentUserOut } = this.props
    const logUserOut = () => {
      logCurrentUserOut();
      localStorage.removeItem("currentUser");
      localStorage.removeItem("jwtId");
      const { history } = this.props;  
      history.push("/login");
    };
    return (
      <div className="mobile-nav d-block d-sm-none text-center">
        <Navbar variant="dark" expand="sm">
          <Navbar.Brand href="/" className="font-weight-bolder">
            <span className="brand-icon">
              <Icofont icon="attachment" />
            </span>{" "}
            IJIKOD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {currentUser && currentUser.id &&  
              <NavLink
              to={`/dashboard/${currentUser.id}`}
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

              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="">
              <NavLink
                to={`/contact`}
                className="nav-item text-uppercase font-weight-bolder px-3"
              >
                <Icofont icon="play" /> Play
              </NavLink>
              {currentUser && currentUser.id ? (
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
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.userData.currentUser,
});

const ShowTheLocationWithRouter = withRouter(MobileNav);

export default connect(mapStateToProps, { logCurrentUserOut })(
  ShowTheLocationWithRouter
);
