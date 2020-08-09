import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
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
`;

const Contents = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

// flex-direction:row;
const QnAView = styled.View`
  margin-bottom: 40px;
  flex-direction: row;
`;

const QnATitleText = styled.TextInput`
  flex:1;
  border-bottom-width: 2px;
  border-style : solid;
  margin-bottom:20px;
`;

const QnAButton = styled.TouchableOpacity`
  flex:1;
  height: 50px;
  background-color:#535204;
  justify-content:center;
  align-items:center;
  border-radius:10px;  
`;

const ButtonText = styled.Text`
  color:white;
  font-size:30px;
  letter-spacing:10px;
`

const QnAContentTextInput = styled.TextInput`
  margin-bottom: 20px;
  flex: 1;
  border: 2px solid grey  
  height: 200px;
  border-radius:10px;
`;

const TopTextView= styled.View`
  flex:1;
  opacity:0.2
  justify-content:center;
  align-items:center;
  margin: 50px 0px;
`

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

  useEffect(() => {
    text = {
      title: title,
      contents: content,
      goods_id: id.id,
    };
    // console.log('In QnAPlus, text collection : ', text);
  }, [title, content]);


  const onPressQuestion = useCallback(() => {
    dispatch(timesToDelete());
    // console.log('In QnAPlus, text: ', text);

    dispatch(addToQuestion(text));  //TODO : 1. text  or  2. (name, content)

    setTimeout(() => {
      props.navigation.goBack();
    }, 2000);
  }, [title, content]);


  return (
    <Container>

      <Header props={props}/>

      <Contents>

        <TopTextView>
          <Text>
            {
              `질문은 200자로 제한되오며,`
            }
          </Text>
          <Text>
            {
              `악의적인 공격성 글은 가슴이 아파요.`
            }
          </Text>
        </TopTextView>


          {/*<QnANameText maxLength={5} value={userName} onChangeText={(text) => onChangeUserName(text)}/>*/}
          <QnATitleText
            maxLength={60}
            value={title}
            placeholder={"제목을 입력해 주세요"}
            onChangeText={(text) => onChangeTitle(text)}
          />

        <QnAContentTextInput
          maxLength={200}
          multiline={true}
          placeholder={"내용을 입력해 주세요"}
          value={content}
          onChangeText={(text) => onChangeContent(text)}
        />

        {/*<QnAButton title={"등록하기"} onPress={onPressQuestion}/>*/}
        <QnAButton onPress={onPressQuestion}>
          <ButtonText>등록하기</ButtonText>
        </QnAButton>

      </Contents>

      <Nav props={props}/>

    </Container>
  );
};

export default QnAPlus;
