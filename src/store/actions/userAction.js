import Axios from "axios";

const authUser = (data) => (dispatch) => {};

const createUser = (data) => (dispatch) => {};

const fetchUser = (username) => (dispatch) => {};

const fetchUsers = () => (dispatch) => {
  const url = "https://reqres.in/api/users";
  
  Axios.get(url)
    .then((res) => {
      dispatch({
        type: "GET_USERS",
        payload: res.data,
      });
      const payload = {
        message: 'List of all Users',
        type: 'get_users',
      };
      dispatch({
        type: 'SUCC_MSG',
        payload
      })
    })
    .catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );
};

const logCurrentUserOut = () => (dispatch) => {};

export { createUser, fetchUser, fetchUsers, logCurrentUserOut, authUser };
