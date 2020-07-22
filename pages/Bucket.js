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
const Bucket = (props) => {
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  return (
    <Container>
      <Header props={props}/>
      <Contents><Text>장바구니 페이지</Text></Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default Bucket;