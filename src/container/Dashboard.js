import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createError } from '../store/actions/userAction'

class Dashboard extends Component {
    componentDidMount(){
        const { currentUser, createError } = this.props
        const curUser  = localStorage.getItem("currentUser");
        const err = {
            message: "You are not logged In."
        }
        !curUser || !currentUser.id && createError(err)
    }
    render() {
        
        return (
            <div>
                Hello people
            </div>
        )
    }
}
const mapStateToProps = state => ({
    currentUser: state.userData.currentUser,
  });
export default connect(mapStateToProps, { createError })(Dashboard)
