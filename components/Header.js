import React, {useState, useCallback} from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '../reducers/login';
import Search from '../pages/Search';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
// import { Fonts } from "../src/fonts/Fonts";
// console.log('In Header, Fonts : ', Fonts);

const HeaderView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0px;
  align-items: center;
  background-color: #f5efef;
`;

const HeaderIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 55px;
  width: 50px;
  height: 50px;
`;

const HeaderIconText = styled.Text`
  color: #464e46;
  font-weight: bold;
`;

const HeaderCenterText = styled.Text`
  color: #464e46;
  letter-spacing: 5px;
  font-size: 23px;
  font-family: Consola;
`;

const SearchIcon = styled.TextInput`
  width: 150px;
  height: 50px;
  border: 3px solid blue;
`;

const Header = ({props}) => {
  const loginDone = useSelector((state) => state.login?.loginDone);

  const dispatch = useDispatch();
  // const font_rubik = Fonts["Rubik-Regular"]
  const onPressSignout = useCallback(() => {
    props.navigation.navigate('Home');
    dispatch(logoutAction());
    // alert('로그아웃 하셨습니다');
  }, []);

  return (
    <HeaderView>
      <HeaderIcon
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <FontAwesomeIcon icon={faHome} color={'#464e46'} size={25} />
        {/*<HeaderIconText>HOME</HeaderIconText>*/}
      </HeaderIcon>

      <HeaderCenterText>T - MARKET</HeaderCenterText>

      {loginDone === true ? (
        <HeaderIcon onPress={onPressSignout}>
          <FontAwesomeIcon icon={faSignOutAlt} color={'#464e46'} size={25} />
        </HeaderIcon>
      ) : (
        <HeaderIcon
          onPress={() => {
            props.navigation.navigate('SignIn');
          }}>
          <FontAwesomeIcon icon={faSignInAlt} color={'#464e46'} size={25} />
        </HeaderIcon>
      )}

      {/*<HeaderIcon onPress={() => {*/}
      {/*  props.navigation.navigate("Search");*/}
      {/*}}>*/}
      {/*  <HeaderIconText>SEARCH</HeaderIconText>*/}
      {/*</HeaderIcon>*/}
    </HeaderView>
  );
};

export default Header;
