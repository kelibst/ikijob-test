import React, { Component } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createUser } from "../../store/actions/userAction";
import successWithMessage from "../../store/actions/successWithMessage";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      userData: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        password_confirmation: "",
      },
    };
  }

  componentDidUpdate() {
    const { successWithMessage, currentUser, history } = this.props;
    if (currentUser.email) {
      successWithMessage("You are Logged In.");
      history.push(`/dashboard/${currentUser.email}`);
    }
  }

  render() {
    const handleChange = (e) => {
      const { userData } = this.state;
      const { id, value } = e.target;
      this.setState({
        ...this.state,
        userData: {
          ...userData,
          [id]: value,
        },
      });
    };
    const { createUser } = this.props;
    const { isSubmit } = this.state;

    const handleSubmit = (e) => {
      e.preventDefault();
      const { userData } = this.state;
      this.setState({ isSubmit: true });
      createUser(userData);
    };

    return (
      <div className="signup auth">
        <h1 className="display-6 mb-3  font-weight-bolder text-center">
          Sign Up
        </h1>
        <Form
          className="user-form p-5 shadow-lg bg-white"
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="first_name">
            <Form.Control
              required
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="last_name">
            <Form.Control
              required
              type="text"
              placeholder="Enter your last name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password_confirmation">
            <Form.Control
              required
              type="password"
              placeholder="confirm you password"
              onChange={handleChange}
            />
          </Form.Group>
          {isSubmit && (
            <div className="loading">
              <Spinner animation="grow" variant="primary" />
            </div>
          )}
          <Button className="btn hero-btn w-100" type="submit">
            Submit
          </Button>
          <p className="text-center mt-3 font-weight-bolder auth-text">OR</p>

          <a href="/login" className="my-3 text-center w-100 btn-link">
            {" "}
            Log In
          </a>
        </Form>
      </div>
    );
  }
}
SignUp.propTypes = {
  currentUser: PropTypes.any,
  loading: PropTypes.string,
  errors: PropTypes.any,
  loggedIn: PropTypes.any,
  username: PropTypes.any,
  success: PropTypes.any,
  authUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  unLoad: PropTypes.func.isRequired,
  history: PropTypes.any,
};
const mapStateToProps = (state) => ({
  success: state.succMsg.loggedIn,
  currentUser: state.userData.currentUser,
});
export default connect(mapStateToProps, {
  createUser,
  successWithMessage,
})(SignUp);
