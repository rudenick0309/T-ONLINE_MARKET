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
import {useSelector} from 'react-redux';

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

  const loginDone = useSelector((state) => state.login?.loginDone);
  const userInfo = useSelector((state) => state.login.data?.userInfo);

  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);
  console.log('login done', loginDone);
  console.log('user', userInfo);
  if (loginDone === true) {
    return (
      <Container>
        <Header props={props} />
        <Contents>
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

          <TextStyled>정보수정</TextStyled>
          <Button
            title="내 정보 수정하기"
            onPress={() => {
              props.navigation.navigate('Myinfocheck');
            }}
          />
        </Contents>
        <Nav props={props} />
      </Container>
    );
  } else {
    return (
      <Container>
        <Header props={props} />
        <Contents>
          <Text>로그인을 하십시오</Text>
        </Contents>
        <Nav props={props} />
      </Container>
    );
  }
};

export default Mypage;
