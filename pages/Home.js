import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';
import Nav from '../components/Nav';
import faker from 'faker';
// import RecommendedFlower from "../components/RecommendedFlower";
import GoodsDetail from './GoodsDetail';
import {
  RecommendedFlowerContainer,
  RecommendedFlowerContents,
  RecommendedFlowerImageView,
  RecommendedFlowerTextView,
} from '../components/RecommendedFlower';
import {
  BestFlowerContainer,
  BestFlowerContents,
  BestFlowerImageView,
  BestFlowerTextView,
} from '../components/BestFlower';
import {useDispatch, useSelector} from 'react-redux';
import {homeToLoad} from '../reducers/goods';
// import CaroseulTest from "./CaroseulTest";
import Carousel from 'react-native-carousel-view';
import ViewPager from '@react-native-community/viewpager';
import Splash from './Splash';

// TODO: import {ActivityIndicator} from "react-native";    This is a Ellipse Loading image, I will use this later.

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const TextStyled = styled.Text`
  margin-top: 20px;
`;

const ViewPagerStyled = styled(ViewPager)`
  height: 300px;
`;
const TextPagerStyled = styled.Text`
  height: 200px;
  font-size: 50px;
`;
const TouchablePagerStyled = styled.TouchableOpacity`
  height: 200px;
`;

// function part
const Home = (props) => {
  // later, under state are changed in api res.

  const dispatch = useDispatch();
  const home = useSelector((state) => state.goods?.home);
  const recommendation = useSelector(
    (state) => state.goods.home?.recommendation,
  );
  const best = useSelector((state) => state.goods.home?.best);
  console.log('In HOME COMPONENT, home : ', home);
  const homeLoading = useSelector((state) => state.goods?.homeLoading);
  // console.log("In HOME COMPONENT, recommendation : ", recommendation);
  // console.log("In HOME COMPONENT, best : ", best);

  // useEffect(() => {

  //   // console.log("In HOME, useEffect, home : ", home);
  //   // recommendation = home.recommendation;
  //   // best = home.best;
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      dispatch(homeToLoad());
    }, 2000);
  }, []);

  console.log('homeloading', homeLoading);
  console.log('home home', home);

  if (home.length === 0) {
    return <Splash />;
  }
  return (
    // <View>
    //   {homeLoading && home.length === 0 ? (
    //     <Splash />
    //   ) : (
    <Container>
      <Header props={props} />

      <Contents>
        {/*  TODO: <Search></Search>*/}

        <ViewPagerStyled initialPage={0}>
          {recommendation &&
            recommendation.map((el) => {
              return (
                <View key={el.id}>
                  <RecommendedFlowerContainer
                    onPress={() => {
                      props.navigation.navigate('GoodsList', {
                        id: el.id,
                        filter: el.filter,
                      });
                    }}>
                    <RecommendedFlowerContents>
                      <RecommendedFlowerImageView source={{uri: el.img}} />
                      <RecommendedFlowerTextView>
                        {el.title}
                      </RecommendedFlowerTextView>
                    </RecommendedFlowerContents>
                  </RecommendedFlowerContainer>
                </View>
              );
            })}
        </ViewPagerStyled>

        <TextStyled>Best Seller</TextStyled>

        {best &&
          best.map((el) => {
            return (
              <BestFlowerContainer
                onPress={() => {
                  props.navigation.navigate('GoodsDetail', {id: el.id});
                }}>
                <BestFlowerContents>
                  <BestFlowerImageView source={{uri: el.img}} />
                  <BestFlowerTextView>{el.title}</BestFlowerTextView>
                </BestFlowerContents>
              </BestFlowerContainer>
            );
          })}
      </Contents>

      <Nav props={props} />
    </Container>
    //   )}
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    borderColor: 'green',
    // border
    borderWidth: 100,
    borderStyle: 'solid',
  },
});
