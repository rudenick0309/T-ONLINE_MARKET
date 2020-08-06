import axios from 'axios';
import {
  POST_RESIGN_REQUEST,
  POST_RESIGN_SUCCESS,
  POST_RESIGN_FAILURE,
} from '../reducers/resign';
import {all, fork, call, put, takeLatest, throttle} from 'redux-saga/effects';

// 4
function postResignAPI(data) {
  return axios.post('/user/resign', data);
}

// 3
function* postResign(action) {
  console.log('postResign saga', action);
  try {
    const result = yield call(postResignAPI, action.data);
    yield put({
      type: POST_RESIGN_SUCCESS,
      // TODO : data: result.data,
      data: action.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_RESIGN_FAILURE,
      error: err.response.data,
    });
  }
}

// function* postLogout(action) {
//   try {
//     // TODO : const result = yield call(addQnAAPI, action.data);
//     yield put({
//       type: POST_LOGOUT_SUCCESS,
//       // TODO : data: result.data,
//     });
//   } catch (err) {
//     type: POST_LOGOUT_FAILURE,
//     console.log(err);,

//   }
// }

// 2
function* watchPostResign() {
  console.log('watchPostResign', postResign);
  yield takeLatest(POST_RESIGN_REQUEST, postResign);
}

// function* watchLogout() {
// console.log("watchPostlogout", postLogout)
//   yield takeLatest(POST_LOGOUT_REQUEST, postLogout);
// }

// 1
export default function* resignSaga() {
  yield all([
    fork(watchPostResign),
    // fork(watchLogout),

    // fork(watchLoadReview),
    // fork(watchAddQnA),
    // fork(watchDeleteQnA),
    // fork(watchPatchQnA),
  ]);
}
