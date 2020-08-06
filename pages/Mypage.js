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
  border: 2px solid green;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid green;
`;

const TextStyled = styled.Text`
  margin-top: 20px;
`;

let OrderData = [];

// function part
const Mypage = (props) => {
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);
  const dispatch = useDispatch();
  const loginDone = useSelector((state) => state.login?.loginDone);
  const userInfo = useSelector((state) => state.login.data?.userInfo);
  const data = useSelector((state) => state.login?.data);
  const order_list = useSelector((state) => state.orders?.order_list);
  const filterValue = useSelector((state) => state.login.data?.user_type);

  useEffect(() => {
    // TODO: take the bucket list to axios
    dispatch(loadOrder(filterValue));
  }, []);

  console.log('login done', loginDone);
  console.log('user', userInfo);
  // if (loginDone === true) {
  return (
    <Container>
      <Header props={props} />
      <Contents>
        {loginDone ? (
          <View>
            <TextStyled>
              {data === undefined ? '로그아웃' : userInfo.username}님 환영합니다
            </TextStyled>
            <Button
              title="내 정보 수정하기"
              onPress={() => {
                props.navigation.navigate('Myinfocheck');
              }}
            />
            <TextStyled>orderList</TextStyled>

            <OrderContainer
              // onPress={ () => {props.navigation.navigate("GoodsList")} }>
              onPress={() => {
                props.navigation.navigate('GoodsList', {id: OrderData.id});
              }}>
              <OrderContents>
                <OrderImageView source={OrderData.img}></OrderImageView>
                <OrderTextView>{OrderData.contents}</OrderTextView>
              </OrderContents>
            </OrderContainer>
          </View>
        ) : (
          <Contents>
            <Text>로그인을 하십시오</Text>
          </Contents>
        )}
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default Mypage;

{
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
}
