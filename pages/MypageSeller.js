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
import OnsaleInfo from '../components/onsaleInfo';

// css part
const Container = styled.ScrollView`
  flex: 1;
`;

const InContainer = styled.TouchableOpacity`
  flex: 1;
`;

const Contents = styled.View`
  flex: 1;
  height: 560px;
`;

const TextStyled = styled.Text`
  margin-top: 20px;
`;

const ImageView = styled.Image`
  flex: 1;

  resize-mode: contain;
  border: 2px solid yellow;
`;
const ViewRowStyled = styled.View`
  flex-direction: row;
  text-align: center;
  margin: 23px 0px;
  justify-content: center;
  align-items: center;
`;

const TextView = styled.Text`
  color: red;
`;
const ButtonDetailInfoOfBottom = styled.TouchableOpacity`
  flex:1
  justify-content:center;
  align-items:center;
  flex-direction:row;
`;

const TextInTouchableOpacityStyled = styled.Text`
  color: white;
  font-size: 20px;
  flex: 1;
  width: 100%;
  height: 10%;
  text-align: center;
  letter-spacing: 3px;
`;

const ViewDetailInfoOfBottom = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 30px;
  height: 10px;
  justify-content: space-between;
  background-color: #464e46;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  if (loginDone) {
    return (
      <Container>
        <Header props={props} />

        {userInfo && userInfo.user_admission ? (
          <Contents>
            <TextStyled>
              {userInfo ? userInfo.username : ''}님 환영합니다
            </TextStyled>
            <ViewDetailInfoOfBottom>
              <ButtonDetailInfoOfBottom
                title={'판매'}
                color="#464e46"
                onPress={() => {
                  setOnsale(true);
                  setSale(false);
                }}>
                <TextInTouchableOpacityStyled>
                  판매 중인 상품
                </TextInTouchableOpacityStyled>
              </ButtonDetailInfoOfBottom>
              <ButtonDetailInfoOfBottom
                title={'판매내역'}
                color="#464e46"
                onPress={() => {
                  setOnsale(false);
                  setSale(true);
                }}>
                <TextInTouchableOpacityStyled>
                  판매내역
                </TextInTouchableOpacityStyled>
              </ButtonDetailInfoOfBottom>
            </ViewDetailInfoOfBottom>
            {onsale ? (
              <SaleInfo prop={props} />
            ) : sale ? (
              <OnsaleInfo prop={props} />
            ) : (
              <Text>empty part</Text>
            )}
            <TextStyled>구매자용 마이페이지</TextStyled>
            <ViewRowStyled>
              <Button
                title="구매자용 마이페이지"
                color="#464e46"
                onPress={() => {
                  props.navigation.navigate('Mypage');
                }}
              />
            </ViewRowStyled>
          </Contents>
        ) : (
          <Contents>
            <TextStyled>관리자 승인이 필요합니다</TextStyled>
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

        <Nav props={props} />
      </Container>
    );
  }
};

export default MypageSeller;
