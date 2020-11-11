import { spawn } from 'redux-saga/effects'

// Sagas
import authSaga from './authSaga'
import movieSaga from './movieSaga'

// Export the root saga
export default function* rootSaga() {
  yield spawn(authSaga)
  yield spawn(movieSaga)
}