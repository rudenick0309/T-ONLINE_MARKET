import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {useDispatch} from 'react-redux';
import {resignAction} from '../reducers/resign';
import {logoutAction} from '../reducers/login';

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;
const InButton = styled.Button`
  background-color: black;
`;

// function part
const Resign = (props) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const dispatch = useDispatch();
  // const qna = useSelector((state) => state?.qna);

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  const text = {
    email,
    password,
  };

  const onPressResign = useCallback(() => {
    dispatch(resignAction(text));
    dispatch(logoutAction()); //TODO : 1. text  or  2. (name, content)
    props.navigation.navigate('ResignCheck');
  }, [email, password]);

  return (
    <Container>
      <Header props={props} />
      <Contents>
        <TextInput
          placeholder="Email"
          type="email"
          onChangeText={(text) => onChangeEmail(text)}></TextInput>
        <TextInput
          placeholder="Password"
          type="password"
          secureTextEntry={true}
          onChangeText={(text) => onChangePassword(text)}></TextInput>
        <InButton color="#464e46" title="탈퇴하기" onPress={onPressResign} />
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Resign;
