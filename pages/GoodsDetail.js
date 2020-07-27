import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
// import RecommendedFlower from "../components/RecommendedFlower";
import Payment from './Payment';
import Bucket from './Bucket';

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
  border: 2px solid pink;
`;

const QnAButtonDetailInfoOfBottom = styled.Button`
  height: 50px;
  border: 2px solid pink;
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
  const [qna, setQna] = useState(false);
  const [review, setReview] = useState(false);

  useEffect(() => {
    // TODO: axios to detail
    // GET?, NOT POST?
    // try {
    //   let test = await axios.post(http://localhost:4000/goods/info, props.route.params.id )
    // } catch (error => console.error(error))
  }, []);

  return (
    <Container>
      <Header props={props} />

      <Contents>
        <DetailInfoOfUpper>
          <LeftDetailInfoOfUpper />
          <RightDetailInfoOfUpper />
        </DetailInfoOfUpper>

        {/* Distinct Line */}
        <DetailInfoOfBottom>
          <ViewDetailInfoOfBottom>
            <ButtonDetailInfoOfBottom
              title={'info'}
              onPress={() => {
                setQna(false);
                setInfo(true);
                setReview(false);
              }}
            />
            <ButtonDetailInfoOfBottom
              title={'qna'}
              onPress={() => {
                setQna(true);
                setInfo(false);
                setReview(false);
              }}
            />
            <ButtonDetailInfoOfBottom
              title={'review'}
              onPress={() => {
                setQna(false);
                setInfo(false);
                setReview(true);
              }}
            />
          </ViewDetailInfoOfBottom>

          {info ? (
            <InfoDetailInfoOfBottom>
              <Text>info part</Text>
            </InfoDetailInfoOfBottom>
          ) : qna ? (
            <View>
              <QnADetailInfoOfBottom>
                <Text>qna part</Text>
                {/*  TODO: Should this function(write a text) is a page? or component?*/}
                <QnAButtonDetailInfoOfBottom
                  title={'+'}
                  onPress={() => {
                    props.navigation.navigate('QnAPlus');
                  }}
                />
              </QnADetailInfoOfBottom>
            </View>
          ) : review ? (
            <ReviewDetailInfoOfBottom>
              <Text>review part</Text>
              <ReviewButtonDetailInfoOfBottom
                title={'+'}
                onPress={() => {
                  props.navigation.navigate('ReviewPlus');
                }}
              />
              {/*  TODO: Should this function(write a text) is a page? or component?*/}
            </ReviewDetailInfoOfBottom>
          ) : (
            <Text>empty part</Text>
          )}
        </DetailInfoOfBottom>

        {/* Distinct Line */}
        {/*TODO: <Button title={'구매하기'} onPress={() => {props.navigation.navigate("Payment", {id : props.route.params.id} )}}/>*/}
        {/*TODO: <Button title={'장바구니 담기'} onPress={() => {props.navigation.navigate("Bucket", {id : props.route.params.id} )}}/>*/}
        <Button
          title={'구매하기'}
          onPress={() => {
            return props.navigation.navigate('Payment');
          }}
        />
        <Button
          title={'장바구니 담기'}
          onPress={() => {
            props.navigation.navigate('Bucket');
          }}
        />
      </Contents>

      <Nav props={props} />
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
