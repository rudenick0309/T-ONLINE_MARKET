export const initialState = {
  orderList: [],
  sale: [],
  onsale: [],

  loadorderLoding: false,
  loadorderError: null,
  loadorderDone: false,

  loadsaleLoding: false,
  loadsaleError: null,
  loadsaleDone: false,

  loadonsaleLoding: false,
  loadonsaleError: null,
  loadonsaleDone: false,
};

export const LOAD_ORDER_REQUEST = 'LOAD_ORDER_REQUEST';
export const LOAD_ORDER_SUCCESS = 'LOAD_ORDER_SUCCESS';
export const LOAD_ORDER_FAILURE = 'LOAD_ORDER_FAILURE';

export const LOAD_SALE_REQUEST = 'LOAD_SALE_REQUEST';
export const LOAD_SALE_SUCCESS = 'LOAD_SALE_SUCCESS';
export const LOAD_SALE_FAILURE = 'LOAD_SALE_FAILURE';

export const LOAD_ONSALE_REQUEST = 'LOAD_ONSALE_REQUEST';
export const LOAD_ONSALE_SUCCESS = 'LOAD_ONSALE_SUCCESS';
export const LOAD_ONSALE_FAILURE = 'LOAD_ONSALE_FAILURE';

export const loadOrder = (data) => {
  console.log('order load :', data);
  return {
    type: LOAD_ORDER_REQUEST,
    data,
  };
};

export const loadSale = (data) => {
  console.log('sale load :', data);
  return {
    type: LOAD_SALE_REQUEST,
    data,
  };
};

export const loadOnsale = (data) => {
  console.log('onSale load :', data);
  return {
    type: LOAD_ONSALE_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDER_REQUEST:
      console.log('reducer order request', action);
      return {
        ...state,
        loadorderLoding: true,
        loadorderError: null,
        loadorderDone: false,
      };
    case LOAD_ORDER_SUCCESS:
      console.log('reducer order success', action);
      return {
        ...state,
        loadorderLoding: false,
        orderList: action.data,
        loadorderDone: true,
      };

    case LOAD_ORDER_FAILURE:
      console.log('reducer order failed', action);
      return {
        ...state,
        loadorderLoding: false,
        loadorderError: action.error.message,
        loadorderDone: false,
      };

    case LOAD_SALE_REQUEST:
      console.log('reducer sale request', action);
      return {
        ...state,
        loasaleLoding: true,
        loadsaleError: null,
        loadsaleDone: false,
      };
    case LOAD_SALE_SUCCESS:
      console.log('reducer sale success', action);
      return {
        ...state,
        loadsaleLoding: false,
        sale: action.data,
        loadsaleDone: true,
      };

    case LOAD_SALE_FAILURE:
      console.log('reducer sale failed', action);
      return {
        ...state,
        loadsaleLoding: false,
        loadsaleError: action.error.message,
        loadsaleDone: false,
      };

    case LOAD_ONSALE_REQUEST:
      console.log('reducer onsale request', action);
      return {
        ...state,
        loadonsaleLoding: true,
        loadonsaleError: null,
        loadonsaleDone: false,
      };
    case LOAD_ONSALE_SUCCESS:
      console.log('reducer onsale success', action);
      return {
        ...state,
        loadonsaleLoding: false,
        onsale: action.data,
        loadonsaleDone: true,
      };

    case LOAD_ONSALE_FAILURE:
      console.log('reducer onsale failed', action);
      return {
        ...state,
        loadonsaleLoding: false,
        loadonsaleError: action.error.message,
        loadonsaleDone: false,
      };

    default:
      return state;
  }
};

export default reducer;
