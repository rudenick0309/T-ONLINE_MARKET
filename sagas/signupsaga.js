import axios from "axios";
import {POST_RESIGN_REQUEST,
    POST_RESIGN_SUCCESS,
    POST_RESIGN_FAILURE
} from "../reducers/resign";
import {all, fork, call, put, takeLatest, throttle} from "redux-saga/effects";

console.log('In saga, at 0 : ', 'saga executes');
// 4


function PostSignupAPI(data) {
  console.log('In goods of SAGA 4, : ', data);
  // return axios.post("/goods/info/qa_lists", data)
  return axios.post("http://ec2-15-164-219-204.ap-northeast-2.compute.amazonaws.com:4000/user/signup", data)
}



// 3
// function* loadQnA(action) {
//   try {
//     yield delay(1000);
//     // const result = yield call(loadQnAAPI, action.data);
//     yield put({
//       type: LOAD_QUESTION_SUCCESS,
//       // TODO : data: result.data,
//       id: action.data,
//     });
//   } catch (err) {
//     console.log(err);
//     yield put({
//       type: LOAD_QUESTION_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

function* PostSignup(action) {
  console.log('In goods of SAGA, at 3 : ', action);

  try {
    // TODO: const result = yield call(addQnAAPI, action.data);  no 'data', It's 'text'.
    yield put({
      type: POST_SIGNUP_SUCCESS,
      data: action.text,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: POST_SIGNUP_FAILURE,
      error: err.response.data,
    });
  }
}




// 2

function* watchPostSignup() {
  console.log(' In goods of SAGA 2, : ');
  yield takeLatest(POST_SIGNUP_REQUEST, PostSignup);
  console.log('In goods of SAGA 2 - 1, : ');
}


// 1
export default function* signupSaga() {
  yield all([
    fork(watchPostSignup),
    // fork(watchLogout),
   
  ]);
}