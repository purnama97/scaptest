import { call, put, takeLatest } from "redux-saga/effects";

import { 
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION_REQUESTED,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED
} from '../../constans/action-types'

import apiAuth from '../actions/authAction';

// //middleware functions
// function* getMovie() {
//   try {
//     const movie = yield call(apiMovie, "get");
//     yield put({type: GET_MOVIE_SUCCESS, data:movie});
//   } catch (error) {
//     yield put({ type:  GET_MOVIE_FAILED, payload: error });
//   }
// }

function* registration(action) {
  try {
    const user = yield call(apiAuth, "registration", action.payload.data);
    yield put({type: REGISTRATION_SUCCESS, data:user});
  } catch (error) {
    yield put({ type:  REGISTRATION_FAILED, payload: error });
  }
}

export default function* authSaga() {
  yield takeLatest(REGISTRATION_REQUESTED, registration);
}