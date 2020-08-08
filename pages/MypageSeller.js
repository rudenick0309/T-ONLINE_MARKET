import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Modal,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
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
import {loadOrder, loadTracking} from '../reducers/orders';
import SaleInfo from '../components/saleInfo';
import OnsaleInfo from '../components/onsaleInfo';
import {loadSale} from '../reducers/orders';

// css part
const TextInTouchableOpacityStyled = styled.Text`
  color: white;
  font-size: 20px;
  flex: 1;
  width: 100%;
  height: 10%;
  text-align: center;
  letter-spacing: 3px;
`;
const ButtonDetailInfoOfBottom = styled.TouchableOpacity`
  flex:1
  justify-content:center;
  align-items:center;
  flex-direction:row;
`;
const ViewDetailInfoOfBottom = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 50px;
  height: 40px;
  justify-content: space-between;
  background-color: #464e46;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
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
const ViewStyled = styled.View`
  flex: 1;
  height: 170px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: grey;
  border-radius: 20px;
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#464e46',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

// function part
const MypageSeller = (props) => {
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);
  const [onsale, setOnsale] = useState(true);
  const [sale, setSale] = useState(false);
  const dispatch = useDispatch();
  const loginDone = useSelector((state) => state.login?.loginDone);
  const userInfo = useSelector((state) => state.login.data?.userInfo);
  // const message = useSelector((state) => state.login.data?.message);
  const sales = useSelector((state) => state.orders?.sale);

  console.log('sale info salesss', sale);
  useEffect(() => {
    dispatch(loadSale());
  }, []);

  console.log('login done', loginDone);
  console.log('user', userInfo);

  if (loginDone) {
    return (
      <Container>
        <Header props={props} />
        <Contents>
          {userInfo && userInfo.user_admission ? (
            <ScrollView>
              <TextStyled>
                {userInfo ? userInfo.username : ''}님 환영합니다
              </TextStyled>

              <ViewRowStyled>
                <Button
                  title="구매자용 마이페이지"
                  color="#464e46"
                  onPress={() => {
                    props.navigation.navigate('Mypage');
                  }}
                />
              </ViewRowStyled>
              <ViewDetailInfoOfBottom>
                <ButtonDetailInfoOfBottom
                  title={'판매'}
                  color="#464e46"
                  onPress={() => {
                    setOnsale(true);
                    setSale(false);
                  }}>
                  <TextInTouchableOpacityStyled>
                    판매 등록 상품
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
                <OnsaleInfo prop={props} />
              ) : sale ? (
                <SaleInfo props={props} />
              ) : (
                <Text>empty part</Text>
              )}
            </ScrollView>
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
        </Contents>
        <Nav props={props} />
      </Container>
    );
  }
};

export default MypageSeller;
