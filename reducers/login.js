export const initialState = {
  loginLoding: false,
  loginError: null,
  loginDone: false,

  userInfo: [],

  logOutLoding: false,
  logOutError: null,
  // logOutDone: false,
};

export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

// export const LOGOUT = 'LOGOUT';

export const POST_LOGOUT_REQUEST = 'POST_LOGOUT_REQUEST';
export const POST_LOGOUT_SUCCESS = 'POST_LOGOUT_SUCCESS';
export const POST_LOGOUT_FAILURE = 'POST_LOGOUT_FAILURE';

export const loginAction = (data) => {
  console.log('loginAction :', data);
  return {
    type: POST_LOGIN_REQUEST,
    data,
  };
};

// export const logoutAction = (data) => {
//   return {
//     type: LOGOUT,
//   };
// };

export const logoutAction = (data) => {
  console.log('logoutAction :', data);
  return {
    type: POST_LOGOUT_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_REQUEST:
      console.log('reducer request', action);
      return {
        ...state,
        loginLoding: true,
        loginError: null,
        loginDone: false,
      };
    case POST_LOGIN_SUCCESS:
      console.log('reducer success', action);
      return {
        ...state,
        loginLoding: false,
        data: action.data,
        loginDone: true,
      };

    case POST_LOGIN_FAILURE:
      console.log('reducer failed', action);
      return {
        ...state,
        loginLoding: false,
        loginError: action.error.message,
      };

    // case LOGOUT:
    //   return {
    //     ...state,
    //     loginDone: false,
    //   };

    case POST_LOGOUT_REQUEST:
      console.log('reducer logout request', action);
      return {
        ...state,
        logoutLoding: false,
        data: action.data,
        loginDone: true,
      };
    case POST_LOGOUT_SUCCESS:
      console.log('reducer logout success', action);
      return {
        ...state,
        loginLoding: false,
        loginError: null,
        loginDone: false,
      };

    case POST_LOGOUT_FAILURE:
      console.log('reducer failed', action);
      return {
        ...state,
        loginLoding: true,
        loginError: action.data,
        loginDone: false,
      };

    default:
      return state;
  }
};

export default reducer;
