import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Input,
  TouchableOpacity,
  Image,
} from 'react-native';
import styled from 'styled-components';

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
