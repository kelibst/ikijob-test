import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "../App.scss";
import Header from "../components/Layouts/Header";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import HomePage from "./HomePage";
import Success from "../components/Layouts/Success";

class App extends Component {
  componentDidUpdate(nextProps){
    this.props !== nextProps && console.log('props changes')
    console.log(this.props)
  }
  render() {
    const { success } = this.props
    return (
      <div className="content">
      {success && <div className="success-container">
        <Success />
      </div> }
        <BrowserRouter>
          <Route path="/" component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={HomePage} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  success: state.succMsg.message,
})

export default connect(mapStateToProps, null )(App);
