import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Input,
  TouchableOpacity,
  Image,
} from 'react-native';
import styled from 'styled-components';
import {loadSale} from '../reducers/orders';
import {useDispatch, useSelector} from 'react-redux';

export const OrderContainer = styled.TouchableOpacity`
  flex: 1;
  border: 3px solid red
  flex-direction:row;
`;

export const OrderContents = styled.View`
  flex: 1;
  border: 3px solid red;
`;

export const OrderImageView = styled.Image`
  flex:1
  height: 160px;
  border: 2px solid yellow;
`;

export const OrderTextView = styled.Text`
  color: blue;
`;

const ViewStyled = styled.View`
  flex: 1;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: grey;
  border-radius: 20px;
`;

const ImageOfUpperLeft = styled.Image`
  resize-mode: contain;
  flex: 1;
  width: 100px;
`;

const ImageViewStyled = styled.View`
  margin-left: 30px;
  margin-bottom: 13px;
`;

const TextViewStyled = styled.View`
  margin-top: 20px;
  padding-right: 30px;
  align-items: flex-end;
`;

const TextStyled = styled.Text`
  font-size: 15px;
  margin-bottom: 3px;
`;

const SaleInfo = (props) => {
  console.log('sale info props', props);
  const dispatch = useDispatch();
  const sale = useSelector((state) => state.orders?.sale);

  console.log('sale info salesss', sale);
  useEffect(() => {
    dispatch(loadSale());
  }, []);

  return (
    <ViewStyled>
      <Text>SALE</Text>
      {/*<TouchableOpacity onPress={onPressToBuckt}>*/}
      {sale &&
        sale.map((el) => {
          return (
            <React.Fragment>
              <ImageViewStyled>
                <ImageOfUpperLeft source={{uri: el.goods_img}} />
              </ImageViewStyled>

              <TextViewStyled>
                <TextStyled>{el.goods_name}</TextStyled>
                <TextStyled>{el.goods_price}</TextStyled>
              </TextViewStyled>
            </React.Fragment>
          );
        })}

      {/*<View>*/}
      {/*  /!*<Text>{count}</Text>*!/*/}
      {/*</View>*/}
      {/*</TouchableOpacity>*/}
    </ViewStyled>
  );
};

export default SaleInfo;
