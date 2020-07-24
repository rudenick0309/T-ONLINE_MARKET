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

// css part
const Container = styled.ScrollView`
  flex: 1;
  border: 3px solid blue
`;

const InContainer = styled.TouchableOpacity`
  border: 3px solid ivory
`;

const Contents = styled.View`
  flex: 1;
  height: 150px;
  border: 3px solid grey;
`;

const ImageView = styled.Image`
  flex:1
  border: 2px solid yellow;
`;

const TextView = styled.Text`
  color : red;
`;

// dummy data part
let goodsList = [];

function Fake() {
  return {
    id: faker.random.number(),
    title: faker.random.word(),
    img: faker.image.imageUrl(),
    contents: faker.name.jobTitle(),
    // not add to price, Use the contents property
  };
}

for (let i = 0; i < 30; i++) {
  goodsList.push(Fake());
}


// function part
const GoodsList = (props) => {
  // TODO: changes the state name : const [checkList, setCheckList] = useState(null);

  useEffect(() => {
    // TODO: axios to list
    // GET?, NOT POST?
    // try {
    //   let test = await axios.post(http://localhost:4000/goods/list, props.route.params.id )
    // } catch (error => console.error(error))
  }, []);

  return (
    <Container>
      <Header props={props}/>
      {goodsList.map((el) => {
        return (
          <InContainer
            onPress={() => {
              props.navigation.navigate("GoodsDetail");
            }}>
            {/*TODO : onPress={ () => {props.navigation.navigate("GoodsDetail", {id : el.id} )} }>*/}
            <Contents>
              <ImageView source={el.img}></ImageView>
              <TextView>{el.contents}</TextView>
            </Contents>
          </InContainer>
        );
      })}
      <Nav props={props}/>
    </Container>
  );
};

export default GoodsList;


// [
//   {
//     goods_id: "Int",
//     goods_name: "Stirng",
//     goods_img: "String",
//     goods_price: "Int",
//   },
//   {
//     goods_id: "Int",
//     goods_name: "Stirng",
//     goods_img: "String",
//     goods_price: "Int",
//   },
// ]
