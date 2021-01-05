import Axios from "axios";

const authUser = (data) => (dispatch) => {
  const url = "https://reqres.in/api/register";
  const userData = data;
  Axios.post(url, userData)
    .then((res) => {
      const data = JSON.stringify(res.data);
      localStorage.setItem("jwtId", data);
      const payload = {
        message: "You have successfully logged In",
        type: "auth_user",
      };
      dispatch({
        type: "SUCC_MSG",
        payload,
      });
      const userUrl = `https://reqres.in/api/users/${res.data.id}`;
      Axios.get(userUrl)
        .then((res) => {
          dispatch({
            type: "AUTH_USER",
            payload: res.data,
          });
        })
        .catch((err) =>
          dispatch({
            type: "CREATE_ERROR",
            payload: err,
          })
        );
    })
    .catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );
};

const createUser = (data) => (dispatch) => {
  const url = "https://reqres.in/api/users";
  const userData = {
    data: data,
  };
  Axios.post(url, userData)
    .then((res) => {
      dispatch({
        type: "CREATE_USER",
        payload: res.data,
      });
      const payload = {
        message: "Your registration is successfull. We are redirecting you",
        type: "create_user",
      };
      dispatch({
        type: "SUCC_MSG",
        payload,
      });
    })
    .catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );
};

const createError = (message) => (dispatch) =>
  dispatch({
    type: "CREATE_ERROR",
    payload: message,
  });

const fetchUser = (jwtId) => (dispatch) => {
  const userUrl = `https://reqres.in/api/users/${jwtId.id}`;
  Axios.get(userUrl)
    .then((res) => {
      dispatch({
        type: "AUTH_USER",
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );
};

const fetchUsers = () => (dispatch) => {
  const url = "https://reqres.in/api/users";
  Axios.get(url)
    .then((res) => {
      dispatch({
        type: "GET_USERS",
        payload: res.data,
      });
      const payload = {
        message: "List of all Users",
        type: "get_users",
      };
      dispatch({
        type: "SUCC_MSG",
        payload,
      });
    })
    .catch((err) =>
      dispatch({
        type: "CREATE_ERROR",
        payload: err,
      })
    );
};

const logCurrentUserOut = () => (dispatch) => {
  
  const res = {
    data: {},
  };
  dispatch({
    type: "GET_USERS",
    payload: res.data,
  });
};

export {
  createUser,
  fetchUser,
  createError,
  fetchUsers,
  logCurrentUserOut,
  authUser,
};
