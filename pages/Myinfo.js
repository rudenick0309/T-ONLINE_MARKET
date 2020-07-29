import React, {useState, useEffect} from "react";
import {StyleSheet, Text, Button, View} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from '../components/Nav'


// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border : 2px solid green
`;

const Contents = styled.ScrollView`
  flex: 1;
  border : 2px solid green
`;


// function part
const Myinfo = (props) => {
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);
 
  const [userInfo, setuserInfo] = useState([])

  useEffect(() => {
    axios.get("http://ec2-15-164-219-204.ap-northeast-2.compute.amazonaws.com:4000/user/info")
      .then((result) => {
        setuserInfo(result.data)
        console.log(result.data, 'data')
      });
  }, []);

  return (
    <Container>
      <Header props={props}/>
      <Contents>
          <Text> Email : {userInfo? userInfo.email: ''} </Text>
          <Text> Name : {userInfo? userInfo.name: ''}</Text>
          <Text> Phone : {userInfo? userInfo.phone: ''}</Text>
          <Text> Address : {userInfo? userInfo.address: ''}</Text>
          <Button title="비밀번호 변경" onPress={ () => {props.navigation.navigate('PasswordChange')}}/>
      <Button title ="수정하기" onPress={ () => {props.navigation.navigate('Myinfocheck')} } />
      <Button title ="탈퇴하기" onPress={ () => {props.navigation.navigate('Resign')} } />
      </Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Myinfo;