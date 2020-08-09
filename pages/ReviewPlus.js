import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import {connect, useDispatch, useSelector} from "react-redux";
// import {actionCreators} from "../reducers/goods";
import shortid from "shortid";
import {addToReview, timesToDelete} from "../reducers/goods";
// import {initialState} from '../reducers/goods'

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid blue;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid blue;
`;

// flex-direction:row;
const ReviewView = styled.View`
  border: 3px solid red;
  flex-direction: row;
  justify-content: space-around;
`;

const ReviewNameText = styled.TextInput`
  width: 100px;
  border: 2px solid yellow;
`;

const ReviewTitleText = styled.TextInput`
  width: 100px;
  border: 2px solid green;
`;

const ReviewButton = styled.Button`
  width: 100px;
  border: 2px solid yellow;
`;

const ReviewContentTextInput = styled.TextInput`
  flex: 1;
  border: 2px solid green;
  height: 200px;
`;


// function part
const ReviewPlus = (props) => {
  // console.log('In ReviewPlus, props : ', props.route.params);
  const [userName, onChangeUserName] = useState("");
  const [title, onChangeTitle] = useState("");
  const [content, onChangeContent] = useState("");
  const dispatch = useDispatch();
  const id = props.route.params;
  // const review = useSelector((state) => state.goods?.review);
  var text = null;

  // console.log('In ReviewPlus, id : ', id);

  useEffect(() => {
    text = {
      // title: title,
      contents: content,
      goods_id:id.id,
    };
    // console.log('In Review, text: ', text);
  }, [content]);


  const onPressReview = useCallback(() => {
    // console.log('In Review, text: ', text);

    dispatch(addToReview(text));  //TODO : 1. text  or  2. (name, content)

    setTimeout(() => {
      props.navigation.goBack();
    },2000);
    dispatch(timesToDelete())
  }, [content]);


  return (
    <Container>

      <Header props={props}/>

      <Contents>

        <Text>
          {
            `리뷰를 등록해 주세요. 사랑합니다 갱님`
          }
        </Text>

        <ReviewView>

          <ReviewButton title={"등록하기"} onPress={onPressReview}/>

        </ReviewView>

        <ReviewContentTextInput
          maxLength={200}
          multiline={true}
          onChangeText={(text) => onChangeContent(text)}
          value={content}
        />
      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default ReviewPlus;
