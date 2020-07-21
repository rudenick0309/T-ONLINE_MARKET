import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import styled from "styled-components";


const ViewStyled = styled.View`
  border: 3px solid blue;
  top:15px;
  height : 50px;
  flex-direction: row;
  justify-content: space-between;
  text-align:center;
  
 
`;
// const TextStyled = styled.Text`
//   margin:10px;
//   font-size:20px;
// `;

const ViewLeftStyled = styled.View`
  font-size:20px;
  flex-direction:row;
`
const ViewRightStyled = styled.View`
  font-size:20px;
  flex-direction:row;
`
const ButtonStyled = styled.Button`
  flex:1;
  width: 40px;
  
`

const Header = () => {
  return (
    <>
      <ViewStyled>
        {/*<ViewChildren>*/}
        <ViewLeftStyled>
          <ButtonStyled title={'1'} onPress={()=>{}} />
        </ViewLeftStyled>

        <ViewRightStyled>
          <ButtonStyled title={'2'} onPress={()=>{}} />
          <ButtonStyled title={'3'} onPress={()=>{}} />
        </ViewRightStyled>
        {/*</ViewChildren>*/}
      </ViewStyled>
    </>
  );
};

export default Header;