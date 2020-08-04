import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';

// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid green;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid green;
`;

// function part
const ResignCheck = (props) => {
  return (
    <Container>
      <Header props={props} />
      <Contents>
        <Text>탈퇴가 완료되었습니다 </Text>

        <Button
          title="홈으로"
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
