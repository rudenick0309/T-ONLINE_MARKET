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
import SaleInfo from '../components/saleInfo';

// css part
const Container = styled.ScrollView`
  flex: 1;
`;

const InContainer = styled.TouchableOpacity`
  flex: 1;
`;

const Contents = styled.View`
  height: 300px;
`;

const TextStyled = styled.Text`
  margin-top: 20px;
`;

const ImageView = styled.Image`
  flex: 1;

  resize-mode: contain;
  border: 2px solid yellow;
`;

const TextView = styled.Text`
  color: red;
`;
const ButtonDetailInfoOfBottom = styled.Button`
  border: 3px solid red;
`;
const OnsaleDetailInfoOfBottom = styled.ScrollView`
  flex: 1;
  height: 500px;
`;

const ImageInfoOfBottom = styled.Image`
  flex: 1;
  height: 500px;
  resize-mode: contain;
`;

const MypageSeller = (props) => {
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);
  const [onsale, setOnsale] = useState(true);
  const [sale, setSale] = useState(false);

  const loginDone = useSelector((state) => state.login?.loginDone);
  const userInfo = useSelector((state) => state.login.data?.userInfo);
  const message = useSelector((state) => state.login.data?.message);
  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);
  console.log('login done', loginDone);
  console.log('user', userInfo);
  if (loginDone === true && message) {
    return (
      <Container>
        <Header props={props} />
        {userInfo.user_admission ? (
          <Contents>
            <TextStyled>님 환영합니다</TextStyled>

            <ButtonDetailInfoOfBottom
              title={'판매'}
              color={'palevioletred'}
              onPress={() => {
                setOnsale(true);
                setSale(false);
              }}
            />
            <ButtonDetailInfoOfBottom
              title={'판매내역'}
              color={'palevioletred'}
              onPress={() => {
                setOnsale(false);
                setSale(true);
              }}
            />
            {onsale ? (
              <SaleInfo prop={props} />
            ) : sale ? (
              <SaleInfo prop={props} />
            ) : (
              <Text>empty part</Text>
            )}
            <TextStyled>구매자용 마이페이지</TextStyled>
            <Button
              title="구매자용 마이페이지"
              onPress={() => {
                props.navigation.navigate('Mypage');
              }}
            />
          </Contents>
        ) : (
          <Contents>
            <TextStyled>관리자 승인이 필요합니다</TextStyled>
          </Contents>
        )}

        <Nav props={props} />
      </Container>
    );
  }
};

export default MypageSeller;
