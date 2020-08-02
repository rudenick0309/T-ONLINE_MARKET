import React, {useState, useEffect,useCallback} from "react";
import {StyleSheet, Text, Button, View, TextInput} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from '../components/Nav'
import { useDispatch } from 'react-redux';
import { resignAction } from "../reducers/resign";


// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border : 2px solid green
`;

const Contents = styled.ScrollView`
  flex: 1;
  border : 2px solid green
`;
const InputText = styled.TextInput`
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        pedding : 10`


// function part
const Resign = (props) => {
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
 

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
dispatch( resignAction(text));  //TODO : 1. text  or  2. (name, content)
props.navigation.navigate('ResignCheck');
}, [email, password]);

  return (
    <Container>
      <Header props={props}/>
      <Contents>
      <InputText
      placeholder = "Email"
      type = "email"
      onChangeText={ (text) => onChangeEmail(text)}>
      </InputText>
      <InputText
      placeholder = "Password"
      type = "password"
      onChangeText={ (text) => onChangePassword(text)}>
      </InputText>
      <Button title="탈퇴하기" onPress={onPressResign }/>
      </Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Resign;