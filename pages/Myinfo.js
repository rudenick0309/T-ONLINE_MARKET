import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, Text, Button, View} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from '../components/Nav'
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from 'react-redux';
import {editinfoAction} from '../reducers/myinfochange';


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
 
  
    
  const [username, onChangeUsername] = useState('')
  const [password, onChangePassword] = useState('')
  const [email, onChangeEmail] = useState('')
  const [phone, onChangePhone] = useState('')
  const [address, onChangeAddress] = useState('')
  

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
dispatch(editinfoAction(text));  //TODO : 1. text  or  2. (name, content)
props.navigation.navigation('Mypage');
}, [username, password, email, phone, address]);



  return (
    <Container>
      <Header props={props}/>
      <Contents>
      <Text> Name : {userInfo? userInfo.username: ''} </Text>
          <TextInput
          placeholder = "NameChange"
          value={username}
          onChangeText={(text) => onChangeUsername(text)} ></TextInput>
          <Text> Email : {userInfo? userInfo.email: ''} </Text>
          <TextInput
          placeholder = "Email"
          value={email}
          onChangeText={(text) => onChangeEmail(text)} ></TextInput>
          <Text> Password : {userInfo? userInfo.password: ''} </Text>
          <TextInput
          placeholder = "Password"
          value={password}
          onChangeText={(text) => onChangePassword(text)} ></TextInput>
          <Text> Phone : {userInfo? userInfo.phone: ''}</Text>
          <TextInput placeholder = "Phone"
      value={phone}
      onChangeText={(text) => onChangePhone(text)} ></TextInput>
          <Text> Address : {userInfo? userInfo.address: ''}</Text>
          <TextInput placeholder = "Address"
      value={address}
      onChangeText={(text) => onChangeAddress(text)} ></TextInput>
         
      <Button title ="수정하기" onPress={onPressMyinfo} />
      <Button title ="탈퇴하기" onPress={ () => {props.navigation.navigate('Resign')} } />
      </Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Myinfo;