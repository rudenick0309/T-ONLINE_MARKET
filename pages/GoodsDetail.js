import React, {useState, useEffect, useCallback} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
// import RecommendedFlower from "../components/RecommendedFlower";
import Payment from "./Payment";
import Bucket from "./Bucket";
import {useSelector, useDispatch} from "react-redux";
import QnAList from "../components/QnAList";
import {countDefault, countPlus, countMinus, loadGoodsInfo} from "../reducers/goods";
import goods from "../sagas/goods";
import QnADetailInfo from "../components/QnADetailInfo";
import ReviewDetailInfo from "../components/ReviewDetailInfo";
import AsyncStorage from "@react-native-community/async-storage";




// css part
const Container = styled.SafeAreaView`
  flex: 1;
  
`;

const Contents = styled.ScrollView`
  flex: 1;
  
`;

const DetailInfoOfUpper = styled.View`
  flex: 1;
  
  flex-direction: row;
`;

// upper-left part
const LeftDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 200px;
  height: 200px;
  
`;

const ImageOfUpperLeft = styled.Image`
  flex: 1;
  width:100%;
  height: 100%;
  resize-mode: contain;
`;

// upper right part
const RightDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 200px;
  height: 200px;
 
`;

const TextOfUpperRight = styled.Text`
  flex: 1;
 
`;


// bottom components
const DetailInfoOfBottom = styled.View`
  flex: 1;
  
`;

// info detail part
const InfoDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
  
`;

const ImageInfoOfBottom = styled.Image`
  flex: 1;
  height: 500px;
  resize-mode: contain;
  
`;

// qna detail part
const QnADetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
  border: 5px solid green;
`;

const QnAheader = styled.View`
  flex-direction : row;
  justify-content : space-around;
`;

const QnAButtonDetailInfoOfBottom = styled.Button`
  height: 150px;
  width : 400px;
  border: 20px solid black;
`;

// // review detail part
// const ReviewButtonDetailInfoOfBottom = styled.Button`
//   height: 50px;
//
// `;
//
// const ReviewDetailInfoOfBottom = styled.ScrollView`
//   flex: 1;
//   height: 500px;
//
// `;
//
const ViewDetailInfoOfBottom = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content:space-around;
`;

const ViewRowStyled = styled.View`
  flex-direction : row;
`;


// // TODO: position : fixed? -> always stay in right and bottom corner in a mobile view?
const ButtonDetailInfoOfBottom = styled.Button`

  border: 3px solid red;
`;

// function part
const GoodsDetail = (props) => {
  const [info, setInfo] = useState(true);
  const [userQnA, setQnA] = useState(false);
  const [review, setReview] = useState(false);
  const dispatch = useDispatch();
  const qna = useSelector(state => state.goods?.qna);
  const id = props.route.params;
  const goodsInfo = useSelector((state) => state.goods?.goodsInfo);
  // console.log("In GOODS_DETAIL, props : ", props);
  const goods_name = goodsInfo?.goods_name;
  const goods_img = goodsInfo?.goods_img;
  const goods_price = goodsInfo?.goods_price;
  const info_img = goodsInfo?.info_img;
  const count = useSelector((state) => state.goods?.count);

  const data = {
    count : count,
    id : id,
    goods_name : goods_name,
    goods_img :goods_img,
    goods_price : goods_price,
  }





  console.log("In GOODSDETAIL, count : ", count);

  useEffect(() => {
    // TODO: In here, qna states are re-rendering? Or, In render part, qna states are re-rendering? TEST!
    // console.log("In GOODSDETAIL, final ID : ", id);
    dispatch(countDefault());
    dispatch(loadGoodsInfo(id));
  }, []);

  const onPressPlus = useCallback(() => {
    dispatch(countPlus())
  }, [])

  const onPressMinus = useCallback(() => {
    dispatch(countMinus())
  }, [])

  return (
    <Container>
      <Header props={props}/>

      <Contents>
        <DetailInfoOfUpper>

          <LeftDetailInfoOfUpper>
            <ImageOfUpperLeft source={{uri: goods_img}}/>
          </LeftDetailInfoOfUpper>

          <RightDetailInfoOfUpper>
            <TextOfUpperRight>{goods_name}</TextOfUpperRight>
            <TextOfUpperRight>{goods_price}</TextOfUpperRight>
            <TextOfUpperRight>{"꽃말"}</TextOfUpperRight>

            <ViewRowStyled>
              <Button title={"수량 감소"} onPress={onPressMinus}/>
              <Text>{count}</Text>
              <Button title={"수량 증가"} onPress={onPressPlus}/>
            </ViewRowStyled>

            <ViewRowStyled>
              <Button
                title={"구매하기"}
                onPress={() => {
                  return props.navigation.navigate("Payment");
                }}
              />
              <Button
                title={"장바구니 담기"}
                onPress={() => {
                  props.navigation.navigate("Bucket", data);
                }}
              />
            </ViewRowStyled>
          </RightDetailInfoOfUpper>
        </DetailInfoOfUpper>

        {/* Distinct Line */}
        <DetailInfoOfBottom>
          <ViewDetailInfoOfBottom>
            <ButtonDetailInfoOfBottom
              title={"info"}
              color={"palevioletred"}
              onPress={() => {
                setQnA(false);
                setInfo(true);
                setReview(false);
              }}
            />
            <ButtonDetailInfoOfBottom
              title={"userQnA"}
              color={"palevioletred"}
              onPress={() => {
                setQnA(true);
                setInfo(false);
                setReview(false);
              }}
            />
            <ButtonDetailInfoOfBottom
              title={"review"}
              color={"palevioletred"}
              onPress={() => {
                setQnA(false);
                setInfo(false);
                setReview(true);
              }}
            />
          </ViewDetailInfoOfBottom>

          {info
            ?
            (
              <InfoDetailInfoOfBottom>
                <ImageInfoOfBottom source={{uri: info_img}}/>
              </InfoDetailInfoOfBottom>
            )
            : userQnA
              ?
              (
                <QnADetailInfo prop={props}/>
              )
              : review
                ?

                (
                  <ReviewDetailInfo prop={props}/>

                )
                :
                (
                  <Text>empty part</Text>
                )}
        </DetailInfoOfBottom>

      </Contents>

      <Nav props={props}/>
    </Container>
  );
};

export default GoodsDetail;
