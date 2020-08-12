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
import shortId from "shortid";
// TODO: import {ActivityIndicator} from "react-native";    This is a Ellipse Loading image, I will use this later.

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  padding:10px;
`;

const Contents = styled.ScrollView`
  flex: 1;
  
`;

const TextStyled = styled.Text`
  margin-top: 20px
`;

const ViewPagerStyled = styled(ViewPager)`
  
  height:300px;
`;
const TextPagerStyled = styled.Text`
  
  height : 200px;
  font-size: 50px;
`;
// const TouchablePagerStyled = styled.TouchableOpacity`
//   height : 200px;
// `;

const RecommendTextStyled = styled.Text`
  font-weight:bold;
  font-size:25px;
  color: #464e46;
  margin: 20px 10px;
`;

const BestTextStyled = styled.Text`
  font-weight:bold;
  font-size:25px;
  color: #464e46;
  margin: 40px 10px;
`;

const SplitView = styled.View`
  flex-direction:row;
  flex:1
`;

const InSplit = styled.View`
  width:50%
`

const InTextView = styled.View`
  padding-left:10px;
  margin:5px 0px;
`

// function part
const Home = (props) => {
  // later, under state are changed in api res.
  const dispatch = useDispatch();
  const home = useSelector(state => state.goods?.home);
  const recommendation = useSelector((state) => state.goods.home?.recommendation);
  const best = useSelector((state) => state.goods.home?.best);
  console.log("In HOME COMPONENT, home : ", home);


  useEffect(() => {
    dispatch(homeToLoad());
  }, []);

  return (

    <Container>

      <Header props={props}/>

      <Contents>
        {/*  TODO: <Search></Search>*/}


        <RecommendTextStyled>MD PICK's</RecommendTextStyled>
        <ViewPagerStyled initialPage={0}>
          {recommendation && recommendation.reverse().map((el) => {
            return (
              <View key={shortId.generate()}>
                <RecommendedFlowerContainer
                  onPress={() => {
                    props.navigation.navigate("GoodsList", {id: el.id, filter: el.filter});
                  }}
                >
                  <RecommendedFlowerContents>
                    <RecommendedFlowerImageView
                      source={{uri: el.img}}
                    />
                    {/*<RecommendedFlowerTextView>{el.title}</RecommendedFlowerTextView>*/}
                  </RecommendedFlowerContents>
                </RecommendedFlowerContainer>
              </View>
            );
          })}
        </ViewPagerStyled>

        <BestTextStyled>Best Seller</BestTextStyled>

        <SplitView>
          <InSplit>
            {best && best.slice(0, best.length/2).reverse().map((el) => {
              return (
                <BestFlowerContainer
                  key={shortId.generate()}
                  onPress={ () => {props.navigation.navigate("GoodsDetail", {id : el.id} )} }>
                  <BestFlowerContents key={shortId.generate()}>
                    <BestFlowerImageView source={{ uri: el.img }}></BestFlowerImageView>
                    <InTextView>
                      <BestFlowerTextView>{el.title}</BestFlowerTextView>
                      <BestFlowerTextView>{el.price.toLocaleString()}원</BestFlowerTextView>
                    </InTextView>
                  </BestFlowerContents>
                </BestFlowerContainer>
              )
            })}
          </InSplit>
          <InSplit>
            {best && best.slice(best.length/2).reverse().map((el) => {
              return (
                <BestFlowerContainer
                  key={shortId.generate()}
                  onPress={ () => {props.navigation.navigate("GoodsDetail", {id : el.id} )} }>
                  <BestFlowerContents key={shortId.generate()}>
                    <BestFlowerImageView source={{ uri: el.img }}></BestFlowerImageView>
                    <InTextView>
                      <BestFlowerTextView>{el.title}</BestFlowerTextView>
                      <BestFlowerTextView>{el.price.toLocaleString()}원</BestFlowerTextView>
                    </InTextView>
                  </BestFlowerContents>
                </BestFlowerContainer>
              )
            })}
          </InSplit>


        </SplitView>

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


