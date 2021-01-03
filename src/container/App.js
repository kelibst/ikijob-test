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

class App extends Component {
  render() {
    const { success } = this.props;
    return (
      <div className="content">
        {success.message && (
          <div className="success-container">
            <Success />
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
});

export default connect(mapStateToProps, null)(App);
