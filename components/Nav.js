import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {StyleSheet, Text, View, Input, TouchableOpacity} from 'react-native';
import Home from '../pages/Home';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faSearch,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-regular-svg-icons';

const NavView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0px;
  align-items: center;
  border-radius: 50px;
  background-color: #f5efef;
`;
const NavIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const NavText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #464e46;
`;

const NavCenterText = styled.Text`
  font-weight: bold;
  width: 70px;
  font-size: 20px;
  color: #464e46;
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

const Nav = ({props}) => {
  const loginDone = useSelector((state) => state.login?.loginDone);
  const userInfo = useSelector((state) => state.login.data?.userInfo);
  const data = useSelector((state) => state.login?.data);
  // console.log('usertype', userInfo.user_type);

  return (
    <NavView>
      <NavIcon
        onPress={() => {
          props.navigation.goBack();
        }}>
        <FontAwesomeIcon icon={faChevronLeft} color={'#464e46'} size={25} />
      </NavIcon>

      <NavIcon
        onPress={() => {
          props.navigation.navigate('LOGIN');
        }}>
        <NavCenterText>
          <HeaderIcon
            onPress={() => {
              props.navigation.navigate('Search');
            }}>
            <FontAwesomeIcon icon={faSearch} color={'#464e46'} size={25} />
          </HeaderIcon>
        </NavCenterText>
      </NavIcon>
      <NavIcon
        onPress={
          loginDone && data !== undefined && userInfo.user_type === 2
            ? () => {
                props.navigation.navigate('MypageSeller');
              }
            : () => {
                props.navigation.navigate('Mypage');
              }
        }>
        <FontAwesomeIcon icon={faAddressCard} color={'#464e46'} size={30} />
      </NavIcon>
    </NavView>
  );
};

export default Nav;
