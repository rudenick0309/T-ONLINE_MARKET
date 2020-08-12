import axios from 'axios';
import {
  POST_INFOCHECK_REQUEST,
  POST_INFOCHECK_SUCCESS,
  POST_INFOCHECK_FAILURE,
} from '../reducers/myinfocheck';
import {all, fork, call, put, takeLatest, throttle} from 'redux-saga/effects';

// 4
function postInfoCheckAPI(data) {
  return axios.post('/user/certification', data);
}

// 3
function* postInfoCheck(action) {
  console.log('InfoCheck saga', action);
  try {
    // TODO : const result = yield call(postLoginAPI, action.data);
    yield put({
      type: POST_INFOCHECK_SUCCESS,
      // TODO : data: result.data,
      data: action.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_INFOCHECK_FAILURE,
      error: err.response.data,
    });
  }
}

// 2
function* watchPostInfocheck() {
  console.log('watchPostInfocheck', postInfoCheck);
  yield takeLatest(POST_INFOCHECK_REQUEST, postInfoCheck);
}

// function* watchLogout() {
// console.log("watchPostlogout", postLogout)
//   yield takeLatest(POST_LOGOUT_REQUEST, postLogout);
// }

// 1
export default function* infoCheckSaga() {
  yield all([
    fork(watchPostInfocheck),
    // fork(watchLogout),

    // fork(watchLoadReview),
    // fork(watchAddQnA),
    // fork(watchDeleteQnA),
    // fork(watchPatchQnA),
  ]);
}
