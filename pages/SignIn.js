import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../reducers/login';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

// const InputText = styled.TextInput`
//         height: 40,
// `

const InButton = styled.Button`
  background-color: black;
  margin-bottom: 300px;
`;

const ViewRowStyled = styled.View`
  flex-direction: row;
  text-align: center;
  margin: 23px 0px;
  justify-content: center;
  align-items: center;
`;

const SignIn = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector((state) => state.login?.error);

  const text = {
    email,
    password,
  };

  const onPressSignin = useCallback(() => {
    dispatch(loginAction(text));

    props.navigation.navigate('Home');
  }, [email, password]);

  return (
    <Container>
      <Header props={props} />
      <Contents>
        {/* <TouchableOpacity style = {{ margin: 100 }} onPress = {goToHome}>
         <Text>Log In</Text>
      </TouchableOpacity> */}
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(email) => setEmail(email)}></TextInput>

        <TextInput
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}></TextInput>
        {error ? (
          <InButton
            color="#464e46"
            onPress={() => alert('이메일이나 비밀번호가 올바르지 않습니다')}
            title="Log in"
            // disabled={!isLogin}
            // title={isLogin ? "Log in" : "Log out"}
          />
        ) : (
          <InButton
            color="#464e46"
            onPress={onPressSignin}
            title="Log in"
            // disabled={!isLogin}
            // title={isLogin ? "Log in" : "Log out"}
          />
        )}
        <ViewRowStyled>
          <InButton
            title="회원가입하기"
            color="#464e46"
            onPress={() => props.navigation.navigate('SignUp')}
          />
        </ViewRowStyled>
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default SignIn;
