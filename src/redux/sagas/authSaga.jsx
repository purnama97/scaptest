import { call, put, takeLatest } from "redux-saga/effects";

import { 
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION_REQUESTED,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGOUT_REQUESTED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../../constans/action-types'

import apiAuth from '../actions/authAction';

// //middleware functions
function* login(action) {
  try {
    const user = yield call(apiAuth, "login", action.payload);
    user.data ? yield put({type: LOGIN_SUCCESS, data:user.data}) : yield put({type: LOGIN_FAILED, message:user.error});
  } catch (error) {
    yield put({ type:  LOGIN_FAILED, payload: error });
  }
}

function* registration(action) {
  try {
    const user = yield call(apiAuth, "registration", action.payload);
    user.data ? yield put({type: REGISTRATION_SUCCESS, data:user.data}) : yield put({type: REGISTRATION_FAILED, message:user.error});
  } catch (error) {
    yield put({ type:  REGISTRATION_FAILED, payload: error });
  }
}

function* logout(action) {
  try {
    yield put({type: LOGOUT_SUCCESS, data:{}})
  } catch (error) {
    yield put({ type:  LOGOUT_FAILED, payload: error });
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUESTED, login);
  yield takeLatest(REGISTRATION_REQUESTED, registration);
  yield takeLatest(LOGOUT_REQUESTED, logout);
}