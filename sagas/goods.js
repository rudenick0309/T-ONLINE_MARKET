import axios from 'axios';
import {
  QNA_POST_REQUEST,
  QNA_POST_SUCCESS,
  QNA_POST_FAILURE,
} from '../reducers/goods';
import {all, fork, call, put, takeLatest, throttle} from 'redux-saga/effects';

function qnaPostsAPI(data) {
  // TODO: return axios.post("/post/", data);
  // TODO : url should check
}

function* qnaPost(action) {
  try {
    // TODO : const result = yield call(qnaPostsAPI, action.data);
    yield put({
      type: QNA_POST_SUCCESS,
      // TODO : data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: QNA_POST_FAILURE,
      error: err.response.data,
    });
  }
}

//
function* watchQnAPost() {
  yield takeLatest(QNA_POST_REQUEST, qnaPost);
}

//
export default function* goodsSaga() {
  yield all([
    fork(watchQnAPost),
  ]);
}
