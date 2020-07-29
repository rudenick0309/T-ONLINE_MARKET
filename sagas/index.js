import {all, fork} from 'redux-saga/effects';
import axios from 'axios';

import goodsSaga from './goods';
// TODO :  import userSaga from './user'   -> later

axios.defaults.baseURL = 'http://ec2-15-164-219-204.ap-northeast-2.compute.amazonaws.com:4000';  //TODO: backend port check
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(goodsSaga),
    // TODO : fork(userSaga),    -> later
  ]);
}
