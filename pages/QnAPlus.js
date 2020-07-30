import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import {connect, useDispatch, useSelector} from "react-redux";
// import {actionCreators} from "../reducers/goods";
import shortid from "shortid";
import {addToQuestion} from "../reducers/goods";
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
const QnAView = styled.View`
  border: 3px solid red;
  flex-direction: row;
  justify-content: space-around;
`;

const QnANameText = styled.TextInput`
  width: 100px;
  border: 2px solid yellow;
`;

const QnAButton = styled.Button`
  width: 100px;
  border: 2px solid yellow;
`;

const QnAContentTextInput = styled.TextInput`
  flex: 1;
  border: 2px solid green;
  height: 200px;
`;


// function part
const QnAPlus = (props) => {

  const [title, onChangeTitle] = useState("");
  const [content, onChangeContent] = useState("");
  const dispatch = useDispatch();
  const qna = useSelector((state) => state?.qna);

  console.log('In QnAPlus, qna : ', qna);

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  const text = {
    title,
    content,
    id: shortid.generate(),
  };

  const onPressQuestion = useCallback(() => {
    // console.log('useSelector test in oPQ 1 : ', test);
    dispatch(addToQuestion(text));  //TODO : 1. text  or  2. (name, content)
    // console.log('useSelector test in oPQ 2 : ', test);
    props.navigation.goBack();
  }, [title, content]);


  return (
    <Container>

      <Header props={props}/>

      <Contents>

        <Text>
          {
            `질문을 등록해 주세요. 질문은 200자로 제한됩니다`
          }
        </Text>

        <QnAView>
          <QnANameText maxLength={5} value={title} onChangeText={(title) => onChangeTitle(title)}/>
          <QnAButton title={"등록하기"} onPress={onPressQuestion}/>
        </QnAView>

        <QnAContentTextInput
          maxLength={200}
          multiline={true}
          onChangeText={(text) => onChangeContent(text)}
          value={content}
        />
        {/*{qna}*/}
      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default QnAPlus;
