import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {useDispatch, useSelector} from 'react-redux';
import {infoCheckAction} from '../reducers/myinfocheck';

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid green;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid green;
`;
// const InputText = styled.TextInput`
//         height: 40,
// `

// const InButton = styled.Button`
//   width: 100px;
//   border: 2px solid yellow;
// `;

// function part
const Myinfocheck = (props) => {
  const userInfo = useSelector((state) => state.login.data?.userInfo);

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  console.log('myinfocheck info', userInfo);
  const dispatch = useDispatch();
  // const qna = useSelector((state) => state?.qna);

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  const text = {
    email,
    password,
  };

  const onPressInfoCheck = useCallback(() => {
    dispatch(infoCheckAction(text)); //TODO : 1. text  or  2. (name, content)
    props.navigation.navigate('Myinfo');
  }, [email, password]);

  return (
    <Container>
      <Header props={props} />
      <Contents>
        <Text>{props.email} : </Text>
        <TextInput
          placeholder="Password"
          type="password"
          secureTextEntry={true}
          onChangeText={(text) => onChangePassword(text)}></TextInput>
        <Button title="수정하기" onPress={onPressInfoCheck} />
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Myinfocheck;
