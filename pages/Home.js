import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Nav from "../components/Nav";
import faker from "faker";
// import RecommendedFlower from "../components/RecommendedFlower";
import GoodsDetail from "./GoodsDetail";
import {
  RecommendedFlowerContainer,
  RecommendedFlowerContents,
  RecommendedFlowerImageView,
  RecommendedFlowerTextView
} from "../components/RecommendedFlower";
import {
  BestFlowerContainer,
  BestFlowerContents,
  BestFlowerImageView,
  BestFlowerTextView
} from "../components/BestFlower";
import {useDispatch, useSelector} from "react-redux";
import {homeToLoad} from "../reducers/goods";
// import CaroseulTest from "./CaroseulTest";
import Carousel from "react-native-carousel-view";
import ViewPager from "@react-native-community/viewpager";

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
`;

const ViewPagerStyled = styled(ViewPager)`
  border : 3px solid yellow;
  height:300px;
`;
const TextPagerStyled = styled.Text`
  border : 3px solid red;
  height : 200px;
  font-size: 50px;
`;
const TouchablePagerStyled = styled.TouchableOpacity`
  border : 3px solid blue;
  height : 200px;
`;

// function part
const Home = (props) => {
  // later, under state are changed in api res.
  const [text, onChangeText] = React.useState("Here is Search part");
  const dispatch = useDispatch();
  const home = useSelector(state => state.goods?.home);
  const recommendation = useSelector((state) => state.goods.home?.recommendation);
  const best = useSelector((state) => state.goods.home?.best);
  // console.log("In HOME COMPONENT, home : ", home);
  // console.log("In HOME COMPONENT, recommendation : ", recommendation);
  // console.log("In HOME COMPONENT, best : ", best);

  useEffect(() => {
    dispatch(homeToLoad());
    // console.log("In HOME, useEffect, home : ", home);
    // recommendation = home.recommendation;
    // best = home.best;

  }, []);

  return (

    <Container>

      <Header props={props}/>

      <Contents>
        {/*  TODO: <Search></Search>*/}
        <TextInput
          onChangeText={text => onChangeText(text)}
          value={text}
        />

        <ViewPagerStyled initialPage={0}>
          {recommendation && recommendation.map( (el) => {
            return (
              <View key={el.id}>
                <RecommendedFlowerContainer
                  onPress={ () => {props.navigation.navigate("GoodsList", {id : el.id} )} }
                >
                  <RecommendedFlowerContents>
                    <RecommendedFlowerImageView
                      source={{ uri: el.img }}
                    />
                    <RecommendedFlowerTextView>{el.title}</RecommendedFlowerTextView>
                  </RecommendedFlowerContents>
                </RecommendedFlowerContainer>
              </View>
            )
          })}
        </ViewPagerStyled>

        <TextStyled >Best Seller</TextStyled>

        {best && best.map((el) => {
          return (
            <BestFlowerContainer
              onPress={ () => {props.navigation.navigate("GoodsDetail", {id : el.id} )} }>
              <BestFlowerContents>
                <BestFlowerImageView source={{ uri: el.img }}></BestFlowerImageView>
                <BestFlowerTextView>{el.title}</BestFlowerTextView>
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


const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    borderColor: "green",
    // border
    borderWidth: 100,
    borderStyle: "solid",
  },
});
