import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import successReducer from './successReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  userData: userReducer,
  succMsg: successReducer,
});
export default rootReducer;