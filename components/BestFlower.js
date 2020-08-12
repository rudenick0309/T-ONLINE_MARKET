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

// css part
export const BestFlowerContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 0px 5px;
`;

export const BestFlowerContents = styled.ScrollView`
  flex: 1;
  background-color:white;
  border-radius: 30px;
  margin-bottom: 15px;
`;

export const BestFlowerImageView = styled.Image`
  flex:1
  height: 160px;
  margin-top:10px;
  border-radius:10px;
  resize-mode: contain;
`;

export const BestFlowerTextView = styled.Text`
  color : #222831;
  padding-left : 20px;
  margin-bottom: 5px;
`;
