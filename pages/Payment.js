import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from '../components/Nav'

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border : 2px solid blue
`;

const Contents = styled.ScrollView`
  flex: 1;
  border : 2px solid blue
`;


// function part
const Payment = (props) => {
  // TODO: changes the state name : const [checkList, setCheckList] = useState(null);

  useEffect(() => {
    // Question. In this page, What shall I do? exactly?
    // first, find the iamport module
    // second, practice the iamport tutorial
    // third, take them!
  }, []);

  return (
    <Container>
      <Header props={props}/>
      <Contents><Text>Payment</Text></Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Payment;