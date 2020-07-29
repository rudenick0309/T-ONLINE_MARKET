import axios from "axios";
import {POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE,
    LOGOUT
} from "../reducers/login";
import {all, fork, call, put, takeLatest, throttle} from "redux-saga/effects";

// 4
function postLoginAPI(data) {
  // TODO: return axios.post("/post/", data)
}

function logoutAPI(data) {
  // TODO: return axios.post("/post/", data)
}


// 3
function* postLogin(action) {
  try {
    yield delay(1000);
    // TODO : const result = yield call(loadQnAAPI, action.data);
    yield put({
      type: POST_LOGIN_SUCCESS,
      // TODO : data: result.data,
      data: action.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* postLogout(action) {
  try {
    // TODO : const result = yield call(addQnAAPI, action.data);
    yield put({
      type: LOGOUT,
      // TODO : data: result.data,
    });
  } catch (err) {
    console.log(err);
    
  }
}


// 2
function* watchPostLogin() {
  yield takeLatest(POST_LOGIN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(ADD_QUESTION_REQUEST, logout);
}


// 1
export default function* loginSaga() {
  yield all([
    fork(watchPostLogin),
    fork(watchLogout),
    
    // fork(watchLoadReview),
    // fork(watchAddQnA),
    // fork(watchDeleteQnA),
    // fork(watchPatchQnA),
  ]);
}
