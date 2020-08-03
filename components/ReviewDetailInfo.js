import React, {useEffect} from "react";
import {Text, View} from "react-native";
import QnAList from "./QnAList";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_QUESTION_REQUEST, loadToQuestion, loadToReview} from "../reducers/goods";
import ReviewPlus from "../pages/ReviewPlus";
import ReviewList from "./ReviewList";

// review detail part
const ReviewDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
`;

const ReviewButtonDetailInfoOfBottom = styled.Button`
  height: 50px;
`;

const ReviewHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content:space-around;
`;

// function part
const ReviewDetailInfo = (props) => {
  console.log('In ReviewDetailInfo, props : ', props);
  const id = props.prop?.route.params.id
  const dispatch = useDispatch();
  var review = useSelector((state) => state.goods?.review);
  // const loadQnAError = useSelector((state) => state.goods?.loadQnAError);
  console.log('In ReviewDetailInfo, review : ', review);
  const loadReviewError = useSelector((state) => state.goods?.loadReviewError)
  // var qna = useSelector(state => state.goods?.qna);

  if (loadReviewError) {
    console.log('In ReviewDetailInfo At IF, id : ', id)  //id : 9,
    review = [];
  }

  useEffect(() => {
    dispatch(loadToReview(id))
  },[])

  return (
    <ReviewDetailInfoOfBottom>
      <ReviewHeader>
        <Text>호갱님의 소중한 리뷰는 상업용으로 쓰일거에요.</Text>
        <ReviewButtonDetailInfoOfBottom
          title={"글쓰기"}
          onPress={() => {
            props.prop.navigation.navigate("ReviewPlus", {id:id});
          }}
        />
      </ReviewHeader>
      { review.length === 0
        ? <Text>등록된 Review가 없습니다</Text>
        : (review.map(el => {
          return <ReviewList key={el.id} list={el} prop={props}/>;
        }))
      }
    </ReviewDetailInfoOfBottom>
  )
}

export default ReviewDetailInfo;
