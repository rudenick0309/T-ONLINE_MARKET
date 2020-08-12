import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {editinfoAction} from '../reducers/myinfochange';
import CheckBox from '@react-native-community/checkbox';

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
const Myinfo = (props) => {
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);

  const userInfo = useSelector((state) => state.login.data?.userInfo);
  const data = useSelector((state) => state.login?.data);
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phone, onChangePhone] = useState('');
  const [address, onChangeAddress] = useState('');

  const dispatch = useDispatch();
  // const qna = useSelector((state) => state?.qna);

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  const text = {
    username,
    password,
    email,
    phone,
    address,
    // user_type,
  };

  const onPressMyinfo = useCallback(() => {
    dispatch(editinfoAction(text)); //TODO : 1. text  or  2. (name, content)
    alert('회원정보가 변경되었습니다');
    props.navigation.navigate('Mypage');
  }, [username, password, email, phone, address]);

  return (
    <Container>
      <Header props={props} />
      <Contents>
        <Text> Name : {userInfo ? userInfo.username : ''} </Text>
        <TextInput
          defaultValue={userInfo ? userInfo.username : ''}
          value={username}
          onChangeText={(text) => onChangeUsername(text)}></TextInput>
        <Text> Email : {userInfo ? userInfo.email : ''} </Text>
        <TextInput
          defaultValue={userInfo ? userInfo.email : ''}
          value={email}
          onChangeText={(text) => onChangeEmail(text)}></TextInput>
        <Text> Password </Text>
        <TextInput
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => onChangePassword(text)}></TextInput>
        <Text> Phone : {userInfo ? userInfo.phone : ''}</Text>
        <TextInput
          defaultValue={userInfo ? userInfo.phone : ''}
          value={phone}
          onChangeText={(text) => onChangePhone(text)}></TextInput>
        <Text> Address : {userInfo ? userInfo.address : ''}</Text>
        <TextInput
          defaultValue={userInfo ? userInfo.address : ''}
          value={address}
          onChangeText={(text) => onChangeAddress(text)}></TextInput>

        <InButton color="#464e46" title="수정하기" onPress={onPressMyinfo} />
        <InButton
          color="#464e46"
          title="탈퇴하기"
          onPress={() => {
            props.navigation.navigate('Resign');
          }}
        />
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Myinfo;
