import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {connect} from 'react-redux';
import {actionCreators} from "../reducers/store";


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

  const {addToQuestion} = props;
  const {qna} = props;

  const [name, onChangeName] = useState('');
  const [content, onChangeContent] = useState('');

  console.log('addToQuestion : ', props);
  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  const onPressQuestion = useCallback(() => {

    const text = {
      name,
      content,
    }

    // console.log('name and content : ', name, content)
    // console.log('text : ', text)
    console.log('qna : ', qna);
    addToQuestion(text);  //TODO : 1. text  or  2. (name, content)
    props.navigation.goBack()
  }, [name, content]);

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
          <QnANameText maxLength={5} value={name} onChangeText={(name) => onChangeName(name)}/>
          <QnAButton title={'등록하기'} onPress={onPressQuestion} />
        </QnAView>

        <QnAContentTextInput
          maxLength={200}
          multiline={true}
          onChangeText={(text) => onChangeContent(text)}
          value={content}
        />
        {qna}
      </Contents>

      <Nav props={props} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {qna : state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToQuestion: (text) => dispatch(actionCreators.addToQuestion(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QnAPlus);
