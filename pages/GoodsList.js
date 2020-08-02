import React, {useState, useEffect} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
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
const Container = styled.ScrollView`
  flex: 1;
  
`;

const InContainer = styled.TouchableOpacity`
  flex:1;
  
`;

const Contents = styled.View`
  height: 300px;
  
`;

const ImageView = styled.Image`
  flex:1;
  
  resize-mode: contain;
  border: 2px solid yellow;
`;

const TextView = styled.Text`
  color : red;
`;

// function part
const GoodsList = (props) => {
  console.log("In GOODSLIST, props : ", props);
  const dispatch = useDispatch();
  const goodsList = useSelector(state => state.goods?.goodsList);
  console.log("In GOODSLIST, goodslist : ", goodsList);
  const filterValue = props.route.params?.filter;

  // needs modify why not conclded in GoodsList.
  useEffect(() => {
    // TODO: axios to list
    dispatch(loadGoodsList(filterValue));

  }, []);

  return (
    <Container>
      <Header props={props}/>

      {goodsList.length !== 0 && goodsList.map((el) => {
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
