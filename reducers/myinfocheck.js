export const initialState = {
  infoCheckLoding: false,
  infoCheckError: null,
  infoCheckDone: false,
  // log:[],
};

export const POST_INFOCHECK_REQUEST = 'POST_INFOCHECK_REQUEST';
export const POST_INFOCHECK_SUCCESS = 'POST_INFOCHECK_SUCCESS';
export const POST_INFOCHECK_FAILURE = 'POST_INFOCHECK_FAILURE';

export const infoCheckAction = (data) => {
  console.log('infoCheckAction :', data);
  return {
    type: POST_INFOCHECK_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_INFOCHECK_REQUEST:
      console.log('reducer infocheck request', action);
      return {
        ...state,
        infoCheckLoding: true,
        infoCheckError: null,
        infoCheckDone: false,
      };
    case POST_INFOCHECK_SUCCESS:
      console.log('reducer infocheck success', action);
      return {
        ...state,
        infoCheckLoding: false,
        data: action.payload,
        infoCheckDone: true,
      };

    case POST_INFOCHECK_FAILURE:
      console.log('reducer INFOCHECK failed', action);
      return {
        ...state,
        infoCheckLoding: false,
        infoCheckError: true,
        infoCheckDone: false,
      };

    default:
      return state;
  }
};

export default reducer;
