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
  
`;

export const BestFlowerContents = styled.ScrollView`
  flex: 1;
  
`;

export const BestFlowerImageView = styled.Image`
  flex:1
  height: 160px;
  resize-mode: contain;
  
`;

export const BestFlowerTextView = styled.Text`
  color : red;
`;
