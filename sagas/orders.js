import axios from 'axios';
import {
  LOAD_ORDER_FAILURE,
  LOAD_ORDER_REQUEST,
  LOAD_ORDER_SUCCESS,
  LOAD_SALE_REQUEST,
  LOAD_SALE_SUCCESS,
  LOAD_SALE_FAILURE,
  LOAD_ONSALE_REQUEST,
  LOAD_ONSALE_SUCCESS,
  LOAD_ONSALE_FAILURE,
  LOAD_TRACKING_REQUEST,
  LOAD_TRACKING_SUCCESS,
  LOAD_TRACKING_FAILURE,
  LOAD_ORDERCHECK_FAILURE,
  LOAD_ORDERCHECK_REQUEST,
  LOAD_ORDERCHECK_SUCCESS,
} from '../reducers/orders';
import {all, fork, call, put, takeLatest, throttle} from 'redux-saga/effects';

// 4
function loadOrderAPI(data) {
  console.log('In SAGA, loadOrderAPI, data : ', data);
  return axios.get(`/mypage/purchase?userId=${data}`, data);
}

function loadSaleAPI(data) {
  console.log('In SAGA, loadSaleAPI, data : ', data);
  return axios.get(`/mypage/sale?userId=${data}`, data);
}

function loadOnsaleAPI(data) {
  console.log('In SAGA, loadOnsaleAPI, data : ', data);
  return axios.get(`/mypage/onsale?userId=${data}`, data);
}

function loadTrackingAPI(data) {
  console.log('In SAGA, loadOTrackingAPI, data : ', data);
  return axios.get(`/mypage/tracking?local.userId=${data}`, data);
}

function loadOrderCheckAPI(data) {
  console.log('In SAGA, loadOrdercheckAPI, data : ', data);
  return axios.get(`/mypage/ordercheck?userId=${data}`, data);
}

// 3
function* loadOrder(action) {
  console.log('loadOrder saga', action);
  try {
    const result = yield call(loadOrderAPI, action.data);
    console.log('In SAGA, loadOrder, restul : ', result);
    yield put({
      type: LOAD_ORDER_SUCCESS,
      // TODO : data: result.data,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ORDER_FAILURE,
      error: err.response.data,
    });
  }
}

function* loadSale(action) {
  console.log('loadSale saga', action);
  try {
    const result = yield call(loadSaleAPI, action.data);
    console.log('In SAGA, loadSale, restul : ', result);
    yield put({
      type: LOAD_SALE_SUCCESS,
      // TODO : data: result.data,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_SALE_FAILURE,
      error: err.response.data,
    });
  }
}

function* loadOnsale(action) {
  console.log('loadOnsale saga', action);
  try {
    const result = yield call(loadOnsaleAPI, action.data);
    console.log('In SAGA, loadOnsale, restul : ', result);
    yield put({
      type: LOAD_ONSALE_SUCCESS,
      // TODO : data: result.data,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ONSALE_FAILURE,
      error: err.response.data,
    });
  }
}

function* loadTracking(action) {
  console.log('loadTracking saga', action);
  try {
    const result = yield call(loadTrackingAPI, action.data);
    console.log('In SAGA, loadTracking, result : ', result);
    yield put({
      type: LOAD_TRACKING_SUCCESS,
      // TODO : data: result.data,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_TRACKING_FAILURE,
      error: err.response.data,
    });
  }
}

function* loadOrderCheck(action) {
  console.log('loadOrdercheck saga', action);
  try {
    const result = yield call(loadOrderCheckAPI, action.data);
    console.log('In SAGA, loadOrderCheck, restul : ', result);
    yield put({
      type: LOAD_ORDERCHECK_SUCCESS,
      // TODO : data: result.data,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ORDERCHECK_FAILURE,
      error: err.response.data,
    });
  }
}

// 2
function* watchLoadOrder() {
  console.log('watchLoadOrder', loadOrder);
  yield takeLatest(LOAD_ORDER_REQUEST, loadOrder);
}

function* watchLoadSale() {
  console.log('watchLoadSale', loadSale);
  yield takeLatest(LOAD_SALE_REQUEST, loadSale);
}

function* watchLoadOnsale() {
  console.log('watchLoadOnsale', loadOnsale);
  yield takeLatest(LOAD_ONSALE_REQUEST, loadOnsale);
}

function* watchLoadTracking() {
  console.log('watchLoadTracking', loadTracking);
  yield takeLatest(LOAD_TRACKING_REQUEST, loadTracking);
}

function* watchLoadOrderCheck() {
  console.log('watchLoadOrderCheck', loadOrderCheck);
  yield takeLatest(LOAD_ORDERCHECK_REQUEST, loadOrderCheck);
}

// 1
export default function* orderSaga() {
  yield all([
    fork(watchLoadOrder),
    fork(watchLoadSale),
    fork(watchLoadOnsale),
    fork(watchLoadTracking),
    fork(watchLoadOrderCheck),

    // fork(watchLoadReview),
    // fork(watchAddQnA),
    // fork(watchDeleteQnA),
    // fork(watchPatchQnA),
  ]);
}
