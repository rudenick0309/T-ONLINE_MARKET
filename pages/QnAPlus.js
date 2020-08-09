import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, Text, View, TextInput} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import {connect, useDispatch, useSelector} from "react-redux";
// import {actionCreators} from "../reducers/goods";
import shortid from "shortid";
import {addToQuestion, loadToQuestion, timesToDelete} from "../reducers/goods";
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

const QnATitleText = styled.TextInput`
  width: 100px;
  border: 2px solid green;
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
  // console.log('In QnAPlus, props : ', props.route.params);
  const [title, onChangeTitle] = useState("");
  const [content, onChangeContent] = useState("");
  const dispatch = useDispatch();
  const id = props.route.params;

  // console.log('In QnAPlus, title : ', title);
  // console.log('In QnAPlus, content : ', content);
  // console.log('In QnAPlus, addQnAError : ', addQnAError);

  var text = null;

  useEffect(()=> {
    text = {
      title: title,
      contents: content,
      goods_id:id.id,
    };
    // console.log('In QnAPlus, text collection : ', text);
  },[title, content])


  const onPressQuestion = useCallback(() => {
    dispatch(timesToDelete())
    // console.log('In QnAPlus, text: ', text);

    dispatch(addToQuestion(text));  //TODO : 1. text  or  2. (name, content)

    setTimeout(() => {
      props.navigation.goBack();
    },2000);
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
          {/*<QnANameText maxLength={5} value={userName} onChangeText={(text) => onChangeUserName(text)}/>*/}
          <QnATitleText maxLength={20} value={title} onChangeText={(text) => onChangeTitle(text)}/>

          <QnAButton title={"등록하기"} onPress={onPressQuestion}/>

        </QnAView>

        <QnAContentTextInput
          maxLength={200}
          multiline={true}
          value={content}
          onChangeText={(text) => onChangeContent(text)}
        />

      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default QnAPlus;
