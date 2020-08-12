import React from "react";
import {StyleSheet, Text, View, Input, TouchableOpacity, Image} from "react-native";
import styled from "styled-components";

// css part
export const RecommendedFlowerContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction:row;
`;

export const RecommendedFlowerContents = styled.View`
  flex: 1;
  background-color:white;
  border-radius: 30px;
`;

export const RecommendedFlowerImageView = styled.Image`
  flex:1;
  resize-mode: contain;
`;

export const RecommendedFlowerTextView = styled.Text`
  color : #222831;
  padding-left : 20px;
  font-size: 15px;
  margin-top:10px;
  text-align:center;
`;
