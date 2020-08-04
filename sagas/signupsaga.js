import axios from 'axios';
import {
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILURE,
} from '../reducers/signup';
import {all, fork, call, put, takeLatest, throttle} from 'redux-saga/effects';

console.log('In saga, at 0 : ', 'saga executes');
// 4

function PostSignupAPI(data) {
  console.log('In goods of SAGA 4, : ', data);
  // return axios.post("/goods/info/qa_lists", data)
  return axios.post('/user/signup', data);
}

// 3

function* PostSignup(action) {
  console.log('In goods of SAGA, at 3 : ', action);

  try {
    const result = yield call(PostSignupAPI, action.data);
    yield put({
      type: POST_SIGNUP_SUCCESS,
      data: result.text,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_SIGNUP_FAILURE,
      error: err.response.data,
    });
  }
}

// 2

function* watchPostSignup() {
  console.log(' In goods of SAGA 2, : ');
  yield takeLatest(POST_SIGNUP_REQUEST, PostSignup);
  console.log('In goods of SAGA 2 - 1, : ');
}

// 1
export default function* signupSaga() {
  yield all([
    fork(watchPostSignup),
    // fork(watchLogout),
  ]);
}
