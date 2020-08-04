import React, {useState} from "react";
import styled from "styled-components";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import Search from "../pages/Search";


// border : 4px solid #05dfd7;
// background-color: #f5efef;
const HeaderView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0px;
  align-items: center;
  background-color: #f5efef;
`;

const HeaderIcon = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  width : 55px;
  height : 50px;
`;

const HeaderIconText = styled.Text`
  color: #464e46;
  font-weight : bold;
`;

const HeaderCenterText = styled.Text`
  color: #464e46;
  font-weight : bold;
  font-size: 23px;
`;

const Header = ({props}) => {
  const [text, onChangeText] = useState("Here is Search part");

  return (
    <HeaderView>
      <HeaderIcon onPress={() => {
        props.navigation.navigate("Home");
      }}>
        <HeaderIconText>HOME</HeaderIconText>
      </HeaderIcon>

      {/* Find like the onClick event*/}
      {/*<SearchIcon*/}
      {/*  onChangeText={text => onChangeText(text)}*/}
      {/*  value={text}*/}
      {/*/>*/}

      <HeaderCenterText>T ONLINE MARKET</HeaderCenterText>

      <HeaderIcon onPress={() => {
        props.navigation.navigate("Search");
      }}>
        <HeaderIconText>SEARCH</HeaderIconText>
      </HeaderIcon>
    </HeaderView>
  );
};

export default Header;
