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
  LOAD_GOODSLIST_REQUEST, LOAD_GOODSLIST_SUCCESS, LOAD_GOODSLIST_FAILURE,
} from "../reducers/goods";
import {all, fork, call, put, takeLatest, throttle} from "redux-saga/effects";

// console.log('In saga, at 0 : ', 'saga executes');

// 4
function homeAPI() {
  return axios.get("/home")
}

function goodsListAPI() {
  console.log("In SAGA, goodsListAPI, executes")
  return axios.get(`/goods/list?max=40000`)
}

function goodsInfoAPI(data) {
  console.log("In SAGA, goodsInfoAPI, data : ", data)
  return axios.get(`/goods/info?goods_id=${data.id}`)
}

function loadQnAAPI(data) {
  // console.log('In GOODS of SAGA, loadQnAAPI', data);
  return axios.get(`/goods/info/qa_lists?goods_id=${data}`)
}

function addQnAAPI(data) {
  // console.log('In GOODS of SAGA, addQnAAPI', data);
  return axios.post("goods/info/qa_lists", data)
}

function deleteQnAAPI(data) {
  // TODO: return axios.post("/post/", data)
}

function patchQnAAPI(data) {
  // TODO: return axios.post("/post/", data)
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
function* goodsList() {
  console.log("In SAGA, goodsList, executes ")
  try {
    const result = yield call(goodsListAPI); // TODO : max params?
    console.log("In SAGA, goodsList, result : ", result)
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
  console.log("In SAGA, goodsInfo, executes, action : ", action)
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

function* loadQnA(action) {
  // console.log('In GOODS of SAGA, loadQnA, action : ', action);
  try {
    // yield delay(1000);

    const result = yield call(loadQnAAPI, action.id);
    // console.log('IN GOODSOFSAGA loadQnA, result : ', result);
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

function* addQnA(action) {
  // console.log('In GOODS of SAGA, addQnA, action : ', action);
  try {
    const result = yield call(addQnAAPI, action.data);
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

function* watchLoadQnA() {
  // console.log('In GOODS of SAGA, watchLoadQnA');
  yield takeLatest(LOAD_QUESTION_REQUEST, loadQnA);
}

function* watchAddQnA() {
  // console.log('In GOODS of SAGA, watchAddQnA');
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
  ]);
}
