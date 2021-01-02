const initialState = {
    loading: true,
    username: '',
    loggedIn: false,
    currentUser: {},
    users: {}
};
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USERS':
        return {
          ...state,
          users: action.payload,
        };
  
      default:
        return state;
    }
};
  
export default userReducer;