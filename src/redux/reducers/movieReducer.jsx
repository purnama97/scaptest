import { 
    POST_MOVIE_REQUESTED,
    POST_MOVIE_SUCCESS,
    POST_MOVIE_FAILED,
    GET_MOVIE_REQUESTED,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAILED
} from '../../constans/action-types'

const initialState = {
    loading: false,
    data: {},
    error: null,
}
  
function movieReducer(state = initialState, action) {
  console.log(action.type)
    switch (action.type) {
      case POST_MOVIE_REQUESTED:
      case GET_MOVIE_REQUESTED:
        return {
          ...state,
          loading: true,
        }
      case POST_MOVIE_SUCCESS:
      case GET_MOVIE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data,
          error:false
        }
      case POST_MOVIE_FAILED:
      case GET_MOVIE_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
      default:
        return state
    }
}

export default movieReducer;