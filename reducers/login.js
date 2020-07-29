import { handleActions } from 'redux-actions';


export const initialState = {
    loginLoding: false,
    loginError: false,
    loginDone: false
  };


const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILUER';

const LOGOUT = 'LOGOUT';


export const login = data  => {
  
  return {type: POST_LOGIN_SUCCESS,
    payload: result.data}
    
};

export const logout = data => {
  return {
       type: LOGOUT };
};


  

const reducer = (state = initialState, action) => {
    switch(action.type){
        case POST_LOGIN_REQUEST:
      return {
        ...state,
        loginLoding: true,
        loginError: false,
        loginDone: false
      }
      case POST_LOGIN_SUCCESS: 
      return {
        ...state,
        loginLoding: false,
        data: action.payload,
        loginDone: true
      };
    
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        loginLoding: false,
        loginError: true,
        loginDone: false
      };
    
     case LOGOUT: 
      return {
        ...state,
        loginDone: false
      };
    }
}
  const handleLogin = handleActions(reducer)

  export const actionHandle = {
    login, 
    logout
    // TODO : puts other reducer here,
  };

  export default handleLogin;