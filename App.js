import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer'
import Header from './components/Header'
import styled from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import MyStack from "./MyStack";

// import {SafeAreaView} from "react-native-web";  // this is not a SafeAreaView module. just 'from react-native';



const SafeAreaViewStyled = styled.SafeAreaView`
  flex:1;
  border : 4px solid #eb4034
`

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <StatusBar style="auto" />

      {/*<Header/>*/}
      <MyStack/>
      {/*<Footer/>*/}

    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
