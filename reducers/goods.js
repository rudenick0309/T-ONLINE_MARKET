import login from './login'

console.log('이건 테스트, ', login)
// initialState part
export const initialState = {
  home: [], // change
  goodsInfo: [], // change


  goodsList: [],   // recommendation
  searchList : [], // search

  qna: [],  // load -> add 까지
  review: [],
  count: 1,
  bucket: [],


  homeLoading: false, // home rendering
  homeQnADone: false,
  homeQnAError: null,

  loadReviewLoading: false,   // review read
  loadReviewDone: false,
  loadReviewError: null,

  addReviewLoading: false,    // review create
  addReviewDone: false,
  addReviewError: null,

  deleteReviewLoading: false,    // review delete
  deleteReviewDone: false,
  deleteReviewError: null,

  patchReviewLoading: false,    // review update
  patchReviewDone: false,
  patchReviewError: null,

  loadGoodsListLoading: false,     // goods list
  loadGoodsListDone: false,
  loadGoodsListError: null,

  loadGoodsInfoLoading: true, // goods info
  loadGoodsInfoDone: false,
  loadGoodsInfoError: null,

  loadQnALoading: false,    // QnA read
  loadQnADone: false,
  loadQnAError: null,

  addQnALoading: false, // QnA create
  addQnADone: false,
  addQnAError: null,

  deleteQnALoading: false, // QnA delete
  deleteQnADone: false,
  deleteQnAError: null,

  patchQnALoading: false, // QnA update
  patchQnADone: false,
  patchQnAError: null,
  //TODO: needs other state

  // the states saved and accmulated
};
// console.log("In REDUCERS, initialState : ", initialState);

// the part of action definition


export const LOAD_BUCKET_REQUEST = "LOAD_BUCKET_REQUEST";           //  bucket, not yet patch in quantity
export const ADD_BUCKET_REQUEST = "ADD_BUCKET_REQUEST";
export const DELETE_BUCKET_REQUEST = "DELETE_BUCKET_REQUEST";


export const COUNT_DEFAULT_REQUEST = "COUNT_DEFAULT_REQUEST";             // count
export const COUNT_PLUS_REQUEST = "COUNT_PLUS_REQUEST";
export const COUNT_MINUS_REQUEST = "COUNT_MINUS_REQUEST";

export const HOME_REQUEST = "HOME_REQUEST";                        // home
export const HOME_SUCCESS = "HOME_SUCCESS";
export const HOME_FAILURE = "HOME_FAILURE";

export const LOAD_REVIEW_REQUEST = "LOAD_REVIEW_REQUEST";    // load review
export const LOAD_REVIEW_SUCCESS = "LOAD_REVIEW_SUCCESS";
export const LOAD_REVIEW_FAILURE = "LOAD_REVIEW_REQUEST";

export const ADD_REVIEW_REQUEST = "ADD_REVIEW_REQUEST";     // add review
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

export const DELETE_REVIEW_REQUEST = "DELETE_REVIEW_REQUEST";   //delete review
export const DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS";
export const DELETE_REVIEW_FAILURE = "DELETE_REVIEW_FAILURE";

export const PATCH_REVIEW_REQUEST = "PATCH_REVIEW_REQUEST";       // patch review
export const PATCH_REVIEW_SUCCESS = "PATCH_REVIEW_SUCCESS";
export const PATCH_REVIEW_FAILURE = "PATCH_REVIEW_FAILURE";

export const LOAD_GOODSLIST_REQUEST = "LOAD_GOODSLIST_REQUEST"; // goods list
export const LOAD_GOODSLIST_SUCCESS = "LOAD_GOODSLIST_SUCCESS";
export const LOAD_GOODSLIST_FAILURE = "LOAD_GOODSLIST_REQUEST";

export const LOAD_SEARCHLIST_REQUEST = "LOAD_SEARCHLIST_REQUEST"; // search list
export const LOAD_SEARCHLIST_SUCCESS = "LOAD_SEARCHLIST_SUCCESS";
export const LOAD_SEARCHLIST_FAILURE = "LOAD_SEARCHLIST_REQUEST";

export const LOAD_GOODSINFO_REQUEST = "LOAD_GOODSINFO_REQUEST"; // goods Info
export const LOAD_GOODSINFO_SUCCESS = "LOAD_GOODSINFO_SUCCESS";
export const LOAD_GOODSINFO_FAILURE = "LOAD_GOODSINFO_FAILURE";

export const LOAD_QUESTION_REQUEST = "LOAD_QUESTION_REQUEST"; // qna  load
export const LOAD_QUESTION_SUCCESS = "LOAD_QUESTION_SUCCESS";
export const LOAD_QUESTION_FAILURE = "LOAD_QUESTION_FAILURE";

export const ADD_QUESTION_REQUEST = "ADD_QUESTION_REQUEST"; // qna add
export const ADD_QUESTION_SUCCESS = "ADD_QUESTION_SUCCESS";
export const ADD_QUESTION_FAILURE = "ADD_QUESTION_FAILURE";

export const DELETE_QUESTION_REQUEST = "DELETE_QUESTION_REQUEST"; //qna  delete
export const DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS";
export const DELETE_QUESTION_FAILURE = "DELETE_QUESTION_FAILURE";

export const PATCH_QUESTION_REQUEST = "PATCH_QUESTION_REQUEST"; // qna patch
export const PATCH_QUESTION_SUCCESS = "PATCH_QUESTION_SUCCESS";
export const PATCH_QUESTION_FAILURE = "PATCH_QUESTION_FAILURE";

// the part of action creator definition

export const loadToBucket = () => {
  return {
    type: LOAD_BUCKET_REQUEST,
  };
};
export const addToBucket = (data) => {
  console.log("In REDUCER, addToBucket, data : ", data);
  return {
    type: ADD_BUCKET_REQUEST,
    data,
  };
};
export const deleteToBucket = () => {
  return {
    type: DELETE_BUCKET_REQUEST,
  };
};

// count
export const countDefault = () => {
  return {
    type: COUNT_DEFAULT_REQUEST,
  };
};

export const countPlus = () => {
  return {
    type: COUNT_PLUS_REQUEST,
  };
};

export const countMinus = () => {
  return {
    type: COUNT_MINUS_REQUEST,
  };
};

export const homeToLoad = () => {
  return {
    type: HOME_REQUEST,
  };
};

// recommendation -> goodsList
export const loadGoodsList = (data) => {
  console.log("In REDUCER, loadGoodsList, data : ", data);


  return {
    type: LOAD_GOODSLIST_REQUEST,
    data,
  };
};

// search -> searchList
export const loadSearchList = (data) => {
  console.log("In REDUCER, loadSearchList, data : ", data);
  return {
    type: LOAD_SEARCHLIST_REQUEST,
    data,
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

// review

export const loadToReview = (id) => {
  console.log("In REDUCER, loadToReview, id : ", id);
  return {
    type: LOAD_REVIEW_REQUEST,
    id,
  };
};

export const addToReview = (text) => {
  console.log("In REDUCER, addToReview, text : ", text);
  return {
    type: ADD_REVIEW_REQUEST,
    text,
  };
};

export const deleteToReview = (id) => {
  console.log("In REDUCER, deleteToReview, id : ", id);
  return {
    type: DELETE_REVIEW_REQUEST,
    // TODO : id : parseInt(id),
    id,
  };
};

export const patchToReview = (text) => {
  // console.log("In REDUCER, patchToReview, id : ", id);
  return {
    type: PATCH_REVIEW_REQUEST,
    // id,
    text,
  };
};

// question
export const loadToQuestion = (id) => {
  // console.log("In GOODS OF REDUCER, id : ", id);
  return {
    type: LOAD_QUESTION_REQUEST,
    id,
  };
};

export const addToQuestion = (text) => {
  // TODO: Has a parameter one? Anyway, shall I give them(name, content) in QnAPlus components?
  console.log("In REDUCER, GOODS , text : ", text);
  return {
    type: ADD_QUESTION_REQUEST,
    text,
  };
};

export const deleteToQuestion = (id) => {
  console.log("In REDUCER, deleteToQuestion , id : ", id);
  return {
    type: DELETE_QUESTION_REQUEST,
    // TODO : id : parseInt(id),
    id,
  };
};

export const patchToQuestion = (text) => {
  // TODO: advanced
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

    // bucket
    case LOAD_BUCKET_REQUEST :    // What is the LOAD BUCKET REQUEST? When i should this? think.
      return {
        ...state,
      };
    case ADD_BUCKET_REQUEST :
      console.log("In REDUCER, ADD_BUCKET_REQUEST, action : ", action);
      return {
        ...state,
        // bucket: []
      };
    case DELETE_BUCKET_REQUEST :
      console.log("In REDUCER, DELETE_BUCKET_REQUEST, action : ", action);
      return {
        ...state,
        // count: state.count - 1,
      };

    // count calculate
    case COUNT_DEFAULT_REQUEST :
      return {
        ...state,
        count: 1,
      };

    case COUNT_PLUS_REQUEST :
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_MINUS_REQUEST :
      if (state.count < 2) {
        alert("수량은 1개 이상이어야 합니다");
        state.count = 1;
      }
      return {
        ...state,
        count: state.count - 1,
      };


    // home rendering
    case HOME_REQUEST:
      // console.log("In REDUX, HOME_REQUEST, executes")
      return {
        ...state,
        homeLoading: true, // home rendering
        homeQnADone: false,
        homeQnAError: null,
      };
    case HOME_SUCCESS:
      // console.log("In REDUX, HOME_SUCCESS, action : ", action)
      return {
        ...state,
        homeLoading: false, // home rendering
        homeQnADone: true,
        home: action.data,
      };
    case HOME_FAILURE:
      return {
        ...state,
        homeLoading: false, // home rendering
        homeQnAError: action.error,
      };

    //

    // load goods list
    case LOAD_GOODSLIST_REQUEST:
      console.log("In REDUX, LOAD_GOODSLIST_REQUEST, action : ", action);
      return {
        ...state,
        loadGoodsListLoading: true, // goods list
        loadGoodsListDone: false,
        loadGoodsListError: null,
      };
    case LOAD_GOODSLIST_SUCCESS:
      console.log("In REDUX, LOAD_GOODSLIST_SUCCESS, action : ", action);
      return {
        ...state,
        loadGoodsListLoading: false, // goods list
        loadGoodsListDone: true,
        goodsList: [action.data, ...state.goodsList],
      };
    case LOAD_GOODSLIST_FAILURE:
      console.log("In REDUX, LOAD_GOODSLIST_FAILURE, action : ", action);
      return {
        ...state,
        loadGoodsListLoading: false,
        loadGoodsListError: action.error,     // home rendering
      };

    // search list
    case LOAD_SEARCHLIST_REQUEST:
      console.log("In REDUX, LOAD_SEARCHLIST_REQUEST, action : ", action);
      return {
        ...state,
        loadSearchListLoading: true, // search list
        loadSearchListDone: false,
        loadSearchListError: null,
      };
    case LOAD_SEARCHLIST_SUCCESS:
      console.log("In REDUX, LOAD_SEARCHLIST_SUCCESS, action : ", action);
      return {
        ...state,
        loadSearchListLoading: false, // goods list
        loadSearchListDone: true,
        searchList: [action.data, ...state.searchList],
      };
    case LOAD_SEARCHLIST_FAILURE:
      console.log("In REDUX, LOAD_SEARCHLIST_FAILURE, action : ", action);
      return {
        ...state,
        loadSearchListLoading: false,
        loadSearchListError: action.error,
      };

    // load goodsInfo rendering
    case LOAD_GOODSINFO_REQUEST:
      // console.log("In REDUX, LOAD_GOODSINFO_REQUEST, executes, action : ", action)
      return {
        ...state,
        loadGoodsInfoLoading: true, // goods info
        loadGoodsInfoDone: false,
        loadGoodsInfoError: null,
      };
    case LOAD_GOODSINFO_SUCCESS:
      console.log("In REDUX, LOAD_GOODSINFO_SUCCESS, action : ", action)
      return {
        ...state,
        loadGoodsInfoLoading: false, // goods info
        loadGoodsInfoDone: true,
        goodsInfo: action.data,
      };
    case LOAD_GOODSINFO_FAILURE:
      // console.log("In REDUX, LOAD_GOODSINFO_FAILURE, ")
      return {
        ...state,
        homeLoading: false, // home rendering
        homeQnAError: action.error,
      };

    //
    // load review
    case LOAD_REVIEW_REQUEST:
      console.log("In REDUCER, LOAD_REVIEW_REQUEST, action : ", action);
      return {
        ...state,
        loadReviewLoading: true,   // review read
        loadReviewDone: false,
        loadReviewError: null,
      };
    case LOAD_REVIEW_SUCCESS:
      console.log("In REDUCER, LOAD_REVIEW_SUCCESS, action : ", action.data);
      return {
        ...state,
        loadReviewLoading: false,   // review read
        loadReviewDone: true,
        loadReviewError: null,
        // review: [action.data, ...state.review],
        review: [action.data],   // When i clicked 'review button', action.data has been added in qna states
      };
    case LOAD_REVIEW_FAILURE:
      console.log("In REDUCER, LOAD_REVIEW_FAILURE action : ", action);
      return {
        ...state,
        loadReviewLoading: false,
        loadReviewError: action.error,
        review: state.qna.filter((el) => el.id !== "everyDBdelete")  //TODO: Or, if qna equals '[]' in component ?
      };

    // add review
    case ADD_REVIEW_REQUEST:
      console.log("In REDUCERS OF ADD_REVIEW_REQUEST, action : ", action);
      return {
        ...state,
        addReviewLoading: true,
        addReviewDone: false,
        addReviewError: null,
      };
    case ADD_REVIEW_SUCCESS:
      console.log("In REDUCERS OF ADD_REVIEW_SUCCESS, action : ", action.data.data);
      return {
        ...state,
        addReviewLoading: false,
        addReviewDone: true,
        review: [action.data.data, ...state.review],

      };
    case ADD_REVIEW_FAILURE:
      console.log("In REDUCERS OF ADD_REVIEW_FAILURE, action : ", action);
      return {
        ...state,
        addReviewLoading: true,
        addReviewDone: false,
        addReviewError: action.error,
      };

    // delete review
    case DELETE_REVIEW_REQUEST:
      console.log("In REDUCERS OF DELETE_REVIEW_REQUEST, action : ", action);
      return {
        ...state,
        deleteReviewLoading: true,
        deleteReviewDone: false,
        deleteReviewError: null,
      };
    case DELETE_REVIEW_SUCCESS:
      console.log("In REDUCERS OF DELETE_REVIEW_SUCCESS, action : ", action);
      return {
        ...state,
        deleteReviewLoading: false,
        deleteReviewDone: true,
        review: state.review.filter((el) => el.id !== action.data),
      };
    case DELETE_REVIEW_FAILURE:
      console.log("In REDUCERS OF DELETE_REVIEW_FAILURE, action : ", action);
      return {
        ...state,
        deleteReviewLoading: true,
        deleteReviewDone: false,
        deleteReviewError: action.error,
      };

    // patch review
    case PATCH_REVIEW_REQUEST:
      console.log("In REDUCERS OF PATCH_REVIEW_REQUEST, action : ", action);
      return {
        ...state,
        patchReviewLoading: true,
        patchReviewDone: false,
        patchReviewError: null,
      };
    case PATCH_REVIEW_SUCCESS:
      console.log("In REDUCERS OF PATCH_REVIEW_SUCCESS, action : ", action);
      let reviewIndex = 0;
      state.review.forEach((el, index) => {
        if (action.data.id === el.id) {
          reviewIndex = index;
        }
      });

      let reviewForehand = state.review.slice(0, reviewIndex);
      let reviewBackhand = state.review.slice(reviewIndex + 1);

      return {
        ...state,
        patchReviewLoading: false,
        patchReviewDone: true,
        review: reviewForehand.concat(action.data, reviewBackhand)
      };
    case PATCH_REVIEW_FAILURE:
      console.log("In REDUCERS OF PATCH_REVIEW_FAILURE, action : ", action);
      return {
        ...state,
        patchReviewLoading: false,
        patchReviewDone: false,
        patchReviewError: action.error,
      };

    // load question
    case LOAD_QUESTION_REQUEST:
      console.log("In REDUX, LOAD_QUESTION_REQUEST, action : ");
      return {
        ...state,
        loadQnALoading: true,
        loadQnADone: false,
        loadQnAError: null,
      };
    case LOAD_QUESTION_SUCCESS:
      console.log("In REDUX, LOAD_QUESTION_SUCCESS, action : ", action);
      return {
        ...state,
        loadQnALoading: false,
        loadQnADone: true,
        // qna: [action.data],    // 단순 db를 불러오기 위해서
        // qna: action.data.concat(...state.qna), // When i clicked 'review button', action.data has been added in qna states
        qna:[action.data,...state.qna]
      };
    case LOAD_QUESTION_FAILURE:
      console.log("In REDUX, LOAD_QUESTION_FAILURE, action : ", action);
      return {
        ...state,
        loadQnALoading: true,
        loadQnADone: false,
        loadQnAError: action.error,
        qna: state.qna.filter((el) => el.id !== "delete")  //TODO: Or, if qna equals '[]' in component ?
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
      // const data = JSON.parse(action.data.config.data)
      console.log("In REDUCERS OF ADD_QUESTION_SUCCESS, JSON action : ", action.data);

      return {
        ...state,
        addQnALoading: false,
        addQnADone: true,
        // qna: action.data.concat(...state.qna), //TODO: ...state.qna
        // qna:[action.data, ...state.qna],
        // TODO: in immer ->  qna: state.qna.push(action.data),
      };
    case ADD_QUESTION_FAILURE:
      console.log("In REDUCERS OF ADD_QUESTION_FAILURE, action : ", action.error.message);
      return {
        ...state,
        addQnALoading: true,
        addQnADone: false,
        addQnAError: action.error.message,
      };

    // delete question
    case DELETE_QUESTION_REQUEST:
      console.log('In REDUCER, DELETE_QUESTION_REQUEST, action : ', action)
      return {
        ...state,
        deleteQnALoading: true, // QnA Plus
        deleteQnADone: false,
        deleteQnAError: null,
      };
    case DELETE_QUESTION_SUCCESS:
      console.log('In REDUCER, DELETE_QUESTION_SUCCESS, action : ', action)
      return {
        ...state,
        deleteQnALoading: false,
        deleteQnADone: true,
        qna: state.qna.filter((el) => el.id !== action.data),
      };
    case DELETE_QUESTION_FAILURE:
      console.log('In REDUCER, DELETE_QUESTION_FAILURE, action : ', action)
      return {
        ...state,
        deleteQnALoading: false,
        deleteQnAError: action.error,
      };

    // TODO: patch question  -> advanced?
    case PATCH_QUESTION_REQUEST:
      console.log('In REDUCER, PATCH_QUESTION_REQUEST, action : ', action)
      return {
        ...state,
        patchQnALoading: true,
        patchQnADone: false,
        patchQnAError: null,
      };
    case PATCH_QUESTION_SUCCESS:
      console.log('In REDUCER, PATCH_QUESTION_SUCCESS, action : ', action)
      let qnaIndex = 0;
      state.qna.forEach((el, index) => {
        if (action.data.id === el.id) {
          patchQnALoading: true,
            qnaIndex = index;
        }
      });

      let forehand = state.qna.slice(0, qnaIndex);
      let backhand = state.qna.slice(qnaIndex + 1);

      return {
        ...state,
        patchQnALoading: false,
        patchQnADone: true,
        qna: forehand.concat(action.data, backhand),
      };
    case PATCH_QUESTION_FAILURE:
      console.log('In REDUCER, PATCH_QUESTION_FAILURE, action : ', action)
      return {
        ...state,
        patchQnALoading: false,
        patchQnAError: action.error,
      };
    default:
      return state;
  }
};
//
export default reducer;
