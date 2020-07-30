import React, { useState , useCallback} from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import Nav from '../components/Nav'
import { StyleSheet,Button, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Container = styled.SafeAreaView`
  flex: 1;
  border : 2px solid blue
`;

const Contents = styled.ScrollView`
  flex: 1;
  border : 2px solid blue
`;

const InputText = styled.TextInput`
        height: 40,
`

const InButton = styled.Button`
  width: 100px;
  border: 2px solid yellow;
`;

const SignIn = (props) => {
      
      const dispatch = useDispatch();
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      // const [userInfo, setUserInfo] = useState({
      //   email: "",
      //   password: "",
      // });

      // const handleInputValue = (key) => (e) => {
      //   setUserInfo({ ...userInfo, [key]: e.target.value });
      // };

      const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

   

     const [open, setOpen] = useState(false);

    //  const handleSubmit = ({ handleIsLogin }) => {
    //   const apiUrl = "http://ec2-15-164-219-204.ap-northeast-2.compute.amazonaws.com:4000";
    //   //axios.defaults.withCredentials = true
    //   axios.post(apiUrl + "/user/login", {withCredentials: true}, userInfo).then((data) => {
        
    //     console.log(data, "data");
    //     if (data.status === 200) {
    //       alert("로그인에 성공하셨습니다");
    //       handleIsLogin();
      
    //       // if (data.data.user_type === "admin") {
    //       //   handleClose();
    //       //   props.history.push("/admin");
    //       // } else {
    //       //   handleClose();
    //       //   props.history.push("/");
    //       // }
      
    //     } else {
    //       alert("로그인 실패하였습니다");
      
    //       // props.history.push('/');
    //     }
    //   });
    // }

    const onPressSignin = useCallback(() => {

      const text = {
        email,
        password,
        
      }
      
      dispatch( login(text) );  //TODO : 1. text  or  2. (name, content)
      props.navigation.goBack()
    }, [email, password]);

    return(

      <Container>
        <Header props={props}/>
        <Contents>

      
      <Button title="회원가입하기" onPress={() => props.navigation.navigate('SignUp')} />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />

     {/* <TouchableOpacity style = {{ margin: 100 }} onPress = {goToHome}>
         <Text>Log In</Text>
      </TouchableOpacity> */}
      <Text>
       Login
      </Text>
      <InputText
      placeholder = "Email"
      type="email"
      value={email}
      onChangeText={ email => setEmail(email)} >

      </InputText>

      <InputText
      placeholder = "Password"
      type = "password"
      value={password}
      onChangeText={ password => setPassword(password)}>
      </InputText>
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
      <InButton
        onPress={onPressSignin}
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
