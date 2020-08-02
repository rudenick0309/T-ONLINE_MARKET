// import {createStore} from "redux";

// initialState part
export const initialState = {
  home: [],  // change
  goodsInfo: [], // change
  goodsList: [],
  qna: [],  // load -> add 까지

  homeLoading: false,     // home rendering
  homeQnADone: false,
  homeQnAError: null,

  loadGoodsListLoading: false,     // goods list
  loadGoodsListDone: false,
  loadGoodsListError: null,

  loadGoodsInfoLoading: true,     // goods info
  loadGoodsInfoDone: false,
  loadGoodsInfoError: null,

  loadQnALoading: false,    // QnA load
  loadQnADone: false,
  loadQnAError: null,

  addQnALoading: false,    // QnA create
  addQnADone: false,
  addQnAError: null,

  deleteQnALoading: false,    // QnA delete
  deleteQnADone: false,
  deleteQnAError: null,

  patchQnALoading: false,    // QnA update
  patchQnADone: false,
  patchQnAError: null,
  //TODO: needs other state

  // the states saved and accmulated

};
// console.log("In REDUCERS, initialState : ", initialState);

// the part of action definition

export const HOME_REQUEST = "HOME_REQUEST";                        // home
export const HOME_SUCCESS = "HOME_SUCCESS";
export const HOME_FAILURE = "HOME_FAILURE";

export const LOAD_GOODSLIST_REQUEST = "LOAD_GOODSLIST_REQUEST";    // goods Info
export const LOAD_GOODSLIST_SUCCESS = "LOAD_GOODSLIST_SUCCESS";
export const LOAD_GOODSLIST_FAILURE = "LOAD_GOODSLIST_REQUEST";

export const LOAD_GOODSINFO_REQUEST = "LOAD_GOODSINFO_REQUEST";    // goods Info
export const LOAD_GOODSINFO_SUCCESS = "LOAD_GOODSINFO_SUCCESS";
export const LOAD_GOODSINFO_FAILURE = "LOAD_GOODSINFO_FAILURE";

export const LOAD_QUESTION_REQUEST = "LOAD_QUESTION_REQUEST";     // qna  load
export const LOAD_QUESTION_SUCCESS = "LOAD_QUESTION_SUCCESS";
export const LOAD_QUESTION_FAILURE = "LOAD_QUESTION_FAILURE";

export const ADD_QUESTION_REQUEST = "ADD_QUESTION_REQUEST";     // qna add
export const ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS";
export const ADD_QUESTION_FAILURE = "ADD_QUESTION_FAILURE";

export const DELETE_QUESTION_REQUEST = "DELETE_QUESTION_REQUEST";   //qna  delete
export const DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS";
export const DELETE_QUESTION_FAILURE = "DELETE_QUESTION_FAILURE";

export const PATCH_QUESTION_REQUEST = "PATCH_QUESTION_REQUEST";       // qna patch
export const PATCH_QUESTION_SUCCESS = "PATCH_QUESTION_SUCCESS";
export const PATCH_QUESTION_FAILURE = "PATCH_QUESTION_FAILURE";


// the part of action creator definition

export const homeToLoad = () => {
  return {
    type: HOME_REQUEST,
  };
};

export const loadGoodsList = (data) => {
  return {
    type: LOAD_GOODSLIST_REQUEST,
    data,
    // TODO : whether add max param or just send TYPE;
  };
};

export const loadGoodsInfo = (id) => {
  // console.log('In REDUCER,  loadGoodsInfo, id : ', id);
  // const ids = id.id;
  return {
    type: LOAD_GOODSINFO_REQUEST,
    id,
    // data:id,
  };
};

export const loadToQuestion = (id) => {
  // console.log("In GOODS OF REDUCER, id : ", id);
  return {
    type: LOAD_QUESTION_REQUEST,
    id,
  };
};

export const addToQuestion = (text) => { // TODO: Has a parameter one? Anyway, shall I give them(name, content) in QnAPlus components?
  console.log("In REDUCER, GOODS , text : ", text);
  return {
    type: ADD_QUESTION_REQUEST,
    text,
  };
};

export const deleteToQuestion = (id) => {
  return {
    type: DELETE_QUESTION_REQUEST,
    // TODO : id : parseInt(id),
    id,
  };
};

export const patchToQuestion = (text) => { // TODO: advanced
  return {
    type: PATCH_QUESTION_REQUEST,
    // id,   //TODO : Note , action creators takes a one parameter!
    text,
  };
};

// the part of reducer
// TODO : First, test code in the situation what there are no 'immer code', Second, apply immer
const reducer = (state = initialState, action) => {
  switch (action.type) {

    // home rendering
    case HOME_REQUEST:
      // console.log("In REDUX, HOME_REQUEST, executes")
      return {
        ...state,
        homeLoading: true,     // home rendering
        homeQnADone: false,
        homeQnAError: null,
      };
    case HOME_SUCCESS:
      // console.log("In REDUX, HOME_SUCCESS, action : ", action)
      return {
        ...state,
        homeLoading: false,     // home rendering
        homeQnADone: true,
        home: action.data,
      };
    case HOME_FAILURE:
      return {
        ...state,
        homeLoading: false,     // home rendering
        homeQnAError: action.error,
      };

    // load goods list
    case LOAD_GOODSLIST_REQUEST:
      // console.log("In REDUX, LOA_GOODSLIST_REQUEST, executes ")
      return {
        ...state,
        loadGoodsListLoading: true,     // goods list
        loadGoodsListDone: false,
        loadGoodsListError: null,
      };
    case LOAD_GOODSLIST_SUCCESS:
      // console.log("In REDUX, LOAD_GOODSLIST_SUCCESS, action : ", action)
      return {
        ...state,
        loadGoodsListLoading: false,     // goods list
        loadGoodsListDone: true,
       goodsList : action.data,
      };
    case LOAD_GOODSLIST_FAILURE:
      // console.log("In REDUX, LOAD_GOODSLIST_FAILURE, action : ", action)
      return {
        ...state,
        loadGoodsListLoading:false,
        loadGoodsListError: action.error,     // home rendering
      };

    // load goodsInfo rendering
    case LOAD_GOODSINFO_REQUEST:
      // console.log("In REDUX, LOAD_GOODSINFO_REQUEST, executes, action : ", action)
      return {
        ...state,
        loadGoodsInfoLoading: true,     // goods info
        loadGoodsInfoDone: false,
        loadGoodsInfoError: null,
      };
    case LOAD_GOODSINFO_SUCCESS:
      // console.log("In REDUX, LOAD_GOODSINFO_SUCCESS, action : ", action)
      return {
        ...state,
        loadGoodsInfoLoading: false,     // goods info
        loadGoodsInfoDone: true,
        goodsInfo: action.data,
      };
    case LOAD_GOODSINFO_FAILURE:
      // console.log("In REDUX, LOAD_GOODSINFO_FAILURE, ")
      return {
        ...state,
        homeLoading: false,     // home rendering
        homeQnAError: action.error,
      };

    // load question
    case LOAD_QUESTION_REQUEST:
      console.log("In REDUX, LOAD_QUESTION_REQUEST, action : ")
      return {
        ...state,
        loadQnALoading: true,
        loadQnADone: false,
        loadQnAError: null,
      };
    case LOAD_QUESTION_SUCCESS:
      console.log("In REDUX, LOAD_question SUCCESS, action : ", action.data)
      return {
        ...state,
        loadQnALoading: false,
        loadQnADone: true,
        qna: [action.data],
      };
    case LOAD_QUESTION_FAILURE:
      console.log("In REDUX, LOAD_question FAILURE action : ", action)
      return {
        ...state,
        loadQnALoading: true,
        loadQnADone: false,
        loadQnAError: action.error,
        qna:state.qna.filter((el) => el.id !== 'delete')  //TODO: Or, if qna equals '[]' in component ?
      };

    // add question
    case ADD_QUESTION_REQUEST:
      console.log("In REDUCERS OF ADD_QUESTION_REQUEST, action : ", action);
      return {
        ...state,
        addQnALoading: true,
        addQnADone: false,
        addQnAError: null,
      };
    case ADD_QUESTION_SUCCESS:
      console.log("In REDUCERS OF ADD_QUESTION_SUCCESS, action : ", action);
      return {
        ...state,
        addQnALoading: false,
        addQnADone: true,
        qna: [action.data, ...state.qna], //TODO: ...state.qna
        // TODO: in immer ->  qna: state.qna.push(action.data),
      };
    case ADD_QUESTION_FAILURE:
      console.log("In REDUCERS OF ADD_QUESTION_FAILURE, action : ", action);
      return {
        ...state,
        addQnALoading: true,
        addQnADone: false,
        addQnAError: action.error,
      };

    // delete question
    case DELETE_QUESTION_REQUEST:
      // console.log('In reducers, DELETE REQUEST')
      return {
        ...state,
        deleteQnALoading: true,    // QnA Plus
        deleteQnADone: false,
        deleteQnAError: null,
      };
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        deleteQnALoading: false,
        deleteQnADone: true,
        qna: state.qna.filter((el) => el.id !== action.data),
      };
    case DELETE_QUESTION_FAILURE:
      // console.log("In reducers, DELETE FAILURE");
      return {
        ...state,
        addQnALoading: true,
        addQnADone: false,
        addQnAError: action.error,
      };

    // TODO: patch question  -> advanced?
    case PATCH_QUESTION_REQUEST:
      // console.log("In reducers, PATCH REQUEST");
      return {
        ...state,
        patchQnALoading: true,
        patchQnADone: false,
        patchQnAError: null,
      };
    case PATCH_QUESTION_SUCCESS:
      // console.log("In reducers, PATCH SUCCESS", action);
      let qnaIndex = 0;
      state.qna.forEach((el, index) => {
        if (action.data.id === el.id) {
          qnaIndex = index;
        }
      });

      let forehand = state.qna.slice(0, qnaIndex);
      let backhand = state.qna.slice(qnaIndex + 1);

      return {
        ...state,
        patchQnALoading: false,
        patchQnADone: true,
        qna: forehand.concat(action.data, backhand)
      };
    case PATCH_QUESTION_FAILURE:
      // console.log("In reducers, PATCH FAILURE");
      return {
        ...state,
        patchQnALoading: false,
        patchQnADone: false,
        patchQnAError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
