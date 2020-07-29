import React, {useState, useEffect} from "react";
import {StyleSheet, Text, Button, View, TextInput} from "react-native";
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
const Resign = (props) => {
    // const [userInfo, setUserInfo] = useState({
    //     email: "",
    //     password: "",
    //   });

      const handleInputValue = (key) => (e) => {
        setUserInfo({ ...userInfo, [key]: e.target.value });
      };

    //   const handleOpen = () => {
    //     setOpen(true);
    //   };
    
    //   const handleClose = () => {
    //     setOpen(false);
    //   };
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  return (
    <Container>
      <Header props={props}/>
      <Contents>
          <Text>ID : </Text>
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
      <Button title="탈퇴하기" onPress={ () => {props.navigation.navigate('ResignCheck')} }/>
      </Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Resign;