import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';

// css part
const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;
const InButton = styled.Button`
  background-color: black;
`;

// function part
const ResignCheck = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents>
        <Text>탈퇴가 완료되었습니다 </Text>

        <InButton
          title="홈으로"
          color="#464e46"
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        />
      </Contents>
      <Nav props={props} />
    </Container>
  );
};

export default ResignCheck;
