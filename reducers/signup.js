export const initialState = {
  sign: [],

  signupLoding: false,
  signupError: null,
  signupDone: false,
};

export const POST_SIGNUP_REQUEST = 'POST_SIGNUP_REQUEST';
export const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
export const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE';

export const signupAction = (data) => {
  console.log('signupAction :', data);
  return {type: POST_SIGNUP_REQUEST, data};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGNUP_REQUEST:
      return {
        ...state,
        signupLoding: true,
        signupError: null,
        signupDone: false,
      };
    case POST_SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoding: false,
        data: action.data,
        signupDone: true,
      };

    case POST_SIGNUP_FAILURE:
      return {
        ...state,
        signupLoding: false,
        signupError: action.data,
        signupDone: false,
      };
    default:
      return state;
  }
};

export default reducer;
