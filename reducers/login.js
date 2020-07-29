import { handleActions } from 'redux-actions';


export const initialState = {
    loginLoding: false,
    loginError: false,
    loginDone: localStorage.getItem('isLogin') === 'true'
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
        loding: true,
        error: false,
        isLogin: false
      }
      case POST_LOGIN_SUCCESS: 
      return {
        ...state,
        loding: false,
        data: action.payload,
        isLogin: true
      };
    
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
        isLogin: false
      };
    
     case LOGOUT: 
      return {
        ...state,
        isLogin: false
      };
    }
}
  const handleLogin = handleActions(reducer)

  export default handleLogin;