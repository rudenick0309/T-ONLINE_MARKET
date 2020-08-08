export const initialState = {
  orderList: [],
  sale: [],
  onsale: [],
  trackingInfo: [],
  orderData: [],

  loadorderLoding: false,
  loadorderError: null,
  loadorderDone: false,

  loadsaleLoding: false,
  loadsaleError: null,
  loadsaleDone: false,

  loadonsaleLoding: false,
  loadonsaleError: null,
  loadonsaleDone: false,

  loadtrackingLoding: false,
  loadtrackingError: null,
  loadtrackingDone: false,

  loadordercheckLoding: false,
  loadordercheckError: null,
  loadordercheckDone: false,
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

export const LOAD_TRACKING_REQUEST = 'LOAD_TRACKING_REQUEST';
export const LOAD_TRACKING_SUCCESS = 'LOAD_TRACKING_SUCCESS';
export const LOAD_TRACKING_FAILURE = 'LOAD_TRACKING_FAILURE';

export const LOAD_ORDERCHECK_REQUEST = 'LOAD_ORDERCHECK_REQUEST';
export const LOAD_ORDERCHECK_SUCCESS = 'LOAD_ORDERCHECK_SUCCESS';
export const LOAD_ORDERCHECK_FAILURE = 'LOAD_ORDERCHECK_FAILURE';

export const loadOrder = (id) => {
  console.log('order load :', id);
  return {
    type: LOAD_ORDER_REQUEST,
    id,
  };
};

export const loadSale = (id) => {
  console.log('sale load :', id);
  return {
    type: LOAD_SALE_REQUEST,
    id,
  };
};

export const loadOnsale = (id) => {
  console.log('onSale load :', id);
  return {
    type: LOAD_ONSALE_REQUEST,
    id,
  };
};

export const loadTracking = (data) => {
  console.log('Tracking load :', data);
  return {
    type: LOAD_TRACKING_REQUEST,
    data,
  };
};

export const loadOrderCheck = (id) => {
  console.log('orderCheck load :', id);
  return {
    type: LOAD_ORDERCHECK_REQUEST,
    id,
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

    case LOAD_TRACKING_REQUEST:
      console.log('reducer tracking request', action);
      return {
        ...state,
        loadtrackingLoding: true,
        loadtrackingError: null,
        loadtrackingDone: false,
      };
    case LOAD_TRACKING_SUCCESS:
      console.log('reducer tracking success', action);
      return {
        ...state,
        loadtrackingLoding: false,
        trackingInfo: action.data,
        loadtrackingDone: true,
      };

    case LOAD_TRACKING_FAILURE:
      console.log('reducer tracking failed', action);
      return {
        ...state,
        loadtrackingLoding: false,
        loadtrackingError: action.error.message,
        loadtrackingDone: false,
      };

    case LOAD_ORDERCHECK_REQUEST:
      console.log('reducer ordercheck request', action);
      return {
        ...state,
        loadordercheckLoding: true,
        loadordercheckError: null,
        loadordercheckDone: false,
      };
    case LOAD_ORDERCHECK_SUCCESS:
      console.log('reducer ordercheck success', action);
      return {
        ...state,
        loadordercheckLoding: false,
        orderList: action.data,
        loadordercheckDone: true,
      };

    case LOAD_ORDERCHECK_FAILURE:
      console.log('reducer ordercheck failed', action);
      return {
        ...state,
        loadordercheckLoding: false,
        loadordercheckError: action.error.message,
        loadordercheckDone: false,
      };

    default:
      return state;
  }
};

export default reducer;
