import React, {useCallback} from 'react';
import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '../reducers/login';

const HeaderView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;
const HeaderIcon = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border: 3px solid blue;
`;

const Header = ({props}) => {
  const loginDone = useSelector((state) => state.login?.loginDone);

  const dispatch = useDispatch();

  const onPressSignout = useCallback(() => {
    dispatch(logoutAction());
    alert('로그아웃 하셨습니다');
    props.navigation.navigate('Home');
  }, []);

  return (
    <HeaderView>
      <HeaderIcon
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Text>1</Text>
      </HeaderIcon>
      <HeaderIcon>
        <Text>2</Text>
      </HeaderIcon>
      {loginDone === true ? (
        <HeaderIcon onPress={onPressSignout}>
          <Text>로그아웃</Text>
        </HeaderIcon>
      ) : (
        <HeaderIcon
          onPress={() => {
            props.navigation.navigate('SignIn');
          }}>
          <Text>로그인</Text>
        </HeaderIcon>
      )}
    </HeaderView>
  );
};

export default Header;
