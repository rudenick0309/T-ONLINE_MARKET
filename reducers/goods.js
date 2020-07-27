import produce from 'immer';

// 백엔드로 가는 요청에 대한 state를 loading, Done, Error 3개씩 1세트로,
// Defaul State
const initialState = {
  qnaloading: false,
  qnaDone: false,   // 사가랑 백이 같이.
  qnaError: null,
};

// 액션 - 백엔드로 가는 요청에 대한 state를 loading, Done, Error 3개씩 1세트로,
// Actions
export const QNA_POST_REQUEST = 'QNA_POST_REQUEST';
export const QNA_POST_SUCCESS = 'QNA_POST_SUCCESS';
export const QNA_POST_FAILURE = 'QNA_POST_FAILURE';

// Action Functions
// TODO: Think! What the qna states need a function?

// 액션 + 스테이트 - > 다음 스테이트
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    // TODO : not install 'immer', because the error occured.
    switch (action.type) {
      case QNA_POST_REQUEST:
        draft.qnaloading = true;
        draft.qnaDone = false;
        draft.qnaError = null;
          break;
      case QNA_POST_SUCCESS:
        draft.qnaloading = false;
        draft.qnaDone = true;
        break;

      case QNA_POST_FAILURE:
        draft.qnaloading = false;
        draft.qnaError = action.error;
        break;
        //

      default:
          break;
    }
  });
};
export default reducer;
