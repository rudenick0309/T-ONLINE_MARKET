import {combineReducers} from 'redux';
import goods from './goods';
import login from './login';
import signup from './signup';
import myinfochange from './myinfochange';
import myinfocheck from './myinfocheck';
import resign from './resign';
import orders from './orders';
// TODO : here is the other reducer import

const rootReducer = combineReducers({
  goods,
  login,
  signup,
  myinfochange,
  myinfocheck,
  resign,
  orders,
  // TODO : here is the other reducer
});

export default rootReducer;
