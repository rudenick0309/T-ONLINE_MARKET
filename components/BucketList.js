import React from 'react';
import {View,Text,Image} from "react-native";
import styled from "styled-components";



const ViewStyled = styled.View`
  flex:1;
  height: 100px;
  flex-direction:row;
  justify-content : space-between;
  border: 3px solid green;
`

const ImageOfUpperLeft = styled.Image`
  resize-mode: contain;
  flex:1;
  width:100px;
  border: 2px solid red;
`;

const BucketList = (props) => {
  const img = props.data.goods_img;
  const name = props.data.goods_name;
  const price = props.data.goods_price;
  const count = props.data.count;

  console.log('In BucketList, all the props : ', img);

  return (
    <ViewStyled>

      <View>
        <ImageOfUpperLeft source={{uri: img}} />
      </View>

      <View>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </View>

      <View>
        <Text>{count}</Text>
      </View>

    </ViewStyled>
  )
}

export default BucketList;
