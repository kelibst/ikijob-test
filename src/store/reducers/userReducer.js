const initialState = {
  loading: true,
  username: "",
  loggedIn: false,
  currentUser: {},
  users: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      
      return {
        ...state,
        users: action.payload,
      };

    case "CREATE_USER":
      const data = JSON.stringify(action.payload);
      localStorage.setItem("currentUser", data);
      
      return {
        ...state,
        currentUser: action.payload.data,
      };
      case "AUTH_USER":  
      return {
        ...state,
        currentUser: action.payload.data,
      };
    default:
      return state;
  }
};

export default userReducer;
