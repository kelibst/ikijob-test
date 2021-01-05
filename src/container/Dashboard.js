import React, { Component } from "react";
import { connect } from "react-redux";
import { createError, fetchUser } from "../store/actions/userAction";

class Dashboard extends Component {
  componentDidMount() {
    const { currentUser, createError, history, fetchUser } = this.props;
    const curUser = localStorage.getItem("currentUser");
    let jwtId = localStorage.getItem('jwtId')
    jwtId = JSON.parse(jwtId)
    const err = {
      message: "You are not logged In. Kindly login!",
    };
    currentUser && jwtId ? !currentUser.id && !jwtId.id && createError(err) && history.push("/login") : createError(err) && history.push("/login");
        currentUser && !currentUser.id && jwtId.id && fetchUser(jwtId)
  }
  render() {
      const { currentUser } = this.props
    return (
      <div className="dashboard">
        <div className="card col col-md-8 mx-center">
          <h5 className="user-card-header card-title">{currentUser.first_name}</h5>
          <img class="card-img-top" src={currentUser.avatar} alt="Card image cap" />
          <div className="card-body">
            <h6 className="card-user-name">
              {currentUser.first_name + " " + currentUser.last_name}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.userData.currentUser,
});
export default connect(mapStateToProps, { createError, fetchUser })(Dashboard);
