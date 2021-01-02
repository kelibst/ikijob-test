import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/userAction";

class HomePage extends Component {
componentDidMount(){
    const { fetchUsers } = this.props
    fetchUsers()
}  


  render() {
    return (
      <div className="homepage">
        Some home contents
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    users: state.userData.users
});

export default connect(mapStateToProps, {fetchUsers})(HomePage);