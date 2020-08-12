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
    background: "#fbf5f5",
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
//
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
