import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
// import RecommendedFlower from "../components/RecommendedFlower";
import Payment from "./Payment";
import Bucket from "./Bucket";
import {useSelector, useDispatch} from "react-redux";
import QnAList from "../components/QnAList";
import {loadGoodsInfo} from "../reducers/goods";
import goods from "../sagas/goods";
import QnADetailInfo from "../components/QnADetailInfo";


// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid blue;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid blue;
`;

const DetailInfoOfUpper = styled.View`
  flex: 1;
  border: 2px solid red;
  flex-direction: row;
`;

// upper-left part
const LeftDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 200px;
  height: 200px;
  border: 2px solid skyblue;
`;

const ImageOfUpperLeft = styled.Image`
  flex: 1;
  width:100%;
  height: 100%;
  resize-mode: contain;
  border: 2px solid skyblue;
`;

// upper right part
const RightDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 200px;
  height: 200px;
  border: 2px solid green;
`;

const TextOfUpperRight = styled.Text`
  flex: 1;
  border: 2px solid green;
`;


// bottom components
const DetailInfoOfBottom = styled.View`
  flex: 1;
  border: 2px solid pink;
`;

// info detail part
const InfoDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
  border: 2px solid pink;
`;

const ImageInfoOfBottom = styled.Image`
  flex: 1;
  height: 500px;
  resize-mode: contain;
  border: 2px solid pink;
`;


// // qna detail part
// const QnADetail = styled.ScrollView`
//   flex: 1;
//   height: 500px;
//   border: 5px solid green;
// `;
//
// const QnAheader = styled.View`
//   flex-direction : row;
//   justify-content : space-around;
// `;
//
// const QnAButtonDetailInfoOfBottom = styled.Button`
//   height: 150px;
//   width : 400px;
//   border: 20px solid black;
// `;


// review detail part
const ReviewButtonDetailInfoOfBottom = styled.Button`
  height: 50px;
  border: 2px solid pink;
`;

const ReviewDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
  border: 2px solid pink;
`;

const ViewDetailInfoOfBottom = styled.View`
  flex: 1;
  flex-direction: row;
  border : 4px solid green;
  justify-content:space-around;
  
  
`;

// TODO: position : fixed? -> always stay in right and bottom corner in a mobile view?
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
  console.log("In GOODS_DETAIL, props : ", props);
  const id = props.route.params;
  const goodsInfo = useSelector((state) => state.goods?.goodsInfo);
  console.log("In GOODSDETAIL, goodsInfo : ", goodsInfo);

  const goods_name = goodsInfo?.goods_name;
  const goods_img = goodsInfo?.goods_img;
  const goods_price = goodsInfo?.goods_price;
  const info_img = goodsInfo?.info_img;

  useEffect(() => {
    // TODO: In here, qna states are re-rendering? Or, In render part, qna states are re-rendering? TEST!
    console.log('In GOODSDETAIL, final ID : ', id);
    dispatch(loadGoodsInfo(id));
  }, []);

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
            <Button
              title={"구매하기"}
              onPress={() => {
                return props.navigation.navigate("Payment");
              }}
            />
            <Button
              title={"장바구니 담기"}
              onPress={() => {
                props.navigation.navigate("Bucket");
              }}
            />
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
                <View>
                  <QnADetailInfo prop={props} />

                  {/*  <QnAheader>*/}
                  {/*    <Text>궁금한 점을 남겨주세요.</Text>*/}
                  {/*    <QnAButtonDetailInfoOfBottom*/}
                  {/*      title={"글쓰기"}*/}
                  {/*      onPress={() => {*/}
                  {/*        props.navigation.navigate("QnAPlus");*/}
                  {/*      }}*/}
                  {/*    />*/}
                  {/*  </QnAheader>*/}
                  {/*  {qna && qna.length === 0*/}
                  {/*    ? <Text>등록된 QnA가 없습니다</Text>*/}
                  {/*    : qna.map(el => {*/}
                  {/*      return <QnAList key={el.id} list={el} prop={props}/>;*/}
                  {/*    })*/}
                  {/*  }*/}

                  {/*</QnADetail>*/}
                </View>
              )
              : review
                ?
                (
                  <ReviewDetailInfoOfBottom>
                    <Text>review part</Text>
                    <ReviewButtonDetailInfoOfBottom
                      title={"+"}
                      onPress={() => {
                        props.navigation.navigate("ReviewPlus");
                      }}
                    />
                    {/*  TODO: Should this function(write a text) is a page? or component?*/}
                  </ReviewDetailInfoOfBottom>
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
