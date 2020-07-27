import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, TextInput , TouchableOpacity,Image} from "react-native";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Nav from "../components/Nav";
import faker from 'faker';
// import RecommendedFlower from "../components/RecommendedFlower";
import GoodsDetail from "./GoodsDetail";
import { RecommendedFlowerContainer,
  RecommendedFlowerContents,
  RecommendedFlowerImageView,
  RecommendedFlowerTextView} from "../components/RecommendedFlower";
import { BestFlowerContainer,
  BestFlowerContents,
  BestFlowerImageView,
  BestFlowerTextView } from "../components/BestFlower";

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

const TextStyled = styled.Text`
  margin-top: 20px
`

// dummy data part
let homeData = []

function Fake() {
  return {
    id: faker.random.number(),
    title: faker.random.word(),
    img:faker.image.imageUrl(),
    contents:faker.name.jobTitle(),
    // not add to price, Use the contents property
  };
}

for(let i = 0; i < 30; i++) {
  homeData.push(Fake())
}

// random Index
const getRandomIndex = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// function part
const Home = (props) => {
  // later, under state are changed in api res.
  const RecommendedFlowerData = homeData[getRandomIndex(0, homeData.length)]
  const BestFlowerData = homeData;
  const [text, onChangeText] = React.useState('Here is Search part');

  // useEffect(() => {
  //   /* TODO: axios.get('url~~~')
  //   *   try {} catch {}
  //   *   1. RecommendedFlower api -> GoodsDetail
  //   *   2. BestFlower api -> GoodsDetail
  //   */
  // }, []);

  return (
    <Container>

      <Header props={props}/>

      <Contents>
        {/*  TODO: <Search></Search>*/}
        <TextInput

          onChangeText={text => onChangeText(text)}
          value={text}
        />

        <RecommendedFlowerContainer
          // onPress={ () => {props.navigation.navigate("GoodsList")} }>
          onPress={ () => {props.navigation.navigate("GoodsList", {id : RecommendedFlowerData.id} )} }>
          <RecommendedFlowerContents>
            <RecommendedFlowerImageView source={RecommendedFlowerData.img}></RecommendedFlowerImageView>
            <RecommendedFlowerTextView>{RecommendedFlowerData.contents}</RecommendedFlowerTextView>
          </RecommendedFlowerContents>
        </RecommendedFlowerContainer>

        <TextStyled >Best Seller</TextStyled>

        {BestFlowerData.map((el) => {
          return (
            <BestFlowerContainer
              // onPress={ () => {props.navigation.navigate("GoodsDetail")} }>
              onPress={ () => {props.navigation.navigate("GoodsDetail", {id : el.id} )} }>
              <BestFlowerContents>
                <BestFlowerImageView source={el.img}></BestFlowerImageView>
                <BestFlowerTextView>{el.contents}</BestFlowerTextView>
              </BestFlowerContents>
            </BestFlowerContainer>
            )
        })}

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
