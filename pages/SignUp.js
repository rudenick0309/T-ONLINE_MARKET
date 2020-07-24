import React, { useState } from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import Nav from '../components/Nav'
import { StyleSheet,Button, Text, View, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

const Container = styled.SafeAreaView`
  flex: 1;
  border : 2px solid blue
`;

const Contents = styled.ScrollView`
  flex: 1;
  border : 2px solid blue
`;


const SignUp = (props) => {
  
    const [userInfo, setUserInfo] = useState({
      username: "",
      email:"",
      password:"",
      phone:"",
      address:"",
      user_type:"",
      });

      const handleInputValue = (key) => (e) => {
        setUserInfo({ ...userInfo, [key]: e.target.value });
      };
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleIsAllow = () => {
        setIsAllow(!isAllow);
        if (isAllow) {
        }
      };

      const [open, setOpen] = useState(false);

      const [isAllow, setIsAllow] = useState(false);

      const [transition, setTransition] = useState(undefined);

     const handleSubmit = (Transition) => {
      setTransition(() => Transition);
      const apiUrl = "http://localhost:4000";
      
      axios.post(apiUrl + "/user/signup", userInfo).then((data) => {
        // console.log(aa, 'url')
        // axios.post(aa, userInfo).then((data) => {  
          
        console.log(data, "data");
        if (data.status === 200) {
          alert("회원가입에 성공하셨습니다");
          handleClose();
  
        } else {
          alert("회원가입에 실패하였습니다");
  
          // props.history.push('/');
        }
      });
    }

      return (
        <Container>
            <Header props={props}/>
            <Contents>
            <Text>Sign Up</Text>
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
            <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        pedding : 10
      }}
      placeholder = "Username"
      onChange={handleInputValue("username")} >

      </TextInput>

      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        pedding : 10
      }}
      type = "email"
      placeholder = "Email"
      onChange={handleInputValue("email")} >

      </TextInput>
      
      <TextInput 
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      type = "password"
      placeholder = "Password"
      onChange={handleInputValue("password")}>
      </TextInput>

      <TextInput 
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      type = "password"
      placeholder = "Password 확인"
      onChange={(value) => {
        if(value === password){
        handleInputValue("password")
      }else{
        alert("비밀번호가 다릅니다")
        } 
       }
      }>
      </TextInput>

      <TextInput 
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      placeholder = "Phone"
      onChange={(value) => {
        let num = value.replace(".", '');
     if(isNaN(num)){
        alert("숫자만 입력해주세요")
     }else{
         handleInputValue("phone")}
       }
      }>
      </TextInput>

      <TextInput 
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      placeholder = "Address"
      onChange={handleInputValue("address")}>
      </TextInput>

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
{/* 
      <table >
                    <tr>
                      <th>[필수] 개인정보 수집 및 이용 동의</th>
                    </tr>
                    <tr>
                      <td>
                        1. 목적 : 회원의 개인 식별, 상품 투자 내역 관리, 본인
                        인증 등 서비스 제공에 관련한 목적으로 개인정보를
                        처리합니다.
                      </td>
                    </tr>
                    <tr>
                      <td>2. 개인정보의 항목 : 성명, 이메일, </td>
                    </tr>
                    <tr>
                      <td>
                        3. 개인정보의 보유 및 이용 기간 : 회원 탈퇴 시까지 보유
                      </td>
                    </tr>
                    <tr>
                      <Checkbox
                        checked={isAllow}
                        onChange={handleIsAllow}
                      ></Checkbox>
                      <td>동의</td>
                    </tr>
                  </table> */}

      <Button
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => {
          handleSubmit(props);
        }}
        title='Sign Up'
        // disabled={!isLogin}
        // title={isLogin ? "Log in" : "Log out"}
      />
      </Contents>
      <Nav props={props}/>
      </Container>
      )
}

export default SignUp;