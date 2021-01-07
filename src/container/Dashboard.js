import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createError,
  fetchUser,
  logCurrentUserOut,
} from "../store/actions/userAction";

class Dashboard extends Component {
  componentDidMount() {
    const { currentUser, logCurrentUserOut } = this.props;
    let curUser = localStorage.getItem("currentUser");

    curUser = JSON.parse(curUser);
    !currentUser.email && curUser &&
      curUser.data.email &&
      logCurrentUserOut({
        data: curUser,
      });
  }
  render() {
    const { currentUser } = this.props;
    return (
      <div className="dashboard">
        <div className="card col dash-user col-md-8 mx-center">
          <h5 className="user-card-header card-title">
            {currentUser.first_name}
          </h5>
          <img
            className="card-img-top"
            src={
              currentUser && currentUser.avatar
                ? currentUser.avatar
                : "https://reqres.in/img/faces/2-image.jpg"
            }
            alt="Card-img-cap"
          />
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
export default connect(mapStateToProps, {
  createError,
  fetchUser,
  logCurrentUserOut,
})(Dashboard);
