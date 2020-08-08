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
`;

const Contents = styled.ScrollView`
  flex: 1;
`;
// const InputText = styled.TextInput`
//         height: 40;
// font-size: 23px;
// font-family: Consola;
// `

const InButton = styled.Button`
  background-color: black;
`;

// function part
const Myinfocheck = (props) => {
  const userInfo = useSelector((state) => state.login.data?.userInfo);
  const loginDone = useSelector((state) => state.login?.loginDone);
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const data = useSelector((state) => state.login?.data);
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
        {loginDone ? (
          <View>
            <Text>Email : {data === undefined ? 'None' : userInfo.email} </Text>
            <TextInput
              placeholder="Password"
              type="password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => onChangePassword(text)}></TextInput>
            <InButton
              color="#464e46"
              title="수정하기"
              onPress={onPressInfoCheck}
            />
          </View>
        ) : (
          <View>
            <InButton
              color="#464e46"
              title="로그인 후 이용 가능한 서비스입니다"
              onPress={() => props.navigation.navigate('Home')}
            />
          </View>
        )}
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Myinfocheck;
