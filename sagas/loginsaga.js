import axios from 'axios';
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_LOGOUT_REQUEST,
  POST_LOGOUT_SUCCESS,
  POST_LOGOUT_FAILURE,
  // LOGOUT
} from '../reducers/login';
import {all, fork, call, put, takeLatest, throttle} from 'redux-saga/effects';

// 4
function postLoginAPI(data) {
  console.log('In SAGA, postLoginAPI, data : ', data);
  return axios.post('/user/login', data);
}

function postLogoutAPI(data) {
  return axios.post('/user/signout', data);
}

// 3
function* postLogin(action) {
  console.log('postlogin saga', action);
  try {
    const result = yield call(postLoginAPI, action.data);
    console.log('In SAGA, postLogin, restul : ', result);
    yield put({
      type: POST_LOGIN_SUCCESS,
      // TODO : data: result.data,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

// function* postLogout(action) {
//   try {
//     const result = yield call(postLogoutAPI, action);
//     yield put({
//       type: LOGOUT,
//       // TODO : data: result.data,
//     });
//   } catch (err) {
//     console.log(err);
//     yield put({
//       type: POST_LOGIN_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

function* postLogout(action) {
  try {
    const result = yield call(postLogoutAPI, action);
    yield put({
      type: POST_LOGOUT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_LOGOUT_FAILURE,
      error: err.response.data,
    });
  }
}

// 2
function* watchPostLogin() {
  console.log('watchPostlogin', postLogin);
  yield takeLatest(POST_LOGIN_REQUEST, postLogin);
}

// function* watchLogout() {
//   console.log('watchPostlogout', postLogout);
//   yield takeLatest(LOGOUT, postLogout);
// }

function* watchLogout() {
  console.log('watchPostlogout', postLogout);
  yield takeLatest(POST_LOGOUT_REQUEST, postLogout);
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
