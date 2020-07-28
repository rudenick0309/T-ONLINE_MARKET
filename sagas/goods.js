import axios from "axios";
import {ADD_QUESTION_REQUEST, ADD_QUESTION_SUCCESS, ADD_QUESTION_FAILURE} from "../reducers/store";
import {all, fork, call, put, takeLatest, throttle} from "redux-saga/effects";

// 4
function qnaPostsAPI(data) {
  // TODO: return axios.post("/post/", data)
}

// 3
function* addQnA(action) {
  try {
    // TODO : const result = yield call(addQnAAPI, action.data);
    yield put({
      type:  ADD_QUESTION_SUCCESS,
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

// 2
function* watchAddQna() {
  yield takeLatest(ADD_QUESTION_REQUEST, addQnA);
}

// 1
export default function* goodsSaga() {
  yield all([
    fork(watchAddQna),
  ]);
}
