import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {
  OrderContainer,
  OrderContents,
  OrderImageView,
  OrderTextView,
} from '../components/Orderitem';
import {useSelector, useDispatch} from 'react-redux';
import {loadOrder} from '../reducers/orders';

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const InContainer = styled.TouchableOpacity`
  flex: 1;
  margin-top: 30px;
`;

const Contents = styled.View`
  flex: 1;
  height: 550px;
  border-radius: 30px;
`;

const ImageOfUpperLeft = styled.Image`
  resize-mode: contain;
  flex: 1;
  width: 100px;
`;

const ImageViewStyled = styled.View`
  margin-left: 30px;
  margin-bottom: 13px;
`;

const TextViewStyled = styled.View`
  margin-top: 20px;
  padding-right: 30px;
  align-items: flex-end;
`;

const TextStyled = styled.Text`
  font-size: 15px;
  margin-bottom: 3px;
`;

const InButton = styled.Button`
  background-color: black;
`;

const ViewRowStyled = styled.View`
  flex-direction: row;
  text-align: center;
  margin: 23px 0px;
  justify-content: center;
  align-items: center;
`;

let OrderData = [];

// function part
const Mypage = (props) => {
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);
  const dispatch = useDispatch();
  const loginDone = useSelector((state) => state.login?.loginDone);
  const userInfo = useSelector((state) => state.login.data?.userInfo);
  const data = useSelector((state) => state.login?.data);
  const orderList = useSelector((state) => state.orders?.orderList);
  const order_list = useSelector((state) => state.orders?.order_list);
  const filterValue = props.route.params?.filter;

  // useEffect(() => {
  //   if (orderList && orderList.length > 0) {
  //     orderList = [];
  //   }
  //   // }, [searchList]);
  // }, [orderList]);

  useEffect(() => {
    // TODO: take the bucket list to axios

    dispatch(loadOrder());
  }, []);

  console.log('login done', loginDone);
  console.log('user', userInfo);
  console.log('order data 11', orderList);
  return (
    <Container>
      <Header props={props} />
      <Contents>
        {loginDone ? (
          <View>
            <TextStyled>
              {data === undefined ? '로그아웃' : userInfo.username}님 환영합니다
            </TextStyled>
            <ViewRowStyled>
              <InButton
                title="내 정보 수정하기"
                color="#464e46"
                onPress={() => {
                  props.navigation.navigate('Myinfocheck');
                }}
              />
            </ViewRowStyled>
            <TextStyled>orderList</TextStyled>

            {orderList &&
              orderList.map((el) => {
                return (
                  // <Contents>
                  <React.Fragment>
                    <ImageViewStyled>
                      <ImageOfUpperLeft source={{uri: el.goods_img}} />
                    </ImageViewStyled>

                    <TextViewStyled>
                      <TextStyled>{el.goods_name}</TextStyled>
                      <TextStyled>{el.goods_price}</TextStyled>
                      <TextStyled>수량 : {el.goods_quantity}</TextStyled>
                      <TextStyled>주문날짜 {el.order_date}</TextStyled>
                    </TextViewStyled>
                  </React.Fragment>
                  // </Contents>
                );
              })}
          </View>
        ) : (
          <Contents>
            <Text>로그인을 하십시오</Text>
            <ViewRowStyled>
              <Button
                title="홈으로"
                color="#464e46"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
            </ViewRowStyled>
          </Contents>
        )}
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Mypage;

/* {order_list.length !== 0 &&
              order_list.map((el) => {
                return (
                  <Contents>
                    <InContainer
                      key={el.order_id}
                      onPress={() => {
                        // props.navigation.navigate("GoodsDetail", {goods_id: el.goods_id});
                        props.navigation.navigate('GoodsDetail', {
                          id: el.order_id,
                        });
                      }}>
                      <Contents>
                        <ImageView source={{uri: el.goods_img}}></ImageView>
                        <TextView>{el.goods_name}</TextView>
                        <TextView>{el.goods_price}</TextView>
                      </Contents>
                    </InContainer>
                    <Button title="배송조회"></Button>
                  </Contents>
                );
              })}  */

/* <InContainer key={el.order_id}>
                    <ImageOfUpperLeft>
                      <ImageViewStyled
                        source={{uri: el.goods_img}}></ImageViewStyled>
                    </ImageOfUpperLeft>
                    <TextViewStyled>{el.goods_name}</TextViewStyled>
                    <TextViewStyled>{el.goods_price}</TextViewStyled>
                  </InContainer> */
