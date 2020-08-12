import React, {useRef, useState, useEffect, useCallback} from "react";
import {StyleSheet, TouchableOpacity, Text, View, Button} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
// import RecommendedFlower from "../components/RecommendedFlower";
import Payment from "./Payment";
import Bucket from "./Bucket";
import {useSelector, useDispatch} from "react-redux";
import QnAList from "../components/QnAList";
import {countDefault, countPlus, countMinus, loadGoodsInfo, loadToQuestion} from "../reducers/goods";
import goods from "../sagas/goods";
import QnADetailInfo from "../components/QnADetailInfo";
import ReviewDetailInfo from "../components/ReviewDetailInfo";
import AsyncStorage from "@react-native-community/async-storage";
// import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
// import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/Ionicons";
import * as Colors from "react-native-svg";
// import {Fonts} from "../src/fonts/Fonts";
import AutoHeightImage from 'react-native-auto-height-image';

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const DetailInfoOfUpper = styled.View`
  flex: 1;
`;

// upper-left part
const LeftDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 100%;
  height: 450px;
`;

const ImageOfUpperLeft = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

// upper right part
const RightDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 100%;
  height: 200px;
  flex-direction:row;
  margin-top: 50px;
`;

const TextOfUpperRight = styled.Text`
  font-family: 'DancingScript-Regular';
  
  font-size: 16px;
  margin-top:23px;
`;

// bottom components
const DetailInfoOfBottom = styled.View`
  flex: 1;
  margin-top: 30px;
`;

// info detail part
const InfoDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
`;

const ViewDetailInfoOfBottom = styled.View`
flex:1;
  flex-direction:row;
  margin-bottom: 30px;
  height: 50px;
  justify-content: space-between;
  background-color : #cdb30c;
  justify-content:center;
  align-items:center;
  text-align:center;
`;

// TODO: position : fixed? -> always stay in right and bottom corner in a mobile view?
const ButtonDetailInfoOfBottom = styled.TouchableOpacity`
  flex:1
  justify-content:center;
  align-items:center;
  flex-direction:row;
`;

const TextInTouchableOpacityStyled = styled.Text`
  color:white;
  font-size:20px;
  flex:1;
  width:100%;
  height: 100%;
  text-align:center;
  letter-spacing:3px;
`

const ViewRowStyled = styled.View`
  flex-direction : row;
  text-align: center;
  margin: 23px 0px;
  justify-content: center;
  align-items:center;
`;

const ViewNavRowStyled = styled.View`
  width: 100%;
`;


const ButtonNavStyled = styled.Button`
  background-color:black;
`;

const TouchableStyled = styled.TouchableOpacity`
  border: 1px solid grey;
`;

const ViewMiddleStyled = styled.View`
  flex-direction:row;
  justify-content: space-around;
  flex:1;
`;

const TouchableText = styled.Text`
  margin: 0px 10px;
  text-align: center;
  flex-direction: row;
  justify-content:center;
`

const QuantityOfText = styled.Text`
  margin-right: 10px;
`

// function part
const GoodsDetail = (props) => {
  const [info, setInfo] = useState(true);
  const [userQnA, setQnA] = useState(false);
  const [review, setReview] = useState(false);
  const dispatch = useDispatch();
  const qna = useSelector((state) => state.goods?.qna);
  const id = props.route.params;
  const goodsInfo = useSelector((state) => state.goods?.goodsInfo);
  // console.log("In GOODS_DETAIL, goodsInfo : ", goodsInfo);
  const goods_name = goodsInfo?.goods_name;
  const goods_img = goodsInfo?.goods_img;
  var goods_price = goodsInfo?.goods_price;
  const info_img = goodsInfo?.info_img;
  const language = goodsInfo?.flower_language;
  const count = useSelector((state) => state.goods?.count);
  // const scrollRef = useRef();
 // goods_price = goods_price.toLocaleString();
  const data = {
    count: count,
    id: id,
    goods_name: goods_name,
    goods_img: goods_img,
    goods_price: goods_price,
  };

  // console.log("In GOODSDETAIL, count : ", count);

  useEffect(() => {
    // TODO: In here, qna states are re-rendering? Or, In render part, qna states are re-rendering? TEST!

    dispatch(countDefault());
    dispatch(loadGoodsInfo(id));
  }, []);

  const onPressPlus = useCallback(() => {
    dispatch(countPlus());
  }, []);

  const onPressMinus = useCallback(() => {
    dispatch(countMinus());
  }, []);

  return (
    <Container>
      <Header props={props} />

      <Contents>
        <DetailInfoOfUpper>
          <LeftDetailInfoOfUpper>
            <ImageOfUpperLeft source={{uri: goods_img}} />
          </LeftDetailInfoOfUpper>

          <RightDetailInfoOfUpper>

            <ViewMiddleStyled style={styles.border} >

              <View>
                <TextOfUpperRight>이름 : {goods_name}</TextOfUpperRight>
                <TextOfUpperRight>가격 : {goods_price}원</TextOfUpperRight>
                <TextOfUpperRight>꽃말 : {language}</TextOfUpperRight>
              </View>

              <View>
                <ViewRowStyled>

                  <QuantityOfText>수량</QuantityOfText>

                  <TouchableStyled onPress={onPressMinus}>
                    <Icon name="ios-arrow-down-outline" color={"black"} size={30}></Icon>
                  </TouchableStyled>

                  <TouchableText>{count}</TouchableText>
                  {/*<Button title={"수량 증가"} onPress={onPressPlus}/>*/}

                  <TouchableStyled onPress={onPressPlus}>
                    <Icon name="ios-arrow-up-outline" color={"black"} size={30}></Icon>
                  </TouchableStyled>

                </ViewRowStyled>

                <ViewNavRowStyled>
                  <ButtonNavStyled
                    title={"담기"}
                    color="#464e46"
                    onPress={() => {
                      props.navigation.navigate("Bucket", data);
                    }}
                  />
                </ViewNavRowStyled>
              </View>

            </ViewMiddleStyled>

          </RightDetailInfoOfUpper>

        </DetailInfoOfUpper>

        {/* Distinct Line */}
        <DetailInfoOfBottom>
          <ViewDetailInfoOfBottom>
            <ButtonDetailInfoOfBottom
              color={"#535204"}
              onPress={() => {
                setQnA(false);
                setInfo(true);
                setReview(false);
              }}
            >
              <TextInTouchableOpacityStyled>
                info
              </TextInTouchableOpacityStyled>
            </ButtonDetailInfoOfBottom>

            <ButtonDetailInfoOfBottom
              title={"userQnA"}
              flex={1}
              color={"#535204"}
              onPress={() => {
                setQnA(true);
                setInfo(false);
                setReview(false);
              }}
            >
              <TextInTouchableOpacityStyled>
                userQnA
              </TextInTouchableOpacityStyled>
            </ButtonDetailInfoOfBottom>

            <ButtonDetailInfoOfBottom
              title={"review"}
              color={"#535204"}
              onPress={() => {
                setQnA(false);
                setInfo(false);
                setReview(true);
              }}
            >
              <TextInTouchableOpacityStyled>
                review
              </TextInTouchableOpacityStyled>
            </ButtonDetailInfoOfBottom>
          </ViewDetailInfoOfBottom>

          {info
            ?
            (
              <InfoDetailInfoOfBottom>

                <AutoHeightImage
                  width={400}
                  source={{uri: info_img}}
                />
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

      {!info || !userQnA || !review
        ?
        (
          <ViewNavRowStyled>
            <ButtonNavStyled
              title={"구매하기"}
              color="#464e46"
              onPress={() => {
                return props.navigation.navigate("Payment");
              }}
            />
          </ViewNavRowStyled>
        )
        : (<Nav props={props}/>)
      }

    </Container>
  );
};

export default GoodsDetail;

//
const styles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    margin: 10,
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
})

