import { combineReducers } from 'redux'
import usersReducer from './usersReducer.js'
import authReducer from './authReducer.js'

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
})
