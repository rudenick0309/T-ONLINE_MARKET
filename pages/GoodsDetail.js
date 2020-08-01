import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
// import RecommendedFlower from "../components/RecommendedFlower";
import Payment from "./Payment";
import Bucket from "./Bucket";
import {useSelector} from "react-redux";
import QnAList from "../components/QnAList";

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

const LeftDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 200px;
  height: 200px;
  border: 2px solid skyblue;
`;

const RightDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 200px;
  height: 200px;
  border: 2px solid green;
`;

const DetailInfoOfBottom = styled.View`
  flex: 1;
  border: 2px solid pink;
`;

const InfoDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
  border: 2px solid pink;
`;

const QnADetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
  border: 5px solid green;
`;

const QnAheader = styled.View`
  flex-direction : row;
  justify-content : space-around;
`

const QnAButtonDetailInfoOfBottom = styled.Button`
  height: 150px;
  width : 400px;
  border: 20px solid black;
`;

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
  flex-direction: row;
  width: 50px;
  flex: 1;
`;

// TODO: position : fixed? -> always stay in right and bottom corner in a mobile view?
const ButtonDetailInfoOfBottom = styled.Button`
  width: 200px;
  border: 3px solid black;
`;

// function part
const GoodsDetail = (props) => {
  const [info, setInfo] = useState(true);
  const [userQnA, setQnA] = useState(false);
  const [review, setReview] = useState(false);
  const qna = useSelector(state => state.goods?.qna);
  // console.log('In GoodsDetail, qna : ', qna)

  useEffect(() => {
    // TODO: In here, qna states are re-rendering? Or, In render part, qna states are re-rendering? TEST!

  }, []);

  return (
    <Container>
      <Header props={props}/>

      <Contents>
        <DetailInfoOfUpper>
          <LeftDetailInfoOfUpper/>
          <RightDetailInfoOfUpper/>
        </DetailInfoOfUpper>

        {/* Distinct Line */}
        <DetailInfoOfBottom>
          <ViewDetailInfoOfBottom>
            <ButtonDetailInfoOfBottom
              title={"info"}
              onPress={() => {
                setQnA(false);
                setInfo(true);
                setReview(false);
              }}
            />
            <ButtonDetailInfoOfBottom
              title={"userQnA"}
              onPress={() => {
                setQnA(true);
                setInfo(false);
                setReview(false);
              }}
            />
            <ButtonDetailInfoOfBottom
              title={"review"}
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
                <Text>info part</Text>
              </InfoDetailInfoOfBottom>
            )
            : userQnA
              ?
              (
                <View>
                  <QnADetailInfoOfBottom>
                    <QnAheader>
                      <Text>궁금한 점을 남겨주세요.</Text>
                      <QnAButtonDetailInfoOfBottom
                        title={"글쓰기"}
                        onPress={() => {
                          props.navigation.navigate("QnAPlus");
                        }}
                      />
                    </QnAheader>
                    {qna.length === 0
                      ? <Text>등록된 QnA가 없습니다</Text>
                      : qna.map(el => {
                        return <QnAList key={el.id} list={el} prop={props}/>;
                      })
                    }

                  </QnADetailInfoOfBottom>
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

        {/* Distinct Line */}
        {/*TODO: <Button title={'구매하기'} onPress={() => {props.navigation.navigate("Payment", {id : props.route.params.id} )}}/>*/}
        {/*TODO: <Button title={'장바구니 담기'} onPress={() => {props.navigation.navigate("Bucket", {id : props.route.params.id} )}}/>*/}
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
