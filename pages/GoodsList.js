import React, {useState, useEffect} from "react";
import {ScrollView, StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from "react-native";
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
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSuitcaseRolling} from "@fortawesome/free-solid-svg-icons";



// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const InContainer = styled.TouchableOpacity`
  flex:1;
  height: 500px;
  margin-top:30px;  
  margin-bottom: 30px;
  
  border-bottom-width:1px
  border-color:grey;
  border-radius:30px
`;

const Contents = styled.View`
  flex:1
  border-radius: 30px;
  justify-content: center;
  align-items:center;
  
`;

const ImageView = styled.Image`
  flex:1;  
  height: 400px;
  width:450px;
  background-color:white;
  resize-mode: contain;
  border-radius:10px;
`;

const TextView1 = styled.Text`
  font-size:20px;
  color : #464e46;
`;

// position:absolute;
const TextView2 = styled.Text`
  font-size:20px;
  color : #464e46;
`;

const InContents = styled.ScrollView`
  flex:1;
  
`;

// position:absolute;
// bottom : 20px;
// align-items:center;
const ViewStyled = styled.View`
  flex-direction:row;
  justify-content: space-around;
  width:100%
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color:#464e46
  opacity:1
  flex:1
`

const TouchableOpacityStyled = styled.TouchableOpacity`
  width:100px;
  height:100px;
  justify-content:center;
  align-items: center; 
`

const BottomView = styled.View`
  justify-content:center;
  margin-left:40px;
`

// function part
const GoodsList = (props) => {
  console.log("In GOODSLIST, props : ", props);
  const dispatch = useDispatch();
  var goodsList = useSelector(state => state.goods?.goodsList[0]);
  console.log("In GoodsList, goodsList : ", goodsList);

  const name = goodsList?.goods_name;
  const id = goodsList?.goods_id;
  const img = goodsList?.goods_img;
  const price = goodsList?.goods_price;

  const data = {
    count: 1,
    id: id,
    goods_name: name,
    goods_img: img,
    goods_price: price,
  };

  const filterValue = props.route.params?.filter;

  useEffect(() => {
    if (goodsList && goodsList.length > 0) {
      goodsList = [];
    }
  }, [goodsList]);

  useEffect(() => {
    dispatch(loadGoodsList(filterValue));
  }, []);

  return (
    <Container>
      <Header props={props}/>

      <InContents>
        {goodsList && goodsList.reverse().map((el) => {
          return (

            <InContainer
              key={el.goods_id}
              onPress={() => {
                props.navigation.navigate("GoodsDetail", {id: el.goods_id});
              }}>

              <Contents>
                <ImageView source={{uri: el.goods_img}}></ImageView>

                <ViewStyled>

                  <BottomView>
                    <TextView1>{el.goods_name}</TextView1>
                    <TextView2>{el.goods_price.toLocaleString()}원</TextView2>
                  </BottomView>

                  <View>
                    <TouchableOpacityStyled onPress={() => {
                      props.navigation.navigate("Bucket",
                        {
                          count: 1,
                          id: el.goods_id,
                          goods_name: el.goods_name,
                          goods_price: el.goods_price,
                          goods_img: el.goods_img
                        });
                    }}>
                      <FontAwesomeIconStyled icon={faSuitcaseRolling} size={30} />
                    </TouchableOpacityStyled>
                  </View>

                </ViewStyled>
              </Contents>
            </InContainer>

          );
        })}

      </InContents>

      <Nav props={props}/>
    </Container>
  );
};

export default GoodsList;
