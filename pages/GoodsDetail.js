import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from '../components/Nav'
// import RecommendedFlower from "../components/RecommendedFlower";
import Payment from "./Payment";
import Bucket from './Bucket'

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border : 2px solid blue
`;

const Contents = styled.ScrollView`
  flex: 1;
  border : 2px solid blue
`;

const DetailInfoOfUpper = styled.View`
  flex: 1;
  border : 2px solid red;
  flex-direction:row;
`;

const LeftDetailInfoOfUpper = styled.View`
  flex: 1;
  width:200px;
  height:200px;
  border : 2px solid skyblue
`;

const RightDetailInfoOfUpper = styled.View`
  flex: 1;
  width:200px;
  height:200px;
  border : 2px solid green
`;

const DetailInfoOfBottom = styled.View`
  flex:1;
  border: 2px solid pink
`

const ImageDetailInfoOfBottom = styled.ScrollView`
  flex:1;
  height: 500px;
  border: 2px solid pink
`

// const

// function part
const GoodsDetail = (props) => {
  // TODO: changes the state name : const [checkList, setCheckList] = useState(null);

  useEffect(() => {
    // TODO: axios to detail
    // GET?, NOT POST?
    // try {
    //   let test = await axios.post(http://localhost:4000/goods/info, props.route.params.id )
    // } catch (error => console.error(error))
  }, []);

  return (
    <Container>

      <Header props={props}/>

      <Contents>

        <DetailInfoOfUpper>
          <LeftDetailInfoOfUpper></LeftDetailInfoOfUpper>
          <RightDetailInfoOfUpper></RightDetailInfoOfUpper>
        </DetailInfoOfUpper>

        <DetailInfoOfBottom>
          <ImageDetailInfoOfBottom />
        </DetailInfoOfBottom>

        {/*TODO: <Button title={'구매하기'} onPress={() => {props.navigation.navigate("Payment", {id : props.route.params.id} )}}/>*/}
        {/*TODO: <Button title={'장바구니 담기'} onPress={() => {props.navigation.navigate("Bucket", {id : props.route.params.id} )}}/>*/}
        <Button title={'구매하기'} onPress={() => {props.navigation.navigate("Payment")}}/>
        <Button title={'장바구니 담기'} onPress={() => {props.navigation.navigate("Bucket")}}/>

      </Contents>

      <Nav props={props}/>

    </Container>
  );
};

export default GoodsDetail;

//  TODO: There are no the meaning of the flower !
// {
//   goods_name: "Stirng",    DetailInfoOfUpper
//   goods_img: "String",     DetailInfoOfUpper
//   goods_price: "Int",      DetailInfoOfUpper
//   info_img: "Int"          DetailInfoOfBottom
// }
