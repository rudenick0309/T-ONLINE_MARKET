import axios from "axios";
import {
  ADD_QUESTION_REQUEST,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  PATCH_QUESTION_FAILURE,
  PATCH_QUESTION_SUCCESS, LOAD_QUESTION_REQUEST, LOAD_QUESTION_SUCCESS, LOAD_QUESTION_FAILURE, PATCH_QUESTION_REQUEST
} from "../reducers/store";
import {all, fork, call, put, takeLatest, throttle} from "redux-saga/effects";

// 4
function loadQnAAPI(data) {
  // TODO: return axios.post("/post/", data)
}

function addQnAAPI(data) {
  // TODO: return axios.post("/post/", data)
}

function deleteQnAAPI(data) {
  // TODO: return axios.post("/post/", data)
}

function patchQnAAPI(data) {
  // TODO: return axios.post("/post/", data)
}

// 3
function* loadQnA(action) {
  try {
    yield delay(1000);
    // TODO : const result = yield call(loadQnAAPI, action.data);
    yield put({
      type: LOAD_QUESTION_SUCCESS,
      // TODO : data: result.data,
      data: action.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_QUESTION_FAILURE,
      error: err.response.data,
    });
  }
}

function* addQnA(action) {
  try {
    // TODO : const result = yield call(addQnAAPI, action.data);
    yield put({
      type: ADD_QUESTION_SUCCESS,
      // TODO : data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_QUESTION_FAILURE,
      error: err.response.data,
    });
  }
}

function* deleteQnA(action) {
  try {
    // TODO : const result = yield call(deleteQnAAPI, action.data);
    yield put({
      type: DELETE_QUESTION_SUCCESS,
      // TODO : data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: DELETE_QUESTION_FAILURE,
      error: err.response.data,
    });
  }
}

function* patchQnA(action) {
  try {
    // TODO : const result = yield call(patchQnAAPI, action.data);
    yield put({
      type: PATCH_QUESTION_SUCCESS,
      // TODO : data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: PATCH_QUESTION_FAILURE,
      error: err.response.data,
    });
  }
}

// 2
function* watchLoadQnA() {
  yield takeLatest(LOAD_QUESTION_REQUEST, loadQnA);
}

function* watchAddQnA() {
  yield takeLatest(ADD_QUESTION_REQUEST, addQnA);
}

function* watchDeleteQnA() {
  yield takeLatest(DELETE_QUESTION_REQUEST, deleteQnA);
}

function* watchPatchQnA() {
  yield takeLatest(PATCH_QUESTION_REQUEST, patchQnA);
}

// 1
export default function* goodsSaga() {
  yield all([
    fork(watchLoadQnA),
    fork(watchAddQnA),
    fork(watchDeleteQnA),
    fork(watchPatchQnA),
    // fork(watchLoadReview),
    // fork(watchAddQnA),
    // fork(watchDeleteQnA),
    // fork(watchPatchQnA),
  ]);
}
