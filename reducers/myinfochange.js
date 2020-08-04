export const initialState = {
  editinfoLoding: false,
  editinfoError: null,
  editinfoDone: false,
  // log:[],
};

export const POST_EDITINFO_REQUEST = 'POST_EDITINFO_REQUEST';
export const POST_EDITINFO_SUCCESS = 'POST_EDITINFO_SUCCESS';
export const POST_EDITINFO_FAILURE = 'POST_EDITINFO_FAILURE';

export const editinfoAction = (data) => {
  console.log('editinfoAction :', data);
  return {
    type: POST_EDITINFO_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EDITINFO_REQUEST:
      console.log('reducer edit request', action);
      return {
        ...state,
        editinfoLoding: true,
        editinfoError: null,
        editinfoDone: false,
      };
    case POST_EDITINFO_SUCCESS:
      console.log('reducer edit success', action);
      return {
        ...state,
        editinfoLoding: false,
        data: action.payload,
        editinfoDone: true,
      };

    case POST_EDITINFO_FAILURE:
      console.log('reducer edit failed', action);
      return {
        ...state,
        editinfoLoding: false,
        editinfoError: true,
        editinfoDone: false,
      };

    default:
      return state;
  }
};

export default reducer;
