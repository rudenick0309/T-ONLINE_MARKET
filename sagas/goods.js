// import 나중에 할 것




function qnaPostsAPI(data) {

  // TODO: return axios.post("/post/", data);
  // TODO : url should check
}

function* qnaPost(action) {
  try {
    // const result = yield call(qnaPostsAPI, action.data);
    yield put ({
      type: QNA_POST_SUCCESS,
      data: result.data,
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
export default function* postSaga() {
  yield all([
    fork(watchQnAPost),
  ]);
}
