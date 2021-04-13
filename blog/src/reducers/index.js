import { combineReducers } from 'redux';
import postReducer from './postReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
  // dummy: () => 10
  posts: postReducer,
  users: UsersReducer
});