import React from 'react'
import styled from "styled-components";
import {StyleSheet, Text, View, Input, TouchableOpacity} from "react-native";
import Home from "../pages/Home";

const NavView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0px;
  align-items: center;
  border-radius: 50px;
  background-color: #f5efef;
`
const NavIcon = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  width : 50px;
  height : 50px;
`

const NavText = styled.Text`
  font-weight : bold;
  font-size: 15px;
  color: #464e46;
`;

const NavCenterText = styled.Text`
  font-weight : bold;
  width: 70px;
  font-size: 20px;
  color: #464e46;
`

const Nav = ({props}) => {
  return (
    <NavView>
      <NavIcon onPress={ () => {props.navigation.goBack()}} ><NavText>BACK</NavText></NavIcon>
      <NavIcon onPress={ () => {props.navigation.navigate('LOGIN')} } ><NavCenterText>SignIn</NavCenterText></NavIcon>
      <NavIcon onPress={ () => {props.navigation.navigate('Mypage')} }><NavText>MY PAGE</NavText></NavIcon>
    </NavView>
  )
}

export default Nav;
