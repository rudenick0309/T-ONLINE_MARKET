import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {StyleSheet, Text, View, Input, TouchableOpacity} from 'react-native';
import Home from '../pages/Home';
import {useSelector} from 'react-redux';

const NavView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
`;
const NavIcon = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border: 3px solid blue;
`;

const Nav = ({props}) => {
  const loginDone = useSelector((state) => state.login?.loginDone);
  const userInfo = useSelector((state) => state.login.data?.userInfo);
  const message = useSelector((state) => state.login.data?.message);
  // console.log('usertype', userInfo.user_type);

  return (
    <NavView>
      <NavIcon
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Text>Home Icon</Text>
      </NavIcon>
      {loginDone && message ? (
        <NavIcon
          onPress={() => {
            props.navigation.navigate('MypageSeller');
          }}>
          <Text>My page Seller Icon</Text>
        </NavIcon>
      ) : (
        <NavIcon
          onPress={() => {
            props.navigation.navigate('Mypage');
          }}>
          <Text>Msy page Icon</Text>
        </NavIcon>
      )}

      <NavIcon
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Text>back</Text>
      </NavIcon>
    </NavView>
  );
};

export default Nav;
