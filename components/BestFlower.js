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
  border: 3px solid blue
`;

export const BestFlowerContents = styled.ScrollView`
  flex: 1;
  border: 3px solid grey;
`;

export const BestFlowerImageView = styled.Image`
  flex:1
  height: 160px;
  resize-mode: contain;
  border: 2px solid yellow;
`;

export const BestFlowerTextView = styled.Text`
  color : red;
`;
