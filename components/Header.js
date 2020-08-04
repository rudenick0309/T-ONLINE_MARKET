import React, {useState} from "react";
import styled from "styled-components";
import {View, Text, TouchableOpacity, TextInput} from "react-native";

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

const SearchIcon = styled.TextInput`
  width : 150px;
  height : 50px;
  border : 3px solid blue;
`

const Header = ({props}) => {
  const [text, onChangeText] = useState("Here is Search part");



  return (
    <HeaderView>
      <HeaderIcon onPress={ () => {props.navigation.navigate('Home')} } ><Text>로고</Text></HeaderIcon>

      {/* Find like the onClick event*/}
      <SearchIcon
        onChangeText={text => onChangeText(text)}
        value={text}
      />


      <HeaderIcon onPress={ () => {props.navigation.navigate('SignIn')} }><Text>로그인</Text></HeaderIcon>
    </HeaderView>
  )
}

export default Header;
