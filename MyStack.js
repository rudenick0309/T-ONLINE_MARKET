import React from "react";
import Home from "./pages/Home";
import Bucket from './pages/Bucket'
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Bucket} />
      {/*<Stack.Screen name="Profile" component={ProfileScreen} />*/}
      {/*<Stack.Screen name="Settings" component={SettingsScreen} />*/}
    </Stack.Navigator>
  );
}

export default MyStack;