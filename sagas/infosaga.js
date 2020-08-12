import axios from 'axios';
import {
  POST_EDITINFO_REQUEST,
  POST_EDITINFO_SUCCESS,
  POST_EDITINFO_FAILURE,
} from '../reducers/myinfochange';
import {all, fork, call, put, takeLatest, throttle} from 'redux-saga/effects';

// 4
function postEditInfoAPI(data) {
  return axios.post('/user/edituserinfo', data);
}

// 3
function* postEditInfo(action) {
  console.log('postedit saga', action);
  try {
    // TODO : const result = yield call(postLoginAPI, action.data);
    yield put({
      type: POST_EDITINFO_SUCCESS,
      // TODO : data: result.data,
      data: action.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_EDITINFO_FAILURE,
      error: err.response.data,
    });
  }
}

// 2
function* watchPostEditInfo() {
  console.log('watchPostEditInfo', postEditInfo);
  yield takeLatest(POST_EDITINFO_REQUEST, postEditInfo);
}

// function* watchLogout() {
// console.log("watchPostlogout", postLogout)
//   yield takeLatest(POST_LOGOUT_REQUEST, postLogout);
// }

// 1
export default function* EditInfoSaga() {
  yield all([
    fork(watchPostEditInfo),
    // fork(watchLogout),

    // fork(watchLoadReview),
    // fork(watchAddQnA),
    // fork(watchDeleteQnA),
    // fork(watchPatchQnA),
  ]);
}
