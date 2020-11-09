import { combineReducers } from 'redux'

import auth from './authReducer'
import movie from './movieReducer'

export default combineReducers({
  auth,
  movie
})