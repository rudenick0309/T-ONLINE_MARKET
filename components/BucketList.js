import React from 'react';
import {View,Text,Image} from "react-native";
import styled from "styled-components";

const ViewStyled = styled.View`
  flex:1;
  height: 100px;
  flex-direction:row;
  justify-content : space-between;
`

const ImageOfUpperLeft = styled.Image`
  resize-mode: contain;
  flex:1;
  width:100px;
`;

const TextViewStyled = styled.View`
  margin-bottom: 20px;
`


const BucketList = (props) => {
  // console.log('In BucketList, all the props : ', props);
  // console.log('In BucketList, all the props : ', props.props.route.params);

  // const img = props.props.route.params.goods_img;
  // const name = props.props.route.params.goods_name;
  // const price = props.props.route.params.goods_price;
  // const count = props.props.route.params.count;

  const img = props.data?.goods_img;
  const name = props.data?.goods_name;
  const price = props.data?.goods_price;
  const count = props.data?.count;


  return (
    <ViewStyled>

      <TextViewStyled>
        <ImageOfUpperLeft source={{uri: img}} />
      </TextViewStyled>

      <TextViewStyled>
        <Text>{name}</Text>
        <Text>{count}</Text>
        <Text>{price}</Text>
      </TextViewStyled>

      {/*<View>*/}
      {/*  <Text>{count}</Text>*/}
      {/*</View>*/}

    </ViewStyled>
  )
}

export default BucketList;
