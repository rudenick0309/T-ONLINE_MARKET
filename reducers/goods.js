// import {createStore} from "redux";

// initialState part
export const initialState = {

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
  qna : [],

};

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
const loadToQuestion = () => {
  return {
    type: LOAD_QUESTION_REQUEST,
  };
};

export const addToQuestion = (text) => { // TODO: Has a parameter one? Anyway, shall I give them(name, content) in QnAPlus components?
  console.log('In reducers, at TEXT : ', text);
  return {
    type: ADD_QUESTION_REQUEST,
    text,
  };
};

const deleteToQuestion = (id) => {
  return {
    type: DELETE_QUESTION_REQUEST,
    id : parseInt(id),
  };
};

const patchToQuestion = (text, id) => { // TODO: advanced
  return {
    type: PATCH_QUESTION_REQUEST,
    id,
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
        loadQnALoading: true,
        loadQnADone: false,
        loadQnAError: null,
        qna: state.qna,
      }
    case LOAD_QUESTION_SUCCESS:
      return {
        loadQnALoading: false,
        loadQnADone: true,

        qna : [action.data],  // TODO : Why this qna is 'loading, done, error'?
      }
    case LOAD_QUESTION_FAILURE:
      return {
        loadQnALoading: true,
        loadQnADone: false,
        loadQnAError: null,
      }

    // add question
    case ADD_QUESTION_REQUEST:
      return {
        addQnALoading: true,
        addQnADone: false,
        addQnAError: null,
      }
    case ADD_QUESTION_SUCCESS:
      console.log("action.data : ", action.data);  //TODO: check 'action', 'action.data', 'data'
      return {
        addQnALoading: false,
        addQnADone: true,
        qna: [action.data, ...state], //TODO: ...state.qna
        // TODO: in immer ->  qna: state.qna.push(action.data),
      }
    case ADD_QUESTION_FAILURE:
      return {
        addQnALoading: true,
        addQnADone: false,
        addQnAError: null,
      }

    // delete question
    case DELETE_QUESTION_REQUEST:
      return {
        deleteQnALoading: false,    // QnA Plus
        deleteQnADone: false,
        deleteQnAError: null,
      }
    case DELETE_QUESTION_SUCCESS:
      return {
        deleteQnALoading: false,
        deleteQnADone: true,
        qna: state.qna.filter((el) => el.id !== action.id),
      }
    case DELETE_QUESTION_FAILURE:
      return {
        addQnALoading: true,
        addQnADone: false,
        addQnAError: null,
      }

    // TODO: patch question  -> advanced?
    case PATCH_QUESTION_REQUEST:
      return {
        addQnALoading: true,
        addQnADone: false,
        addQnAError: null,
      }
    case PATCH_QUESTION_SUCCESS:
      return {
        addQnALoading: false,
        addQnADone: true,
        qna: [action.data, ...state]
      }
    case PATCH_QUESTION_FAILURE:
      return {
        addQnALoading: true,
        addQnADone: false,
        addQnAError: null,
      }
  }
};

// const store = createStore(reducer);

// the collection part of reducers
export const actionCreators = {
  addToQuestion,
  // TODO : puts other reducer here,
};

export default reducer;
