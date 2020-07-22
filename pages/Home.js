import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Input, TouchableOpacity} from "react-native";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Nav from "../components/Nav";

// TODO: import {ActivityIndicator} from "react-native";    This is a Ellipse Loading image, I will use this later.

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border: 3px solid red
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 3px solid grey;
`;

const RecommendedView = styled.View`
  height: 150px;
`;


// function part
const Home = (props) => {
  // const [] = useState('')  -> redux

  // later, under state are changed in api res.
  const [recommendedFlower, setRecommendedFlower] = useState(null);
  const [bestFlower, setBestFlower] = useState(null);

  useEffect(() => {
    /* TODO: axios.get('url~~~')
    *   try {} catch {}
    *   1. RecommendedFlower api -> GoodsDetail
    *   2. BestFlower api -> GoodsDetail
    */
  }, []);

  return (
    <Container>

      <Header props={props}/>

      <Contents>
        <Text>홈 화면</Text>
        {/*  TODO: <Search></Search>*/}

        {/*  TODO: {recommendedFlower.map( (el) => { <RecommendedFlower key={el.~} onPress={ () => {props.navigation.navigate( 'RecommendedFlower', ~~ )} } /> */}

        {/*  TODO: {bestFlower.map( (el) => { <BestFlower key={el.~} onPress={ () => {props.navigation.navigate( 'BestFlower', ~~ )} } /> )*/}

      </Contents>

      <Nav props={props}/>

    </Container>
  );
};

export default Home;

/*
* TODO:예를들어서 클라이언트 화면에
*      2:31
*    최소 : [입력할 부분]
*     최대 : [입력할 부분]
*      이렇게 보여주고 저기다가 입력한 값을
*      요청보낼때 같이 쿼리파라미터로 넘겨주면 어떨까 합니당
*     http://localhost:4000/goods/lists?min=1000&max=8000
*
*
* */