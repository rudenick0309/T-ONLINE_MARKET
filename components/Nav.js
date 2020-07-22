import React from 'react'
import styled from "styled-components";
import {StyleSheet, Text, View, Input, TouchableOpacity} from "react-native";
import Home from "../pages/Home";

const NavView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`
const NavIcon = styled.TouchableOpacity`
  width : 50px;
  height : 50px;
  border : 3px solid blue;
`

const Nav = ({props}) => {
  return (
    <NavView>
      <NavIcon onPress={ () => {props.navigation.navigate('Home')} } ><Text>홈</Text></NavIcon>
      <NavIcon><Text>마이페이지</Text></NavIcon>
      <NavIcon><Text>카테고리</Text></NavIcon>
    </NavView>
  )
}

export default Nav;