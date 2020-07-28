import {createStore} from "redux";

// initialState part
export const initialState = {

  qnaLoading: false,    // QnA Plus
  qnaDone: false,
  qnaError: null,

  //TODO: needs other state

  // the states saved and accmulated
  qna : [],

};

// the part of action definition
export const ADD_QUESTION_REQUEST = "ADD_QUESTION_REQUEST";
export const ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS";
export const ADD_QUESTION_FAILURE = "ADD_QUESTION_FAILURE";

// the part of action creator definition
const addQuestion = (text) => { // TODO: Has a parameter one? Anyway, shall I give them(name, content) in QnAPlus components?
  return {
    type: ADD_QUESTION_REQUEST,
    text,
  };
};

// the part of reducer
// TODO : First, test code in the situation what there are no 'immer code', Second, apply immer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION_REQUEST:
      return {
        qnaLoading: true,
        qnaDone: false,
        qnaError: null,
      }
    case ADD_QUESTION_SUCCESS:
      return {
        qnaLoading: false,
        qnaDone: true,
        qna: [action.data]
      }
    case ADD_QUESTION_FAILURE:
      return {
        qnaLoading: true,
        qnaDone: false,
        qnaError: null,
      }

  }
};

const store = createStore(reducer);

// the collection part of reducers
export const actionCreators = {
  addQuestion,
  // TODO : puts other reducer here,
};

export default store;
