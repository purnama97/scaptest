import { spawn } from 'redux-saga/effects'

// Sagas
import authSaga from './authSaga'
import movieSaga from './movieSaga'

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!")
  yield spawn(authSaga)
  yield spawn(movieSaga)
}