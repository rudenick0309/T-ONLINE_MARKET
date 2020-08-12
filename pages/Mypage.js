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
const Mypage = (props) => {
  // TODO : changes the state name :  const [checkList, setCheckList] = useState(null);
  const dispatch = useDispatch();
  const loginDone = useSelector((state) => state.login?.loginDone);
  const userInfo = useSelector((state) => state.login.data?.userInfo);
  const data = useSelector((state) => state.login?.data);
  const orderList = useSelector((state) => state.orders?.orderList);
  const order_list = useSelector((state) => state.orders?.order_list);
  const filterValue = props.route.params?.filter;
  const id = props.route.params;
  const [modalVisible, setModalVisible] = useState(false);
  // useEffect(() => {
  //   if (orderList && orderList.length > 0) {
  //     orderList = [];
  //   }
  //   // }, [searchList]);
  // }, [orderList]);

  useEffect(() => {
    // TODO: take the bucket list to axios
    dispatch(loadTracking(id));
    dispatch(loadOrder(id));
  }, []);

  console.log('login done', loginDone);
  console.log('user', userInfo);
  console.log('order data 11', orderList);
  return (
    <Container>
      <Header props={props} />
      <Contents>
        {loginDone ? (
          <ScrollView>
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
            <TextStyled>주문내역</TextStyled>

            {orderList &&
              orderList.map((el) => {
                return (
                  // <Contents>
                  <React.Fragment>
                    <ViewStyled>
                      <ImageViewStyled>
                        <ImageOfUpperLeft source={{uri: el.goods_img}} />
                      </ImageViewStyled>

                      <TextViewStyled>
                        <TextStyled>{el.goods_name}</TextStyled>
                        <TextStyled>{el.goods_price}</TextStyled>
                        <TextStyled>수량 : {el.goods_quantity}</TextStyled>
                        <TextStyled>주문날짜 {el.order_date}</TextStyled>
                        <Modal
                          animationType="slide"
                          transparent={true}
                          visible={modalVisible}
                          onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                          }}>
                          <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                              <Text style={styles.modalText}>
                                배송준비 중입니다
                              </Text>

                              <TouchableHighlight
                                style={{
                                  ...styles.openButton,
                                  backgroundColor: '#464e46',
                                }}
                                onPress={() => {
                                  setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.textStyle}>조회 종료</Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </Modal>
                        <TouchableHighlight
                          style={styles.openButton}
                          onPress={() => {
                            setModalVisible(true);
                          }}>
                          <Text style={styles.textStyle}>배송조회</Text>
                        </TouchableHighlight>
                      </TextViewStyled>
                    </ViewStyled>
                  </React.Fragment>
                  // </Contents>
                );
              })}
          </ScrollView>
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
