import axios from "axios";
import {
  ADD_QUESTION_REQUEST,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAILURE,
  PATCH_QUESTION_FAILURE,
  PATCH_QUESTION_SUCCESS,
  LOAD_QUESTION_REQUEST,
  LOAD_QUESTION_SUCCESS,
  LOAD_QUESTION_FAILURE,
  PATCH_QUESTION_REQUEST,
  HOME_REQUEST,
  HOME_SUCCESS,
  HOME_FAILURE,
  LOAD_GOODSINFO_REQUEST,
  LOAD_GOODSINFO_SUCCESS,
  LOAD_GOODSINFO_FAILURE,
  LOAD_GOODSLIST_REQUEST,
  LOAD_GOODSLIST_SUCCESS,
  LOAD_GOODSLIST_FAILURE,
  LOAD_REVIEW_REQUEST,
  ADD_REVIEW_REQUEST,
  DELETE_REVIEW_REQUEST,
  LOAD_REVIEW_SUCCESS,
  LOAD_REVIEW_FAILURE,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILURE, PATCH_REVIEW_SUCCESS, PATCH_REVIEW_FAILURE, PATCH_REVIEW_REQUEST,
} from "../reducers/goods";
import {all, fork, call, put, takeLatest, throttle} from "redux-saga/effects";

// console.log('In saga, at 0 : ', 'saga executes');

// 4
function homeAPI() {
  return axios.get("/home")
}

function goodsListAPI(data) {
  // console.log("In SAGA, goodsListAPI, data : ", data)
  return axios.get(`/goods/list?min=3000&max=40000&filter=${data}`)
}

function goodsInfoAPI(data) {
  console.log("In SAGA, goodsInfoAPI, data : ", data)
  return axios.get(`/goods/info?goods_id=${data.id}`)
}

function loadQnAAPI(data) {
  console.log("In SAGA, loadQnAAPI, data : ", data)
  return axios.get(`/goods/info/qa_lists?goods_id=${data}`)
}

function addQnAAPI(data) {
  console.log("In SAGA, addQnAAPI, data : ", data)
  return axios.post("goods/info/qa_lists", data)
}

function deleteQnAAPI(data) {
  console.log("In SAGA, deleteQnAAPI, data : ", data)
  return axios.post("goods/info/qa_lists", data)
}

function patchQnAAPI(data) {
  console.log("In SAGA, patchQnAAPI, data : ", data)
  return axios.post("goods/info/qa_lists", data)
}

// review api
function loadReviewAPI(data) {
  console.log("In SAGA, loadReviewAPI, data : ", data)
  return axios.get(`/goods/info/review?goods_id=${data}`)
}

function addReviewAPI(data) {
  console.log("In SAGA, addReviewAPI, data : ", data)
  return axios.post("/goods/info/review", data)
}

function deleteReviewAPI(data) {
  console.log("In SAGA, deleteReviewAPI, data : ", data)
  return axios.post("/goods/info/review", data)
}

function patchReviewAPI(data) {
  console.log("In SAGA, patchReviewAPI, data : ", data)
  return axios.post("/goods/info/review", data)
}



// 3
function* home() {
  try {
    const result = yield call(homeAPI);
    yield put({
      type: HOME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: HOME_FAILURE,
      error: err.response.data,
    });
  }
}

// goodsList
function* goodsList(action) {
  // console.log("In SAGA, goodsList, action : ", action)
  try {
    const result = yield call(goodsListAPI, action.data); // TODO : max params?
    // console.log("In SAGA, goodsList, result : ", result)
    yield put({
      type: LOAD_GOODSLIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_GOODSLIST_FAILURE,
      error: err.response.data,
    });
  }
}

// goodsInfo
function* goodsInfo(action) {
  // console.log("In SAGA, goodsInfo, executes, action : ", String(action.id))
  // console.log("In SAGA, goodsInfo, executes, action : ", action)
  // let data = action.id
  try {
    const result = yield call(goodsInfoAPI, action.id);
    yield put({
      type: LOAD_GOODSINFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_GOODSINFO_FAILURE,
      error: err.response.data,
    });
  }
}

// review
function* loadReview(action) {
  console.log('In SAGA, loadReview, action : ', action);
  try {
    const result = yield call(loadReviewAPI, action.id);
    console.log('IN GOODS OF SAGA loadQnA, result : ', result);
    yield put({
      type: LOAD_REVIEW_SUCCESS,
      // TODO : data: result.data,
      data: result.data[0],
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_REVIEW_FAILURE,
      error: err.response.data,
    });
  }
}

function* addReview(action) {
  console.log('In SAGA, addReview, action : ', action);
  try {
    // const result = yield call(addQnAAPI, action.text);
    // console.log('In SAGA of addQnA, result : ', result)
    yield put({
      type: ADD_REVIEW_SUCCESS,
      data: action.text,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: ADD_REVIEW_FAILURE,
      error: err.response.data,
    });
  }
}

function* deleteReview(action) {
  console.log('In SAGA, deleteReview, action : ', action);
  try {
    // TODO : const result = yield call(deleteQnAAPI, action.data);
    yield put({
      type: DELETE_REVIEW_SUCCESS,
      data: action.id,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: DELETE_REVIEW_FAILURE,
      error: err.response.data,
    });
  }
}

function* patchReview(action) {
  console.log('In SAGA, patchReview, action : ', action);
  try {
    // TODO : const result = yield call(patchReviewAPI, action.data);
    yield put({
      type: PATCH_REVIEW_SUCCESS,
      // TODO : data: result.data,
      data: action.text,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: PATCH_REVIEW_FAILURE,
      error: err.response.data,
    });
  }
}

//  qna
function* loadQnA(action) {
  console.log('In GOODS of SAGA, loadQnA, action : ', action);
  try {
    // yield delay(1000);

    const result = yield call(loadQnAAPI, action.id);
    console.log('IN GOODS OF SAGA loadQnA, result : ', result);
    yield put({

      type: LOAD_QUESTION_SUCCESS,
      // TODO : data: result.data,
      data: result.data[0],
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_QUESTION_FAILURE,
      error: err.response.data,
    });
  }
}

// login function is not executes. QnA login has all the dummy.
function* addQnA(action) {
  // console.log('In GOODS of SAGA, addQnA, action : ', action);
  try {
    // const result = yield call(addQnAAPI, action.text);
    // console.log('In SAGA of addQnA, result : ', result)
    yield put({
      type: ADD_QUESTION_SUCCESS,
      data: action.text,
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
      data: action.id,
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
  // console.log(' In goods of SAGA 3, : ', action);
  try {
    // TODO : const result = yield call(patchQnAAPI, action.data);
    yield put({
      type: PATCH_QUESTION_SUCCESS,
      // TODO : data: result.data,
      data: action.text,
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
function* watchHome() {
  yield takeLatest(HOME_REQUEST, home);
}

function* watchGoodsList() {
  console.log("In SAGA, goodsList, executes ")
  yield takeLatest(LOAD_GOODSLIST_REQUEST, goodsList);
}

function* watchGoodsInfo() {
  console.log("In SAGA, goodsInfo, executes ")
  yield takeLatest(LOAD_GOODSINFO_REQUEST, goodsInfo);
}

function* watchLoadReview() {
  console.log('In SAGA, loadReview, watchLoadReview');
  yield takeLatest(LOAD_REVIEW_REQUEST, loadReview);
}

function* watchAddReview() {
  console.log('In SAGA, addReivew, watchAddReview');
  yield takeLatest(ADD_REVIEW_REQUEST, addReview);
}

function* watchDeleteReview() {
  console.log('In SAGA, deleteReview, watchDeleteReview');
  yield takeLatest(DELETE_REVIEW_REQUEST, deleteReview);
}

function* watchPatchReview() {
  console.log('In SAGA, patchReview, watchPatchReview');
  yield takeLatest(PATCH_REVIEW_REQUEST, patchReview);
}

function* watchLoadQnA() {
  console.log('In GOODS of SAGA, watchLoadQnA');
  yield takeLatest(LOAD_QUESTION_REQUEST, loadQnA);
}

function* watchAddQnA() {
  console.log('In GOODS of SAGA, watchAddQnA');
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
  console.log('In GOODS of SAGA, goodsSaga');
  yield all([
    fork(watchHome),
    fork(watchGoodsList),
    fork(watchGoodsInfo),
    fork(watchLoadQnA),
    fork(watchAddQnA),
    fork(watchDeleteQnA),
    fork(watchPatchQnA),
    fork(watchLoadReview),
    fork(watchAddReview),
    fork(watchDeleteReview),
    fork(watchPatchReview),
  ]);
}
