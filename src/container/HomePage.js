import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import User from "../components/User";
import { fetchUsers } from "../store/actions/userAction";

class HomePage extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="homepage">
        {users.data ? (
          users.data.map((user) => (
          <User user={user} key={user.first_name} />
          ))
        ) : (
          <Spinner animation="grow" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userData.users,
});

export default connect(mapStateToProps, { fetchUsers })(HomePage);
