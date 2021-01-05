import React, { Component } from "react";
import { Form, Spinner, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { authUser } from "../../store/actions/userAction"
import "./auth.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      err: false,
      data: {
        email: "",
        password: "",
      },
    };
  }

  componentDidUpdate(){
    const { currentUser, history } = this.props;
    currentUser.id
        && history.push(`/dashboard/${currentUser.id}`);
  }
  render() {
    const { authUser } = this.props
    const handleChange = (e) => {
      const { id, value } = e.target;
      const { data } = this.state;
      this.setState({
        ...this.state,
        data: {
          ...data,
          [id]: value,
        },
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        isSubmit: true,
      });

      const { data } = this.state;
       
      authUser(data);
      
    };
    const { isSubmit } = this.state;
    return (
      <div className="auth-in">
        <h1 className="auth-header py-5 text-center font-weight-bolder">
          Sign In
        </h1>
        <p className="auth-desc pb-5 text-center font-weight-bolder">
          Hey! Log In to manage your account.
        </p>

        <Form
          className="user-form p-5 shadow-lg bg-white"
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="email" className="pb-3">
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

          <Form.Group controlId="password" className="pb-5">
            <Form.Control
              required
              type="password"
              placeholder="Password"
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
          <a href="/signup" className="my-3 text-center w-100 btn-link">
            {" "}
            Register
          </a>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  success: state.succMsg.loggedIn,
  currentUser: state.userData.currentUser,
});
export default connect(mapStateToProps, { authUser })(Login);
