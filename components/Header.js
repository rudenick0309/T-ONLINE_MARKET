import React from 'react'
import styled from "styled-components";
import {View, Text, TouchableOpacity} from "react-native";

const HeaderView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`
const HeaderIcon = styled.TouchableOpacity`
  width : 50px;
  height : 50px;
  border : 3px solid blue;
`

const Header = ({props}) => {
  return (
    <HeaderView>
      <HeaderIcon onPress={ () => {props.navigation.navigate('Home')} } ><Text>1</Text></HeaderIcon>
      <HeaderIcon><Text>2</Text></HeaderIcon>
      <HeaderIcon><Text>3</Text></HeaderIcon>
    </HeaderView>
  )
}

export default Header;
