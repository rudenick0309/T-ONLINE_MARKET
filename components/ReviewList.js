import React, {useCallback, useState} from "react";
import {View, Text, TouchableOpacity, Button, Pressable} from "react-native";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {deleteToQuestion} from "../reducers/goods";
import ReviewPlusEdit from "../pages/QnAPlusEdit";

// import navi

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid black;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid pink;
`;

const TopViewStyled = styled.View`
  flex: 1;
  height: 100px;
  flex-direction : row;
  border: 2px solid pink;
`;

const ViewStyled = styled.View`
  flex: 1;
  height: 100px;
  border: 2px solid pink;
`;

const TextStyled = styled.Text`
  flex: 1;
  border: 2px solid pink;
`;

const TouchableTextStyled = styled.TouchableOpacity`
  flex: 1;
  border: 2px solid red;
`;

const RepliesViewStyled = styled.View`
  height: 100px;
`;

const ButtonStyled = styled.Button`
  height : 30px;
`;

const ImageStyled = styled.Image`
  flex: 1;
  width:400px;
  height: 400px;
  resize-mode: contain;
`;

//
const ReviewList = (props) => {
  console.log('In ReviewList, props : ', props);
  // const [replies, setReplies] = useState(false);
  const dispatch = useDispatch();
  const {username} = props.list;
  const {title} = props.list;
  const {contents} = props.list;
  const {review_img} = props.list;
  const {star} = props.list;
  const {id} = props.list;
  // const {reply} = props.list;
  const review = useSelector(state => state.goods?.review);
  console.log('In ReviewList, review : ', review)

  const {prop} = props.prop;  // for Route
  console.log('In ReviewList, prop : ', prop)

  // TODO : key props is undefined, Why?

  const onPressReview = useCallback(() => {
    // setReplies((prevState) => !prevState);
  }, []);

  const deleteReview = useCallback(() => {
    // console.log("In deleteQnA", id);
    // dispatch(deleteToQuestion(id));
  }, []);

  return (
    <Container>
      <Contents>
        <ViewStyled>

          <TouchableTextStyled key={id} onPress={onPressReview}>

            <TopViewStyled>
              <TextStyled>
                {
                  `제목: ${title} 이름: ${username}`
                }
              </TextStyled>
              <ButtonStyled title={"수정"} onPress={() => {
                prop.navigation.navigate("ReviewPlusEdit", {id, title, contents, username});
              }}/>
              <ButtonStyled title={"삭제"} onPress={deleteReview}/>
            </TopViewStyled>

            <TextStyled>
              {
                `내용 : ${contents}  별점 : ${star}`
              }
            </TextStyled>

            <ImageStyled source={{uri:review_img}}/>

          </TouchableTextStyled>


        </ViewStyled>
      </Contents>

    </Container>
  );
};

export default ReviewList;
