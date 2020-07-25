import React, { useState } from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import Nav from '../components/Nav'
import { StyleSheet,Button, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';

const Container = styled.SafeAreaView`
  flex: 1;
  border : 2px solid blue
`;

const Contents = styled.ScrollView`
  flex: 1;
  border : 2px solid blue
`;

const SignIn = (props) => {


      const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
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

    //   const goToHome = () => {
    //     Actions.home()
    //  }

     const [open, setOpen] = useState(false);

     const handleSubmit = ({ handleIsLogin }) => {
      // const apiUrl = "http://localhost:4000";
      //
      // axios.post(apiUrl + "/user/login", userInfo).then((data) => {
      //   // console.log(aa, 'url')
      //   // axios.post(aa, userInfo).then((data) => {
      //
      //   console.log(data, "data");
      //   if (data.status === 200) {
      //     alert("로그인에 성공하셨습니다");
      //     handleIsLogin();
      //
      //     if (data.data.memberId === "admin") {
      //       handleClose();
      //       props.history.push("/admin");
      //     } else {
      //       handleClose();
      //       props.history.push("/");
      //     }
      //
      //   } else {
      //     alert("로그인 실패하였습니다");
      //
      //     // props.history.push('/');
      //   }
      // });
    }

    return(

      <Container>
        <Header props={props}/>
        <Contents>

      <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
      <Button title="회원가입하기" onPress={() => props.navigation.navigate('SignUp')} />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />

     {/* <TouchableOpacity style = {{ margin: 100 }} onPress = {goToHome}>
         <Text>Log In</Text>
      </TouchableOpacity> */}
      <Text>
       Login
      </Text>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        pedding : 10
      }}
      placeholder = "Email"
      type="email"
      onChange={handleInputValue("email")} >

      </TextInput>

      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
      }}
      placeholder = "Password"
      type = "password"
      onChange={handleInputValue("password")}>
      </TextInput>
      {/* {isLogin ? (
            <Button
              title = "log out"
              onClick={handleIsLogin}
            >

            </Button>
          ) : (
            <Button
            title = "log in"
            handleIsLogin={handleIsLogin} >
                </Button>
          )} */}
      <Button
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => {
          handleSubmit(props);
        }}
        title='Log in'
        // disabled={!isLogin}
        // title={isLogin ? "Log in" : "Log out"}
      />
      </Contents>
      <Nav props={props}/>
    </Container>
    )
}




  export default SignIn;
