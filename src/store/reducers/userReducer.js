const initialState = {
    loading: true,
    username: '',
    loggedIn: false,
    currentUser: {},
};
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_FAVS':
        return {
          ...state,
          user_favorites: action.payload,
        };
  
      default:
        return state;
    }
};
  
export default userReducer;