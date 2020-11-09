import { 
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTRATION_REQUESTED,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED
} from '../../constans/action-types'

const initialState = {
    loading: false,
    data: {},
    isLogin:false,
    error: null,
}
  
function movieReducer(state = initialState, action) {
  console.log(action.type)
    switch (action.type) {
      case REGISTRATION_REQUESTED:
      case LOGIN_REQUESTED:
        return {
          ...state,
          loading: true,
        }
      case REGISTRATION_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data,
          isLogin:true,
          error:false
        }
      case REGISTRATION_FAILED:
      case LOGIN_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
          isLogin:false,
        }
      default:
        return state
    }
}

export default movieReducer;