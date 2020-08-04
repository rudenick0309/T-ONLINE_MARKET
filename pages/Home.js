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
  padding: 0px 10px;
`;

const Contents = styled.ScrollView`
  flex: 1;
  
`;

const TextStyled = styled.Text`
  margin-top: 20px
`;

const ViewPagerStyled = styled(ViewPager)`
  margin-top:15px;
  height:300px;
`;
const TextPagerStyled = styled.Text`
  
  height : 200px;
  font-size: 50px;
`;
const TouchablePagerStyled = styled.TouchableOpacity`
  
  height : 200px;
`;

const TextCssStyled = styled.Text`
  font-weight: bold;
  font-size: 30px;
  padding-left:20px;
  margin-top : 0px;
`;
const BestTextCssStyled = styled.Text`
  margin-top : 30px;
  padding-left:20px;
  font-weight: bold;
  font-size: 30px;
`;

// function part
const Home = (props) => {
  // later, under state are changed in api res.
  const dispatch = useDispatch();
  const home = useSelector(state => state.goods?.home);
  const recommendation = useSelector((state) => state.goods.home?.recommendation);
  const best = useSelector((state) => state.goods.home?.best);
  console.log("In HOME COMPONENT, home : ", home);
  // console.log("In HOME COMPONENT, recommendation : ", recommendation);
  // console.log("In HOME COMPONENT, best : ", best);

  useEffect(() => {
    dispatch(homeToLoad());
    // console.log("In HOME, useEffect, home : ", home);
    // recommendation = home.recommendation;
    // best = home.best;

  }, []);

  return (
    <>
      <Header props={props}/>

      <Container>

        <Contents>
          {/*  TODO: <Search></Search>*/}


          <ViewPagerStyled initialPage={0}>
            {recommendation && recommendation.map((el) => {
              return (
                <View key={el.id}>
                  <TextCssStyled>
                    MD PICK !
                  </TextCssStyled>
                  <RecommendedFlowerContainer
                    onPress={() => {
                      props.navigation.navigate("GoodsList", {id: el.id, filter: el.filter});
                    }}
                  >
                    <RecommendedFlowerContents>
                      <RecommendedFlowerImageView
                        source={{uri: el.img}}
                      />
                      <RecommendedFlowerTextView>{el.title}</RecommendedFlowerTextView>
                    </RecommendedFlowerContents>
                  </RecommendedFlowerContainer>
                </View>
              );
            })}
          </ViewPagerStyled>

          <BestTextCssStyled>Best Seller</BestTextCssStyled>

          {best && best.map((el) => {
            return (
              <BestFlowerContainer
                onPress={() => {
                  props.navigation.navigate("GoodsDetail", {id: el.id});
                }}>

                <BestFlowerContents>
                  <BestFlowerImageView source={{uri: el.img}}></BestFlowerImageView>
                  <View>
                    <BestFlowerTextView>{el.title}</BestFlowerTextView>
                    <BestFlowerTextView>{el.price}원</BestFlowerTextView>
                  </View>
                </BestFlowerContents>

              </BestFlowerContainer>
            );
          })}

        </Contents>


      </Container>
      <Nav props={props}/>
    </>

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
