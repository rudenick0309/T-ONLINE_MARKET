import React, {useState, useEffect} from "react";
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import faker from "faker";
import {
  BestFlowerContainer,
  BestFlowerContents,
  BestFlowerImageView,
  BestFlowerTextView
} from "../components/BestFlower";
import {useDispatch, useSelector} from "react-redux";
import {loadGoodsList} from "../reducers/goods";

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const InContainer = styled.TouchableOpacity`
  flex:1;
  margin-top:30px;
`;

const Contents = styled.View`
  height: 500px;
  border-radius: 30px;
`;

const ImageView = styled.Image`
  flex:1;
  background-color:white;
  resize-mode: contain;
`;

const TextView = styled.Text`
  color : #464e46;
`;

// function part
const GoodsList = (props) => {
  console.log("In GOODSLIST, props : ", props);
  const dispatch = useDispatch();
  const goodsList = useSelector(state => state.goods?.goodsList[0]);
  console.log("In GOODSLIST, goodslist : ", goodsList);
  const filterValue = props.route.params?.filter;

  // needs modify why not conclded in GoodsList.
  useEffect(() => {
    // TODO: axios to list
    let data = {
      keyword: null,
      filter: filterValue,
    }
    dispatch(loadGoodsList(data));
  }, []);

  return (
    <Container>
      <Header props={props}/>

      {/*{goodsList.length !== 0 && goodsList.map((el) => {*/}
      {goodsList && goodsList.map((el) => {
        return (
          // <Contents>
            <InContainer
              key={el.goods_id}
              onPress={() => {
                // props.navigation.navigate("GoodsDetail", {goods_id: el.goods_id});
                props.navigation.navigate("GoodsDetail", {id: el.goods_id});
              }}>
              {/*TODO : onPress={ () => {props.navigation.navigate("GoodsDetail", {id : el.id} )} }>*/}
              <Contents>
                <ImageView source={{uri: el.goods_img}}></ImageView>
                <TextView>{el.goods_name}</TextView>
                <TextView>{el.goods_price}</TextView>
              </Contents>
            </InContainer>
          // </Contents>
        );
      })}

      <Nav props={props}/>
    </Container>
  );
};

export default GoodsList;
