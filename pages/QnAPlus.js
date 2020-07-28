import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {useDispatch} from 'react-redux';
import {connect} from 'react-native-redux';

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
  // const dispatch = useDispatch();
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');
  const [name, onChangeName] = useState('');
  const [text, onChangeContent] = useState('');

  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  const onPressQuestion = useCallback(() => {
    // dispatch({
    //
    // })
    props.navigation.goBack()
  }, []);

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
          <QnAButton title={'등록하기'} onPress={onSubmit} />
        </QnAView>

        <QnAContentTextInput
          maxLength={200}
          multiline={true}
          onChangeText={(text) => onChangeContent(text)}
          value={text}
        />

      </Contents>

      <Nav props={props} />
    </Container>
  );
};

export default connect(QnAPlus);
