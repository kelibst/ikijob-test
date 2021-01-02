
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      userData: {
        email: '',
        password: '',
        username: '',
        firstname: '',
        lastname: '',
        password_confirmation: '',
      },
    };
  }

  render() {
    const handleChange = e => {
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
    // const {
    //   createUser,
    //   currentUser,
    //   authUser,
    //   errors,
    //   loading,
    //   unLoad,
    // } = this.props;
    const { isSubmit } = this.state;

    const handleSubmit = e => {
      e.preventDefault();
      const { userData } = this.state;
      this.setState({ isSubmit: true });
      // createUser(userData);
      // unLoad({ loading: true });
      // if (currentUser.id) {
      //   const { email, password, username } = userData;
      //   const data = {
      //     username,
      //     email,
      //     password,
      //   };
      //   authUser(data);
      // }
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

          <Form.Group controlId="firstname">
            <Form.Control
              required
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="lastname">
            <Form.Control
              required
              type="text"
              placeholder="Enter your last name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="username">
            <Form.Control
              required
              type="text"
              placeholder="Enter your unique username"
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

          <Button className="btn hero-btn w-100" type="submit">
            Submit
          </Button>
          <p className="text-center mt-3 font-weight-bolder auth-text">OR</p>

          <a href="/login" className="my-3 text-center w-100 btn-link">
            {' '}
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
  createUser: PropTypes.func.isRequired,
  username: PropTypes.any,
  authUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  unLoad: PropTypes.func.isRequired,
  history: PropTypes.any,
};
const mapStateToProps = state => ({
  loading: state.userData.loading,
  loggedIn: state.userData.loggedIn,
  currentUser: state.userData.currentUser,
});
export default connect(mapStateToProps, {

})(SignUp);