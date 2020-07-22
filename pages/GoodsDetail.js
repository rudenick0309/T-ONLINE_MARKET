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
const GoodsDetail = (props) => {
  // TODO: changes the state name : const [checkList, setCheckList] = useState(null);

  useEffect(() => {
    // TODO: axios to detail
  }, []);

  return (
    <Container>
      <Header props={props}/>
      <Contents><Text>GoodsDetail</Text></Contents>
      <Nav props={props}/>
    </Container>
  );
};

export default GoodsDetail;