import React, {useCallback, useState} from "react";
import {View, Text, TouchableOpacity, Button, Pressable} from "react-native";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {deleteToQuestion, deleteToReview, timesToDelete} from "../reducers/goods";
import ReviewPlusEdit from "../pages/ReviewPlusEdit";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

// import navi

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  margin-top:10px;
  border-color : grey;
  border-bottom-width: 1.5px;
  border-style : solid;
  border-radius : 20px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const ViewStyled = styled.View`
  flex: 1;
  margin: 20px 0px;
  padding: 10px;
  height: 150px;
  flex-direction:row;
`;

const ViewPaddingStyled = styled.View`
  padding-left : 10px;
`;

const TextStyled = styled.Text`
  flex: 1;
`;

const ButtonRowStyled = styled.View`
  flex-direction:row;
`;

const ButtonStyled = styled.TouchableOpacity`
  height : 40px;
  background-color: #62760c; 
  margin-bottom:10px;
  border-radius: 5px;
  justify-content:center;
  align-items:center;
  width: 50px;
  margin-right:10px;
`;

  // padding-right : 20px;
  // margin-right:20px;
const ViewImageStyled = styled.View`
  
`

const ImageStyled = styled.Image`
  flex: 3;
  width:300px;
  height: 300px;
  resize-mode: contain;
  border-radius: 10px;
`;

const StarView = styled.View`
  flex-direction :row;
`

const ButtonText = styled.Text`
  color:white;
`;

//
const ReviewList = (props) => {
  // console.log("In ReviewList, props : ", props);

  const dispatch = useDispatch();
  const {username} = props.list;
  const {title} = props.list;
  const {contents} = props.list;
  const {review_img} = props.list;
  const {star} = props.list;
  const {id} = props.list;
  // const {reply} = props.list;
  const review = useSelector(state => state.goods?.review);
  const starStr = "*".repeat(star);
  const startArray = [<FontAwesomeIcon icon={faStar} size={15}/>];

  const {prop} = props.prop;  // for Route

  const deleteReview = useCallback(() => {
    dispatch(timesToDelete())
    // console.log("In deleteQnA", id);
    let data = {
      review_id: id
    }
    dispatch(deleteToReview(data));
  }, []);



  return (
    <Container>
      <Contents>
        <ViewStyled>

          <ViewPaddingStyled>

            <TextStyled>

              <StarView>
                <FontAwesomeIcon icon={faStar} size={15}/>
                <FontAwesomeIcon icon={faStar} size={15}/>
                <FontAwesomeIcon icon={faStar} size={15}/>
                <FontAwesomeIcon icon={faStar} size={15}/>
                <FontAwesomeIcon icon={faStar} size={15}/>
              </StarView>

            </TextStyled>

            <TextStyled>
              {contents}
            </TextStyled>

            <TextStyled>
              {username}
            </TextStyled>

            <ButtonRowStyled>

              <ButtonStyled
                color={"#62760c"}
                onPress={() => {
                  prop.navigation.navigate("ReviewPlusEdit", {id, title, contents, username});
                }}
              >
                <ButtonText>수정</ButtonText>
              </ButtonStyled>

              <ButtonStyled
                color={"#62760c"}
                onPress={deleteReview}
              >
                <ButtonText>삭제</ButtonText>
              </ButtonStyled>

            </ButtonRowStyled>

          </ViewPaddingStyled>

          <ViewImageStyled>
            <ImageStyled source={{uri: review_img}}/>
          </ViewImageStyled>

        </ViewStyled>
      </Contents>

    </Container>
  );
};

export default ReviewList;

