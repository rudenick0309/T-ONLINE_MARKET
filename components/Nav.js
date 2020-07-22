import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import styled from "styled-components";


import {makeStyles} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const TextStyled = styled.Text`
  margin:10px;
  font-size:30px;
`;

// flex:1;
  // position: relative;
const ViewStyled = styled.View`
  border: 3px solid blue;
  bottom:-630px;
  height : 50px;
  flex-direction: row;
  justify-content: space-around;
  text-align:center;
 
`;

const ViewChildren = styled.View`
  flex:1;
  flex-direction: row;
  
  position : absolute;
  bottom:1;
  border: 3px solid blue;
`

const ButtonStyled = styled.Button`
  flex:1;
  width: 40px;
`

const Footer = () => {

  return (
    <ViewStyled>
      {/*<ViewChildren>*/}
        <ButtonStyled title={'1'} onPress={()=>{}}/>
        <ButtonStyled title={'2'} onPress={()=>{}}/>
        <ButtonStyled title={'3'} onPress={()=>{}}/>
      {/*</ViewChildren>*/}
    </ViewStyled>
  );
};

export default Footer;