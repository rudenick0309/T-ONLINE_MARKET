import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components'
import 'react-native-gesture-handler';
import AppNavigator from "./navigators/AppNavigator";

//TODO : after test, delete or apply the below code ( HomeScreen, SettingScreen )
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// TODO: apply themes in NavigationContainer of App
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

// TODO: after test, delete or apply the below code ( HomeScreend, SettingScreen )
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }
//
// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// const Tab = createBottomTabNavigator();
// function Apps() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

//

const App = () => {
  return (
    <>

      <StatusBar style="auto" />

      <NavigationContainer initialRouteName="Home" theme={Theme} >
        <AppNavigator/>
        {/*<Apps />*/}
      </NavigationContainer>

    </>
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
