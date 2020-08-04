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
  Switch,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import {signupAction} from '../reducers/signup';
import {useDispatch} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid blue;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid blue;
`;

const InButton = styled.Button`
  width: 100px;
  border: 2px solid yellow;
`;

const SignUp = (props) => {
  const [username, onChangeUsername] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [phone, onChangePhone] = useState('');
  const [address, onChangeAddress] = useState('');
  const [user_type, onChangeUserType] = useState(1);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const dispatch = useDispatch();

  const text = {
    username,
    email,
    password,
    phone,
    address,
    user_type,
  };

  const onPressSingup = useCallback(() => {
    dispatch(signupAction(text)); //TODO : 1. text  or  2. (name, content)
    alert('회원가입 되었습니다');
    props.navigation.navigate('Home');
  }, [username, email, password, phone, address, user_type]);

  return (
    <Container>
      <Header props={props} />
      <Contents>
        <Text>Sign Up</Text>
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => onChangeUsername(text)}></TextInput>

        <TextInput
          textContentType="emailAddress"
          // autoCompleteType = "email"
          placeholder="Email"
          value={email}
          onChangeText={(text) => onChangeEmail(text)}></TextInput>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          textContentType="password"
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => onChangePassword(text)}></TextInput>

        <TextInput
          textContentType="password"
          placeholder="Password 확인"
          secureTextEntry={true}
          // onChange={(value) => {
          //   if(value === password){
          //   handleInputValue("password")
          // }else{
          //   alert("비밀번호가 다릅니다")
          //   }
          //  }
          // }
          onChangeText={(text) => onChangePassword(text)}></TextInput>

        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => {
            let num = Number(text);
            if (isNaN(num)) {
              alert('숫자만 입력해주세요');
            } else {
              onChangePhone(text);
            }
          }}></TextInput>

        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={(text) => onChangeAddress(text)}></TextInput>

        {/* <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={user_type ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={user_type ? onChangeUserType(1) : onChangeUserType(2)}
          value={user_type}
        /> */}

        {/* <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      placeholder = "사업자 등록번호">
      </TextInput>

      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      placeholder = "사업자명">
      </TextInput>

      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      placeholder = "사업자 주소">
      </TextInput> */}

        <Text>
          <Text>[필수] 개인정보 수집 및 이용 동의</Text>

          <Text>
            1. 목적 : 회원의 개인 식별, 상품 투자 내역 관리, 본인 인증 등 서비스
            제공에 관련한 목적으로 개인정보를 처리합니다.
          </Text>

          <Text>2. 개인정보의 항목 : 성명, 이메일, </Text>

          <Text>3. 개인정보의 보유 및 이용 기간 : 회원 탈퇴 시까지 보유</Text>

          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text>동의</Text>
        </Text>

        <InButton
          onPress={onPressSingup}
          title="Sign Up"
          // disabled={!isLogin}
          // title={isLogin ? "Log in" : "Log out"}
        />
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default SignUp;
