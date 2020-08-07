export const initialState = {
  resignLoding: false,
  resignError: null,
  resignDone: false,
};

export const POST_RESIGN_REQUEST = 'POST_RESIGN_REQUEST';
export const POST_RESIGN_SUCCESS = 'POST_RESIGN_SUCCESS';
export const POST_RESIGN_FAILURE = 'POST_RESIGN_FAILURE';

export const resignAction = (data) => {
  console.log('resignAction :', data);
  return {
    type: POST_RESIGN_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_RESIGN_REQUEST:
      console.log('reducer resign request', action);
      return {
        ...state,
        resignLoding: true,
        resignError: null,
        resignDone: false,
      };
    case POST_RESIGN_SUCCESS:
      console.log('reducer resign success', action);
      return {
        ...state,
        resignLoding: false,
        data: action.payload,
        resignDone: true,
      };

    case POST_RESIGN_FAILURE:
      console.log('reducer resign failed', action);
      return {
        ...state,
        resignLoding: false,
        resignError: true,
        resignDone: false,
      };

    default:
      return state;
  }
};

export default reducer;
