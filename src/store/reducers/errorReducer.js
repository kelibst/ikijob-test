const errorReducer = (state = { err: {} }, action) => {
    switch (action.type) {
      case 'CREATE_ERROR':
        debugger
        return {
          ...state,
          err: action.payload,
        }
      default:
        return state;
    }
  };
  
export default errorReducer;