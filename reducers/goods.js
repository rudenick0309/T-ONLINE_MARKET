// import {createStore} from "redux";

// initialState part
export const initialState = {
  qna: [],

  loadQnALoading: false,    // QnA Plus
  loadQnADone: false,
  loadQnAError: null,

  addQnALoading: false,    // QnA Plus
  addQnADone: false,
  addQnAError: null,

  deleteQnALoading: false,    // QnA Plus
  deleteQnADone: false,
  deleteQnAError: null,

  patchQnALoading: false,    // QnA Plus
  patchQnADone: false,
  patchQnAError: null,
  //TODO: needs other state

  // the states saved and accmulated

};
console.log("In goods of REDUCERS, initialState : ", initialState);

// the part of action definition
export const LOAD_QUESTION_REQUEST = "LOAD_QUESTION_REQUEST";
export const LOAD_QUESTION_SUCCESS = "LOAD_QUESTION_SUCCESS";
export const LOAD_QUESTION_FAILURE = "LOAD_QUESTION_FAILURE";

export const ADD_QUESTION_REQUEST = "ADD_QUESTION_REQUEST";
export const ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS";
export const ADD_QUESTION_FAILURE = "ADD_QUESTION_FAILURE";

export const DELETE_QUESTION_REQUEST = "DELETE_QUESTION_REQUEST";
export const DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS";
export const DELETE_QUESTION_FAILURE = "DELETE_QUESTION_FAILURE";

export const PATCH_QUESTION_REQUEST = "PATCH_QUESTION_REQUEST";
export const PATCH_QUESTION_SUCCESS = "PATCH_QUESTION_SUCCESS";
export const PATCH_QUESTION_FAILURE = "PATCH_QUESTION_FAILURE";


// the part of action creator definition
export const loadToQuestion = () => {
  return {
    type: LOAD_QUESTION_REQUEST,
  };
};

export const addToQuestion = (text) => { // TODO: Has a parameter one? Anyway, shall I give them(name, content) in QnAPlus components?
  console.log("In reducers, at TEXT : ", text);
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

    // load question
    case LOAD_QUESTION_REQUEST:
      return {
        ...state,
        loadQnALoading: true,
        loadQnADone: false,
        loadQnAError: null,
        // qna: state.qna,
      };
    case LOAD_QUESTION_SUCCESS:
      return {
        ...state,
        loadQnALoading: false,
        loadQnADone: true,
        // qna : [action.data],  // TODO : Why this qna is 'loading, done, error'?
      };
    case LOAD_QUESTION_FAILURE:
      return {
        ...state,
        loadQnALoading: true,
        loadQnADone: false,
        loadQnAError: action.error,
      };

    // add question
    case ADD_QUESTION_REQUEST:
      return {
        ...state,
        addQnALoading: true,
        addQnADone: false,
        addQnAError: null,
      };
    case ADD_QUESTION_SUCCESS:
      console.log("In reducers, action.data : ", action.data);  //TODO: check 'action', 'action.data', 'data'
      return {
        ...state,
        addQnALoading: false,
        addQnADone: true,
        qna: [action.data, ...state.qna], //TODO: ...state.qna
        // TODO: in immer ->  qna: state.qna.push(action.data),
      };
    case ADD_QUESTION_FAILURE:
      console.log("action.data : ", action.data);
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
      console.log("In reducers, DELETE FAILURE");
      return {
        ...state,
        addQnALoading: true,
        addQnADone: false,
        addQnAError: action.error,
      };

    // TODO: patch question  -> advanced?
    case PATCH_QUESTION_REQUEST:
      console.log("In reducers, PATCH REQUEST");
      return {
        ...state,
        patchQnALoading: true,
        patchQnADone: false,
        patchQnAError: null,
      };
    case PATCH_QUESTION_SUCCESS:
      console.log("In reducers, PATCH SUCCESS", action);
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
      console.log("In reducers, PATCH FAILURE");
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

// const store = createStore(reducer);

// the collection part of reducers
export const actionCreators = {
  addToQuestion,
  // TODO : puts other reducer here,
};

export default reducer;
