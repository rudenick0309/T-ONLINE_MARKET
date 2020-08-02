import axios from "axios";
import {POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE
    // LOGOUT
} from "../reducers/login";
import {all, fork, call, put, takeLatest, throttle} from "redux-saga/effects";

// 4
function postLoginAPI(data) {
  // TODO: return axios.post("/post/", data)
}

function postLogoutAPI(data) {
  // TODO: return axios.post("/post/", data)
}


// 3
function* postLogin(action) {
  console.log("postlogin saga", action);
  try {
    // TODO : const result = yield call(postLoginAPI, action.data);
    yield put({
      type: POST_LOGIN_SUCCESS,
      // TODO : data: result.data,
      data: action.data,
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
function* watchPostLogin() {
  console.log("watchPostlogin", postLogin)
  yield takeLatest(POST_LOGIN_REQUEST, postLogin);
}

// function* watchLogout() {
  // console.log("watchPostlogout", postLogout)
//   yield takeLatest(POST_LOGOUT_REQUEST, postLogout);
// }


// 1
export default function* loginSaga() {
  yield all([
    fork(watchPostLogin),
    // fork(watchLogout),
    
    // fork(watchLoadReview),
    // fork(watchAddQnA),
    // fork(watchDeleteQnA),
    // fork(watchPatchQnA),
  ]);
}
