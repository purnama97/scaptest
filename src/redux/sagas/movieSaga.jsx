import { call, put, takeLatest } from "redux-saga/effects";

import {
    GET_MOVIE_REQUESTED,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAILED,
    POST_MOVIE_REQUESTED,
    POST_MOVIE_SUCCESS,
    POST_MOVIE_FAILED,
} from "../../constans/action-types";

import apiMovie from '../actions/movieAction';

//middleware functions
function* getMovie() {
  try {
    const movie = yield call(apiMovie, "get");
    yield put({type: GET_MOVIE_SUCCESS, data:movie});
  } catch (error) {
    yield put({ type:  GET_MOVIE_FAILED, payload: error });
  }
}

function* shareMovie(action) {
  try {
    const movie = yield call(apiMovie, "share", action.payload.idVideo);
    yield put({type: POST_MOVIE_SUCCESS, data:movie});
  } catch (error) {
    yield put({ type:  POST_MOVIE_FAILED, payload: error });
  }
}

export default function* movieSaga() {
  yield takeLatest(POST_MOVIE_REQUESTED, shareMovie);
  yield takeLatest(GET_MOVIE_REQUESTED, getMovie);
}