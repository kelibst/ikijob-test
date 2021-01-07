import React, { Component } from "react";
import { connect } from "react-redux";
import { createError, fetchUser } from "../store/actions/userAction";

class Dashboard extends Component {

  render() {
      const { currentUser } = this.props
    return (
      <div className="dashboard">
        <div className="card col dash-user col-md-8 mx-center">
          <h5 className="user-card-header card-title">{currentUser.first_name}</h5>
          <img class="card-img-top" src={currentUser && currentUser.avatar ? currentUser.avatar : 'https://reqres.in/img/faces/2-image.jpg' } alt="Card image cap" />
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
