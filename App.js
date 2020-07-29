/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {StatusBar,} from "react-native";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import AppNavigator from "./navigators/AppNavigator";
// import store from "./store/configureStore";
import configureStore from "./store/configureStore";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

const App: () => React$Node = () => {
  return (
    <Provider store={configureStore}>
      <StatusBar style="auto"/>

      <NavigationContainer initialRouteName="Home" theme={Theme}>
        <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
