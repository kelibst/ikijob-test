import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "../App.scss";
import Header from "../components/Layouts/Header";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import HomePage from "./HomePage";
import Footer from "../components/Layouts/Footer";
import Success from "../components/Layouts/Success";
import Dashboard from "./Dashboard";
import Err from '../components/Layouts/Err'
import { fetchUser } from "../store/actions/userAction";


class App extends Component {
  componentDidMount(){
    const { currentUser, fetchUser } = this.props;
    let jwtId = localStorage.getItem('jwtId')
    jwtId = JSON.parse(jwtId)
    currentUser && jwtId &&
    !currentUser.id && jwtId.id && fetchUser(jwtId)
  }
  render() {
    const { success, Error } = this.props;
    return (
      <div className="content">
        {success.message && (
          <div className="success-container">
            <Success />
          </div>
        )}

        {Error.message && (
          <div className="success-container">
            <Err />
          </div>
        )}
        <BrowserRouter>
          <Route path="/" component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/dashboard/:id" component={Dashboard} />
          <Route exact path="/" component={HomePage} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  success: state.succMsg.message,
  Error: state.error.err,
  currentUser: state.userData.currentUser,
});

export default connect(mapStateToProps, {fetchUser})(App);
