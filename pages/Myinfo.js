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

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  return (
    <Container>
      <Header props={props}/>
      <Contents>
          <Text> Email </Text>
          <Text> Name </Text>
          <Text> Phone </Text>
          <Text> Address </Text>
          <Button title="비밀번호 변경" />
      <Button title ="수정하기" onPress={ () => {props.navigation.navigate('Myinfocheck')} } />
      </Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Myinfo;